import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Provider} from 'react-redux';
import {person} from '@jsonforms/examples';
import Demo from "../../common/Demo";
import {createJsonFormsStore} from "../../common/store";
import DocPage from "./DocPage";
/* eslint import/no-webpack-loader-syntax: off */
const init = require('!raw-loader!./listings/init.md');
const installation = require('!raw-loader!./listings/installation.md');
const setupStore = require('!raw-loader!./listings/setupStore.md');
const render = require('!raw-loader!./listings/render.md');
const initAction = require('!raw-loader!./listings/initAction.md');
const imports = require('!raw-loader!./listings/imports.md');
const variables = require('!raw-loader!./listings/variables.md');

const store = createJsonFormsStore({
  data: person.data,
  schema: person.personCoreSchema,
  uischema: person.uischema
});

const Tutorial = () => (
  <DocPage>
    <Typography variant='h1'>
      Tutorial
    </Typography>
    <Typography variant='body1'>
      This section describes you to integrate JSON Forms into a React app from scratch.
      Alternatively you can also clone
      the <a href="https://github.com/eclipsesource/jsonforms-react-seed" className='link'>seed app</a>.
    </Typography>

    <ol>

      <li>
        <Typography variant='body1'>
          We'll use <a href="https://github.com/facebookincubator/create-react-app"
                       className='link'>create-react-app</a> to scaffold a basic React application which
          we'll use as a
          starting point.
          If you didn't install create-react-app yet, please do so now before continuing.
        </Typography>
        <Typography variant='body1'>
          Let's now create a basic application with:
        </Typography>
        <pre className='code-listing'>
              <code className='language-bash'>
                create-react-app my-jsonforms-app
              </code>
            </pre>
        <Typography variant='body1'>
          Scaffolding may take a couple of moments. Once it's finished, switch to your newly created app and
          install all dependencies:
        </Typography>
        <pre className='code-listing'>
              <code className='language-bash'>
                cd my-jsonforms-app
                npm install
              </code>
            </pre>
      </li>

      <li>
        <Typography variant='body1'>
          Install JSON Forms and the material renderer set. We'll use an example from JSON Forms in order to obtain
          a JSON schema,
          a corresponding UI schema and a data instance to be rendered. You don't need to install
          the <code>@jsonforms/examples</code> module if you plan to supply your own schema in the following:
        </Typography>
        <pre className='code-listing'>
              <code className="language-bash">
                {installation}
              </code>
        </pre>
        <Typography variant="body1">
          Since 2.2.x JSON Forms does not include React, redux and react-redux as dependencies, but rather has them
          configured as peer depenencies.
        </Typography>
      </li>

      <li>
        <Typography variant='body1'>
          Switch to the <code>src</code> directory and open <code>index.js</code> with an editor of your choice.
          Let's add a couple of imports first:
        </Typography>
        <pre className='code-listing'>
          <code className="language-javascript">
            {imports}
          </code>
        </pre>
        <Typography variant='body1'>
          The <code>person</code> import is necessary for importing the person example
          while <code>@jsonforms/material-renderers</code> imports
          the <a href="http://http://material-ui-next.com/" className='link'>Material UI</a> based
          renderer set. The other ones will be explained shortly.
        </Typography>

        <Typography variant='body1'>
          Now let's define the variables that are crucial for JSON Forms to work,
          that is, <code>data</code>, <code>schema</code> and <code>uischema</code>. As previously mention, we are
          using
          the person example from JSON Forms here:
        </Typography>

        <pre className='code-listing'>
              <code className="language-javascript">
                {variables}
              </code>
            </pre>

        <Typography variant='body1'>
          These variables are defined as follows, in case you are interested:
        </Typography>

        <Provider store={store}>
          <Demo
            schema={person.schema}
            uischema={person.uischema}
            data={person.data}
          />
        </Provider>
      </li>

      <li>
        <Typography variant='body1'>
          Still in <code>index.js</code>, create a new store with the <code>createStore</code> function provided by redux.
          For that purpose JSON Forms exports its reducer via <code>jsonformsReducer</code>. For the initial state we supply
          the renderers we want to use, which we have imported from <code>@jsonforms/material-renderers</code>:
        </Typography>

        <pre className='code-listing'>
              <code className='language-javascript'>
                {setupStore}
              </code>
            </pre>

        <Typography variant='body1'>
          In order for JSON Forms to initialize correctly, we also need to dispatch an initialization action that will
          set-up some internal state that's necessary for JSON Forms:
        </Typography>

        <pre className='code-listing'>
              <code className='language-javascript'>
                {initAction}
              </code>
            </pre>
      </li>

      <li>
        <Typography variant='body1'>
          Wrap the existing <code>App</code> component within a <code>Provider</code>
        </Typography>
        <pre className='code-listing'>
              <code className='language-jsx'>
                {init}
              </code>
            </pre>
        <Typography variant='body1'>
          You can close the <code>index.js</code> file now.
        </Typography>
      </li>

      <li>
        <Typography variant='body1'>
          Open the <code>App.js</code> file and
          import the <code>JsonForms</code> component from <code>@jsonforms/react</code>.
          Delete the `header` element and replace it with the <code>JsonForms</code> element
          to get a form rendered:
        </Typography>
        <pre className='code-listing'>
              <code className='language-jsx'>
                {render}
              </code>
            </pre>
      </li>
    </ol>
  </DocPage>
);

export default Tutorial;