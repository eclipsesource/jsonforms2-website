import React from 'react';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import MarkdownElement from "../../common/MarkdownElement";
import commonStyles from '../../common/styles';
/* eslint import/no-webpack-loader-syntax: off */
const registerUISchemaCode = require('!raw-loader!./listings/registerUISchema.md');
const retrieveUISchemaCode = require('!raw-loader!./listings/retrieveUISchema.md');


const styles = theme => ({
  code: commonStyles.code(theme),
  headline: commonStyles.headline,
  title: {
    marginTop: '0.5em'
  },
  display1: commonStyles.display1,
  list: commonStyles.list,
  link: commonStyles.link
});

export const ProvidingUISchemas = ({ classes }) => {

  return (
    <div>
      <Typography variant={'display1'} className={classes.display1}>Providing UISchemas</Typography>

      <p>
        When initializing JSON Forms you have to provide a UISchema. In many cases this is already enough as it covers most use cases.
        But in some cases, especially when rendering (nested) arrays, you have to provide a UISchema which can be retrieved.
        This allows subsequent renderers to use a different UI Schema than the the one specified initially.
      </p>

      <Typography variant={'title'} className={classes.title}>
        Registering an UISchema
      </Typography>
      <p>The registration of an UISchema looks as follows:</p>

      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`jsx\n${registerUISchemaCode}\n\`\`\``}
      />

      <Typography variant='title' className={classes.title}>
        Retrieving a registered UISchema
      </Typography>
      <p>
        To retrieve the registered UISchema you can call the 'findUISchema' function which is provided through the properties.
        This function needs the schema, the schemaPath and a subpath. All those parameters are also passed through the properties.
        The usage is shown using a renderer.
      </p>

      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`jsx\n${retrieveUISchemaCode}\n\`\`\``}
      />

      <p style={{
        backgroundColor: '#d1d1d1',
        padding: '0.5em',
        borderRadius: '0.5em',
        marginTop: '0.5em',
        marginBottom: '0.5em'
      }}>
        <strong>NOTE</strong>: We are working on the sections. Expect this page to be updated soon!
      </p>
    </div>

);
};

export default withStyles(styles)(ProvidingUISchemas);
