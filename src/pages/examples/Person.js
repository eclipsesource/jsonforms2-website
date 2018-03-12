import React from 'react';
import { person } from '@jsonforms/examples';
import { JsonForms } from '@jsonforms/react';
import { Provider } from 'react-redux';
import {Typography, withStyles} from "material-ui";
import commonStyles from "../../common/styles";
import {createJsonFormsStore} from "../../common/store";
import Demo from "../../common/Demo";

const styles = () => ({
  display1: commonStyles.display1
});

const Person = ({ classes }) => {

  const store = createJsonFormsStore({
    data: person.data,
    schema: person.schema,
    uischema: person.uischema
  });

  return (
    <div>
      <Typography
        type={'display1'}
        className={classes.display1}
      >
        Person example
      </Typography>
      <Provider store={store}>
        <Demo
          js={() => <JsonForms/>}
          schema={person.schema}
          uischema={person.uischema}
        />
      </Provider>
    </div>
  );
};

export default withStyles(styles)(Person);