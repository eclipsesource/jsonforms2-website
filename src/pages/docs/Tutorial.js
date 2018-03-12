import React from 'react';
import {Typography, withStyles} from "material-ui";
import { Provider } from 'react-redux';
import MarkdownElement from "../../common/MarkdownElement";
import commonStyles from "../../common/styles";
import { person } from '@jsonforms/examples';
import Demo from "../../common/Demo";
import {createJsonFormsStore} from "../../common/store";
/* eslint import/no-webpack-loader-syntax: off */
const init = require('!raw-loader!./listings/init.md');
const installation = require('!raw-loader!./listings/installation.md');
const setupStore = require('!raw-loader!./listings/setupStore.md');
const render = require('!raw-loader!./listings/render.md');
const initAction = require('!raw-loader!./listings/initAction.md');
const imports = require('!raw-loader!./listings/imports.md');
const variables = require('!raw-loader!./listings/variables.md');

const styles = () => ({
  link: commonStyles.link,
  list: commonStyles.list,
  code: commonStyles.code,
  display1: commonStyles.display1,
});

const store = createJsonFormsStore({
  data: person.data,
  schema: person.personCoreSchema,
  uischema: person.uischema
});

const Tutorial = ({ classes }) => {

  return (
    <div>
      <Typography
        type={'display1'}
        className={classes.display1}
      >
        Tutorial
      </Typography>
      <p>
        This section describes you to integrate JSON Forms into a React app from scratch.
        Alternatively you can also clone
        the <a href="https://github.com/eclipsesource/jsonforms-react-seed" className={classes.link}>seed app</a>.
      </p>

      <ol className={classes.list}>

        <li>
          We'll use <a href="https://github.com/facebookincubator/create-react-app" className={classes.link}>create-react-app</a> to scaffold a basic React application which we'll use as a
          starting point.
          If you didn't install create-react-app yet, please do so now before continuing.

          Let's now create a basic application with:
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`bash\ncreate-react-app my-jsonforms-app\n\`\`\``}
          />
          Scaffolding may take a couple of moments. Once it's finished, switch to your newly created app and
          install all dependencies:
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`bash\ncd my-jsonforms-app\nnpm install\n\`\`\``}
          />
        </li>

        <li>
          Install JSON Forms and the material renderer set. We'll use an example from JSON Forms in order to obtain a JSON schema,
          a corresponding UI schema and a data instance to be rendered. You don't need to install
          the <code>@jsonforms/examples</code> module if you plan to supply your own schema in the following:
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`bash\n${installation}\n\`\`\``}
          />
        </li>

        <li>
          Switch to the <code>src</code> directory and open <code>index.js</code> with an editor of your choice.
          Let's add a couple of imports first:
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`js\n${imports}\n\`\`\``}
          />

          The <code>person</code> import is necessary for importing the person example
          while <code>@jsonforms/material-renderers</code> imports
          the <a href="http://http://material-ui-next.com/" className={classes.link}>Material UI</a> based
          renderer set. The other ones will be explained shortly.

          Now let's define the variables that are crucial for JSON Forms to work,
          that is, <code>data</code>, <code>schema</code> and <code>uischema</code>. As previously mention, we are using
          the person example from JSON Forms here:

          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`js\n${variables}\n\`\`\``}
          />

          These variables are defined as follows, in case you are interested:

          <Provider store={store}>
            <Demo
              schema={person.schema}
              uischema={person.uischema}
              data={person.data}
            />
          </Provider>
        </li>

        <li>
          Still in <code>index.js</code>, create a new store with the <code>createStore</code> function provided by redux.
          For that purpose JSON Forms exports its reducer via <code>jsonformsReducer</code>. For the initial state we supply
          the renderers we want to use, which we have imported from <code>@jsonforms/material-renderers</code>:

          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`js\n${setupStore}\n\`\`\``}
          />

          In order for JSON Forms to initialize correctly, we also need to dispatch an initialization action that will
          set-up some internal state that's necessary for JSON Forms:

          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`js\n${initAction}\n\`\`\``}
          />
        </li>
        {/**/}
        <li>
          Wrap the existing <code>App</code> component within a <code>Provider</code>
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`jsx\n${init}\n\`\`\``}
          />
          You can close the <code>index.js</code> file now.
        </li>

        <li>
          Open the <code>App.js</code> file and
          import the <code>JsonForms</code> component from <code>@jsonforms/react</code>. Add
          the <code>JsonForms</code> anywhere you like in oder to get a form rendered:
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`jsx\n${render}\n\`\`\``}
          />
        </li>
        If you are wondering why the control labels are prefixed with <code>%</code> in the UI schema:
        this is because of i18n, a feature we are currently working on.
      </ol>
    </div>
  );
};

export default withStyles(styles)(Tutorial);