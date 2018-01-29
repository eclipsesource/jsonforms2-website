import React from 'react';
import {Typography, withStyles} from "material-ui";
import MarkdownElement from "../../common/MarkdownElement";
import commonStyles from "../../common/styles";
/* eslint import/no-webpack-loader-syntax: off */
const init = require('!raw-loader!./listings/init.md');
const installation = require('!raw-loader!./listings/installation.md');
const setupStore = require('!raw-loader!./listings/setupStore.md');
const render = require('!raw-loader!./listings/render.md');
const initAction = require('!raw-loader!./listings/initAction.md');

const styles = () => ({
  link: commonStyles.link,
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
        Alternatively, you can also clone
        the <a href="https://github.com/eclipsesource/jsonforms-react-seed" className={classes.link}>seed</a> if you
        want access to the code directly.
      </p>

      <Typography type={'headline'}>Usage with redux</Typography>
      <ol style={{ paddingLeft: '1em' }}>

        <li>
          We'll use <a href="https://github.com/facebookincubator/create-react-app" className={classes.link}>create-react-app</a> to scaffold a basic React application which we'll use as a
          starting point.
          If you didn't install create-react-app yet, please do so now.
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
          Install JSON Forms and renderer set
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`bash\n${installation}\n\`\`\``}
          />
        </li>

        <li>
          Switch to the <code>src</code> directory and open <code>index.js</code> with an editor of your choice.
          Let's now create a new store with the <code>createStore</code> function provided by redux. JSON Forms
          exports its reducer and makes use of <code>redux-thunk</code>, hence we must set-up the necessary imports:

          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`js\n${setupStore}\n\`\`\``}
          />

          In order for JSON Forms to initialize correctly, we need to dispatch an <code>INIT</code> action that will
          set-up some internal state that's necessary for JSON Forms to work properly:

          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`js\n${initAction}\n\`\`\``}
          />

          Finally, if you want validation results to appear initially, dispatch the validate action:

          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`js\nstore.dispatch(Actions.validate())\n\`\`\``}
          />
        </li>
        {/**/}
        <li>
          Import <code>Provider</code> from <code>react-redux</code>&nbsp;
          and assign the newly created store to the store property of the Provider.
          Wrap the existing <code>App</code> component within a <code>Provider</code>
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`jsx\n${init}\n\`\`\``}
          />

          The <code>DispatchRenderer</code> component is responsible for kicking of rendering with JSON Forms.
        </li>

        <li>
          Finally, open the <code>App</code> component and import
          the <code>DispatchRenderer</code> from <code>@jsonforms/core</code>. Add
          the <code>DispatchRenderer</code> anywhere you like in oder to get a form rendered:
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`jsx\n${render}\n\`\`\``}
          />
        </li>
      </ol>
    </div>
  );
};

export default withStyles(styles)(GettingStarted);