import React from 'react';
import { array } from '@jsonforms/examples';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core';
import { Provider } from 'react-redux';
import {Typography, withStyles} from "material-ui";
import commonStyles from "../../common/styles";
import Demo from "../../common/Demo";

const styles = () => ({
  display1: commonStyles.display1
});

const Array = ({ classes }) => {

  const uischema = {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        scope: {
          $ref: '#/properties/comments'
        },
      }
    ]
  };
  const store = initJsonFormsStore({
    data: array.data,
    schema: array.schema,
    uischema
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
        <Demo
          schema={array.schema}
          uischema={uischema}
          js={() => (
            <DispatchRenderer />
          )}
        />
      </Provider>
    </div>
  );
};

export default withStyles(styles)(Array);