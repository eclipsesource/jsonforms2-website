import React from 'react';
import { useState } from 'react';
import { useJsonForms, withJsonFormsEnumProps, withTranslateProps } from '@jsonforms/react';
import { CircularProgress } from '@mui/material';
import { Unwrapped } from '@jsonforms/material-renderers';
import { APIContext } from '../../docs/tutorials/dynamic-enum';
const { MaterialEnumControl } = Unwrapped;

const RegionControl = (
  props
) => {
  const schema = props.schema;
  const { handleChange } = props;
  const [options, setOptions] = useState([]);
  const api = React.useContext(APIContext);
  const country = useJsonForms().core?.data.country;
  const [previousCountry, setPreviousCountry] = useState();

  const endponit = schema.endpoint;
  const dependent = schema.dependent ? schema.dependent : [];

  if (previousCountry !== country) {
    setOptions([]);
    setPreviousCountry(country);
    api.get(endponit + '/' + country).then((result) => {
      setOptions(result);
    });
  }

  if (options.length === 0 && country !== undefined) {
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
  withTranslateProps(React.memo(RegionControl)),
  false
);