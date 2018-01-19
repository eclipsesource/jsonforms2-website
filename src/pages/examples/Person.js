import React from 'react';
import { person } from '@jsonforms/examples';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core';
import { Provider } from 'react-redux';
import {Typography, withStyles} from "material-ui";
import commonStyles from "../common/styles";

const styles = () => ({
  display1: commonStyles.display1
});

const Person = ({ classes }) => {

  const store = initJsonFormsStore({
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
        <DispatchRenderer />
      </Provider>
    </div>
  );
};

export default withStyles(styles)(Person);