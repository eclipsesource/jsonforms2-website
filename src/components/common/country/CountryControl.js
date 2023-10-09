import React, { useEffect } from 'react';
import { useState } from 'react';
import { withJsonFormsEnumProps, withTranslateProps } from '@jsonforms/react';
import { CircularProgress } from '@mui/material';
import { Unwrapped } from '@jsonforms/material-renderers';
import { APIContext } from '../../docs/tutorials/dynamic-enum';

const { MaterialEnumControl } = Unwrapped;


const CountryControl = (
  props
) => {
  const { handleChange } = props;
  const [options, setOptions] = useState([]);
  const api = React.useContext(APIContext);
  const schema = props.schema ;

  const endponit = schema.endpoint;
  const dependent = schema.dependent ? schema.dependent : [];

  useEffect(() => {
    setOptions([]);
    api.get(endponit).then((result) => {
      setOptions(result);
    });
  }, [api, endponit]);

  if (options.length === 0) {
    return <CircularProgress />;
  }

  return (
    <MaterialEnumControl
      {...props}
      handleChange={(path, value) => {
        handleChange(path, value);
        dependent.forEach((path) => {
          handleChange(path, undefined);
        });
      }}
      options={options.map((option) => {
        return { label: option, value: option };
      })}
    />
  );
};

export default withJsonFormsEnumProps(
  withTranslateProps(React.memo(CountryControl)),
  false
);