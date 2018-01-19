import React from 'react';
import { rule } from '@jsonforms/examples';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core';
import { Provider } from 'react-redux';
import {Typography, withStyles} from "material-ui";
import commonStyles from "../../common/styles";

const styles = () => ({
  display1: commonStyles.display1
});

const RuleExample = ({ classes }) => {

  const store = initJsonFormsStore({
    data: rule.data,
    schema: rule.schema,
    uischema: rule.uischema
  });

  return (
    <div>
      <Typography
        type={'display1'}
        className={classes.display1}
      >
        Rules
      </Typography>

      <p>
        TODO: Describe example
      </p>

      <Provider store={store}>
        <DispatchRenderer />
      </Provider>
    </div>
  );
};

export default withStyles(styles)(RuleExample);