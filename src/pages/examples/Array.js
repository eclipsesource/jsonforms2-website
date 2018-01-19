import React from 'react';
import { array } from '@jsonforms/examples';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core';
import { Provider } from 'react-redux';
import {Typography, withStyles} from "material-ui";
import commonStyles from "../common/styles";

const styles = () => ({
  display1: commonStyles.display1
});

const Array = ({ classes }) => {

  const store = initJsonFormsStore({
    data: array.data,
    schema: array.schema,
    uischema: {
      type: 'VerticalLayout',
      elements: [
        {
          type: 'Control',
          scope: {
            $ref: '#/properties/comments'
          },
        }
      ]
    }
  });

  return (
    <div>
      <Typography
        type={'display1'}
        className={classes.display1}
      >
        Array Control
      </Typography>
      <Provider store={store}>
        <DispatchRenderer />
      </Provider>
    </div>
  );
};

export default withStyles(styles)(Array);