import React from 'react';
import {Typography, withStyles} from "material-ui";
import MarkdownElement from "../../MarkdownElement";
import commonStyles from "../common/styles";
/* eslint import/no-webpack-loader-syntax: off */
const init = require('!raw-loader!./listings/init.md');
const existingRedux = require('!raw-loader!./listings/existing-redux.md');

const styles = () => ({
  code: commonStyles.code,
  display1: commonStyles.display1,
});

const GettingStarted = ({ classes }) => {

  return (
    <div>
      <Typography
        type={'display1'}
        className={classes.display1}
      >
        Getting started
      </Typography>
      <p>
        This section describes how you can get quickly started with JSON Forms.
      </p>

      <Typography type={'headline'}>Usage with new redux store</Typography>
      <ol style={{ paddingLeft: '1em' }}>
        <li>
          Install JSON Forms and renderer set
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`bash\nnpm install --save @jsonforms/core\n\`\`\``}
          />
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`bash\nnpm install --save @jsonforms/material-renderers\n\`\`\``}
          />
        </li>

        <li>
          Create a new store with the <code>initJsonFormsStore</code> helper function. If you already have an existing
          store, see the next section. We also need to import a renderer set in order to render anything so we import
          the material renderer set.

          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`js\nimport { initJsonFormsStore } from '@jsonforms/core';\nimport '@jsonforms/material-renderers';\n\nconst store = initJsonFormsStore(\n  data,\n  schema,\n  uischema\n);\n\`\`\``}
          />
        </li>

        <li>
          Import <code>Provider</code> from <code>react-redux</code>&nbsp;
          and <code>DispatchRenderer</code> from <code>@jsonforms/core</code>
          . Assign the newly created store to the store property of the Provider.
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`jsx\n${init}\n\`\`\``}
          />

          The <code>DispatchRenderer</code> component is responsible for kicking of rendering with JSON Forms.
        </li>
      </ol>

      <Typography type={'headline'}>Usage with existing redux store</Typography>
      <p id={'existing-redux'}>
        If you already have a store you need to import the <code>jsonformsReducer</code> and put it into your store
      </p>
      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`jsx\n${existingRedux}\n\`\`\``}
      />
      <p>
        Note that when setting up your own store, you need to hand in the <code>jsonforms</code> substore into
        state selector like <code>getData()</code>.
      </p>
    </div>
  );
};

export default withStyles(styles)(GettingStarted);