import React from 'react';
import { categorization } from '@jsonforms/examples';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core';
import { Provider } from 'react-redux';
import {Typography, withStyles} from "material-ui";
import commonStyles from "../../common/styles";

const styles = () => ({
  display1: commonStyles.display1
});

const CategorizationExample = ({ classes }) => {

  const store = initJsonFormsStore({
    data: {
      name: 'Max Power',
      vegetrian: true,
      birthDate: '1956-05-12',
      nationality: 'US'
    },
    schema: categorization.schema,
    uischema: categorization.uischema
  });

  return (
    <div>
      <Typography
        type={'display1'}
        className={classes.display1}
      >
        Categorization Control
      </Typography>
      <Provider store={store}>
        <DispatchRenderer />
      </Provider>
    </div>
  );
};

export default withStyles(styles)(CategorizationExample);