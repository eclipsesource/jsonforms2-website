import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Provider} from 'react-redux';
import {registerRenderer} from '@jsonforms/core';
import {JsonForms} from '@jsonforms/react';
import RatingControl from './RatingControl';
import ratingControlTester from './ratingControlTester';
import Demo from "../../common/Demo";
import {createJsonFormsStore} from "../../common/store";
import DocPage from "./DocPage";
/* eslint import/no-webpack-loader-syntax: off */
const seed = require('!raw-loader!./listings/seed.md');
const ratingControlCode = require('!raw-loader!./RatingControl.jsx');
const ratingControlTesterCode = require('!raw-loader!./ratingControlTester');
const registerRendererCode = require('!raw-loader!./listings/registerRenderer.md');

const ratingData = {
  rating: 2,
};

const ratingSchema = {
  type: 'object',
  properties: {
    rating: {
      type: 'integer',
      minimum: 0,
      maximum: 5,
    }
  }
};

const ratingUiSchema = {
  type: 'Control',
  scope: '#/properties/rating'
};

const storeWithRatingControlExample = createJsonFormsStore({
  data: ratingData,
  schema: ratingSchema,
  uischema: ratingUiSchema
});

export const CustomRenderers = () => {
  const store = createJsonFormsStore({
    data: ratingData,
    schema: ratingSchema,
    uischema: ratingUiSchema
  });

  return (
    <DocPage>
      <Typography variant='h1'>Custom Renderers</Typography>

      <Typography variant='body1'>
        The default renderers of JSON Forms are a good fit for most scenarios,
        but there might be certain situations where you'd want to customize the rendered UI Schema elements.
        JSON Forms allows for this by registering a custom renderer that produces a different UI
        for a given UI Schema element.
      </Typography>

      <Typography variant='body1'>
        In this section you will learn how to create and register a custom renderer for a control.
        We will replace the default renderer for integer values of a rating property. By default an integer
        property is rendered like this:
      </Typography>

      <Provider store={store} >
        <Demo
          js={() => <JsonForms />}
          schema={ratingSchema}
          uischema={ratingUiSchema}>
        </Demo>
      </Provider>

      <Typography variant='body1'>
        Our goal is to instead render the UI for rating depicted below:
      </Typography>

      <Provider store={storeWithRatingControlExample} >
        <Demo
          js={() => {
            storeWithRatingControlExample.dispatch(registerRenderer(ratingControlTester, RatingControl));
            return (<JsonForms />);
          }}
          schema={ratingSchema}
          uischema={ratingUiSchema}
        />
      </Provider>

      <Typography variant='h2'>
        Running the seed
      </Typography>
      <Typography variant='body1'>
        If you want to follow along with this tutorial, you may want to clone the seed repository
        which basically is just a skeleton application scaffolded by create-react-app with redux
        and JSON Forms dependencies added.
      </Typography>

      <pre className='code-listing'>
        <code className='language-bash'>
          {seed}
        </code>
      </pre>

      <Typography variant='body1' gutterBottom>
        Once the dependencies are installed and the local server has been started,
        navigate to <a href="http://localhost:3000" className='link'>http://localhost:3000</a> in order
        to see the application running.
        The seed is described in more detail within the <code>README.md</code> file of
        the <a href="https://github.com/eclipsesource/jsonforms-react-seed"className='link'>repo</a>, hence we
        only focus on the most crucial parts of the app in the following.
      </Typography>

      <Typography variant='h2'>
        Core concepts about rendering
      </Typography>

      <Typography variant='body1'>
        Before explaining how to contribute a component (which will be referred to as "custom control") to JSON Forms,
        we first explain how the basic process of rendering works.
      </Typography>

      <Typography variant='body1'>
        JSON Forms maintains a registry of renderers (which are regular React components). When JSON Forms is instructed to
        render a given UI schema to produce a form, it will start with the root element of the UI Schema and try to
        find a renderer for this UI Schema element in its registry of renderers.
      </Typography>

      <Typography variant='body1'>
        To find a matching renderer, JSON Forms relies on so-called testers.
        Every renderer has a tester associated with its registration, which is a function of a UI schema and a
        JSON schema returning a number.
        The returned number is the priority which expresses if and how well a renderer can actually render the
        given UI Schema Element (where <code>-1</code> aka <code>NOT_APPLICABLE</code>) means "not at all").
      </Typography>

      <Typography variant='body1'>
        In order to create and register a renderer, we need to perform the following steps:
      </Typography>

      <ol className='list'>
        <li><Typography variant='body1'>Create a renderer (a React component)</Typography></li>
        <li><Typography variant='body1'>Create a corresponding tester for the renderer</Typography></li>
        <li><Typography variant='body1'>Register both the renderer and the tester with the framework</Typography></li>
      </ol>

      <Typography variant='body1'>
        The seed app already contains all of the ingredients necessary to create a custom renderer,
        which we'll use in the following.
      </Typography>

      <Typography variant='h3'>
        1. Create a renderer
      </Typography>

      <Typography variant='body1'>
      As mentioned previously, the seed app already features a component which we want to use as a renderer.
      It's contained in <code>src/Rating.js</code> and is a rating control, i.e. it allows to set a value between 0 and 5
      by selecting the appropriate number of stars. We won't go into detail about the control itself, but we should mention
      that we need to provide an <code>onClick</code> property in order to allow specifying a callback which gets called
      every time the user clicks on a star. We also need to suppy an initial <code>value</code>.
      </Typography>

      <Typography variant='body1'>
        In order to leverage the React component to a JSON Forms compatible renderer, we need to connect it to the store.
        This will allow us to retrieve the initial value and to emit events updating the respective value in the
        store when the users clicks on a star. JSON Forms provides a
        helper function <code>mapStateToControlProps</code> which already provides most of the necessary props for us.
        In this case, the props are <code>data</code>, which is the actual data bit to be rendered, and <code>path</code>,
        a dot-separated string, which is necessary to propagate an update back to the store.
      </Typography>

      <Typography variant='body1'>
        For the <code>onClick</code> prop we pass the <code>handleChange</code> handler, which we retrieve
        via another helper function provided by JSON Forms called <code>mapDispatchToControlProps</code>.
        All the handler actually does is to emit a change with the new value.
      </Typography>

      <Typography variant='body1'>
        The complete code of <code>src/RatingControl.js</code> looks as follows:
      </Typography>

      <pre className='code-listing'>
        <code className='language-jsx'>
          {ratingControlCode}
        </code>
      </pre>

      <Typography variant='h3'>
        2. Create a tester
      </Typography>
      <Typography variant='body1'>
        Now that we have our renderer ready, we need to tell JSON Forms when we want to make use of it.
        For that purpose we create a tester that checks if the corresponding UI schema element is a control
        and whether it is bound to a path that ends with <code>rating</code>. If that is the case, we return a rank of
        3. That is because the default renderer sets provide a rank with a value of 2, hence our tester will need to
        rank the custom control higher a bit higher, such that it will be picked up for the rating control during rendering.
        The <code>ratingControlTester.js</code> file contains the respective code as a default export.
      </Typography>

      <pre className='code-listing'>
        <code className='language-jsx'>
          {ratingControlTesterCode}
        </code>
      </pre>

      <Typography variant='body1'>
        Generally speaking, the testers API if made out of different predicates and functions that allow
        for composition (e.g. <code>and</code> or <code>or</code>) such that it is easy to target specific parts
        of the UI schema and/or JSON schema.
      </Typography>

      <Typography variant='h3'>
        3. Register the renderer
      </Typography>

      <Typography variant='body1'>
        All there is left to do is to register the renderer with its tester. We can do so by calling
        the <code>registerRenderer</code> action on the store. Within <code>index.js</code>, the following
        statement registers the renderer.
      </Typography>

      <pre className='code-listing'>
        <code className='language-jsx'>
          {registerRendererCode}
        </code>
      </pre>

      <Typography variant='body1'>
        And that's it! The rating control will now be used to render the <code>rating</code> property.
        It should be noted that in order to create a full-fledged control there's more work left,
        since we did not cover concepts like validation or visibility.
      </Typography>

      <Typography variant='body2'>
        <strong>NOTE</strong>: We are working on the sections. Expect this page to be updated soon!
      </Typography>
    </DocPage>
  );
};

export default CustomRenderers;
