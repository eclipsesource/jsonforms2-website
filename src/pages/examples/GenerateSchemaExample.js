import React from 'react';
import {generateSchema} from '@jsonforms/examples';
import {JsonForms} from '@jsonforms/react';
import {generateDefaultUISchema, generateJsonSchema} from '@jsonforms/core';
import {Provider} from 'react-redux';
import Typography from "@material-ui/core/Typography";
import {Demo} from "../../common";
import {createJsonFormsStore} from "../../common/store";

const GenerateSchemaExample = () => {

  const schema = generateJsonSchema(generateSchema.data);
  // TODO: this example shouldn't generate its UI schema
  const uischema = generateDefaultUISchema(schema);

  const store = createJsonFormsStore({
    data: generateSchema.data,
    schema,
    uischema
  });

  return (
    <div className='example'>
      <Typography variant='body1'>
        This example demonstrates that JSON Forms is already able to render a form just by specifying
        the data to be rendered. Both, the JSON schema as well as the UI schema have been omitted in this example
        as you can see yourself if you check the provided schema and UI schema.
      </Typography>
      <Typography variant='body1'>
        If no JSON schema is provided to JSON Forms it will generate one. In most uses cases this might not be the
        thing you want, but it's a useful feature nevertheless, e.g. for rapid prototyping.
      </Typography>

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

export default GenerateSchemaExample;