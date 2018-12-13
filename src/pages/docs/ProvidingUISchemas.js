import React from 'react';
import Typography from "@material-ui/core/Typography";
import DocPage from "./DocPage";
/* eslint import/no-webpack-loader-syntax: off */
const registerUISchemaCode = require('!raw-loader!./listings/registerUISchema.md');
const retrieveUISchemaCode = require('!raw-loader!./listings/retrieveUISchema.md');

export const ProvidingUISchemas = () => {

  return (
    <DocPage>
      <Typography variant='h1'>Providing UISchemas</Typography>

      <Typography variant='body1'>
        When initializing JSON Forms you have to provide a UISchema. In many cases this is already enough as it covers most use cases.
        But in some cases, especially when rendering (nested) arrays, you have to provide a UISchema which can be retrieved.
        This allows subsequent renderers to use a different UI Schema than the the one specified initially.
      </Typography>

      <Typography variant='h2'>
        Registering an UISchema
      </Typography>
      <p>The registration of an UISchema looks as follows:</p>

      <pre className='code-listing'>
        <code className='language-jsx'>
          {registerUISchemaCode}
        </code>
      </pre>

      <Typography variant='h2'>
        Retrieving a registered UISchema
      </Typography>
      <Typography variant='body1'>
        To retrieve the registered UISchema you can call the 'findUISchema' function which is provided through the properties.
        This function needs the schema, the schemaPath and a subpath. All those parameters are also passed through the properties.
        The usage is shown using a renderer.
      </Typography>

      <pre className='code-listing'>
        <code className='language-jsx'>
          {retrieveUISchemaCode}
        </code>
      </pre>
    </DocPage>
  );
};

export default ProvidingUISchemas;
