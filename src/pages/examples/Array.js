import React from 'react';
import { array } from '@jsonforms/examples';
import { JsonForms } from '@jsonforms/react';
import { Provider } from 'react-redux';
import {Typography, withStyles} from "material-ui";
import commonStyles from "../../common/styles";
import Demo from "../../common/Demo";
import {createJsonFormsStore} from "../../common/store";

const styles = () => ({
  display1: commonStyles.display1
});

const Array = ({ classes }) => {

  const uischema = {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        scope: '#/properties/comments'
      }
    ]
  };
  const store = createJsonFormsStore({
    data: array.data,
    schema: array.schema,
    uischema
  });

  return (
    <div>
      <Typography
        variant={'display1'}
        className={classes.display1}
      >
        Array Control
      </Typography>
      <Provider store={store}>
        <Demo
          schema={array.schema}
          uischema={uischema}
          js={() => (
            <JsonForms />
          )}
        />
      </Provider>
    </div>
  );
};

export default withStyles(styles)(Array);