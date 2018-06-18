import React from 'react';
import { generateUISchema } from '@jsonforms/examples';
import { JsonForms } from '@jsonforms/react';
import { generateDefaultUISchema, generateJsonSchema } from '@jsonforms/core';
import { Provider } from 'react-redux';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { commonStyles, Demo, RadiumHashLink } from "../../common";
import {createJsonFormsStore} from "../../common/store";

const styles = () => ({
  display1: commonStyles.display1,
  link: commonStyles.link
});

const GenerateUISchemaExample = ({ classes }) => {

  const schema = generateJsonSchema(generateUISchema.data);
  const uischema = generateDefaultUISchema(schema)

  const store = createJsonFormsStore({
    data: generateUISchema.data,
    schema,
    uischema,
  });

  return (
    <div>
      <Typography
        variant={'display1'}
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
          schema={schema}
          uischema={uischema}
          js={() =>
            <JsonForms />
          }
        />
      </Provider>
    </div>
  );
};

export default withStyles(styles)(GenerateUISchemaExample);