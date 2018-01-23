import React from 'react';
import { generateUi } from '@jsonforms/examples';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core';
import { Provider } from 'react-redux';
import {Typography, withStyles} from "material-ui";
import { commonStyles, Demo, RadiumHashLink } from "../../common";

const styles = () => ({
  display1: commonStyles.display1,
  link: commonStyles.link
});

const GenerateUISchemaExample = ({ classes }) => {

  const store = initJsonFormsStore({
    data: generateUi.data,
    schema: generateUi.schema,
    uischema: generateUi.uischema
  });

  return (
    <div>
      <Typography
        type={'display1'}
        className={classes.display1}
      >
        Inferring a UI schema
      </Typography>

      <p>
        <p>
          If you provide no UI schema to JSON Forms it'll generate one. The generated layout will be
          a <RadiumHashLink to={'/docs/uischema/layouts#vertical-layout'} className={classes.link}>VerticalLayout</RadiumHashLink> containing
          controls for the provided JSON schema.
        </p>
      </p>

      <Provider store={store}>
        <Demo
          schema={generateUi.schema}
          uischema={generateUi.uischema}
          js={() =>
            <DispatchRenderer />
          }
        />
      </Provider>
    </div>
  );
};

export default withStyles(styles)(GenerateUISchemaExample);