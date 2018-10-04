import React from 'react';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Provider } from 'react-redux';
import { registerRenderer } from '@jsonforms/core';
import { JsonForms } from '@jsonforms/react';
import RatingControl from './RatingControl';
import ratingControlTester from './ratingControlTester';
import MarkdownElement from "../../common/MarkdownElement";
import Demo from "../../common/Demo";
import commonStyles from '../../common/styles';
import { createJsonFormsStore } from "../../common/store";
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

export const CustomRenderers = ({ classes }) => {
  const store = createJsonFormsStore({
    data: ratingData,
    schema: ratingSchema,
    uischema: ratingUiSchema
  });

  return (
    <div>
      <Typography variant={'display1'} className={classes.display1}>Custom Renderers</Typography>

      <p>
        The default renderers of JSON Forms are a good fit for most scenarios,
        but there might be certain situations where you'd want to customize the rendered UI Schema elements.
        JSON Forms allows for this by registering a custom renderer that produces a different UI
        for a given UI Schema element.
      </p>

      <p>
        In this section you will learn how to create and register a custom renderer for a control.
        We will replace the default renderer for integer values of a rating property. By default an integer
        property is rendered like this:
      </p>

      <Provider store={store} >
        <Demo
          js={() => <JsonForms />}
          schema={ratingSchema}
          uischema={ratingUiSchema}>
        </Demo>
      </Provider>

      Our goal is to instead render the UI for rating depicted below:

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

      <Typography variant={'headline'}>
        Running the seed
      </Typography>
      <p>
        If you want to follow along with this tutorial, you may want to clone the seed repository
        which basically is just a skeleton application scaffolded by create-react-app with redux
        and JSON Forms dependencies added.
      </p>

      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`bash\n${seed}\n\`\`\``}
      />

      <p>
        Once the dependencies are installed and the local server has been started,
        navigate to <a href="http://localhost:3000" className={classes.link}>http://localhost:3000</a> in order
        to see the application running.
        The seed is described in more detail within the <code>README.md</code> file of
        the <a href="https://github.com/eclipsesource/jsonforms-react-seed"className={classes.link}>repo</a>, hence we
        only focus on the most crucial parts of the app in the following.
      </p>

      <Typography variant={'headline'} className={classes.headline}>
        Core concepts about rendering
      </Typography>
      <p>
        Before explaining how to contribute a component (which will be referred to as "custom control") to JSON Forms,
        we first explain how the basic process of rendering works.
      </p>

      <p>
        JSON Forms maintains a registry of renderers (which are regular React components). When JSON Forms is instructed to
        render a given UI schema to produce a form, it will start with the root element of the UI Schema and try to
        find a renderer for this UI Schema element in its registry of renderers.
      </p>
      <p>
        To find a matching renderer, JSON Forms relies on so-called testers.
        Every renderer has a tester associated with its registration, which is a function of a UI schema and a
        JSON schema returning a number.
        The returned number is the priority which expresses if and how well a renderer can actually render the
        given UI Schema Element (where <code>-1</code> aka <code>NOT_APPLICABLE</code>) means "not at all").
      </p>
      <p>
        In order to create and register a renderer, we need to perform the following steps:
      </p>

      <ol className={classes.list}>
        <li>Create a renderer (a React component)</li>
        <li>Create a corresponding tester for the renderer</li>
        <li>Register both the renderer and the tester with the framework</li>
      </ol>

      <p>
        The seed app already contains all of the ingredients necessary to create a custom renderer,
        which we'll use in the following.
      </p>

      <Typography variant='title' className={classes.title}>
        1. Create a renderer
      </Typography>
      <p>
      As mentioned previously, the seed app already features a component which we want to use as a renderer.
      It's contained in <code>src/Rating.js</code> and is a rating control, i.e. it allows to set a value between 0 and 5
      by selecting the appropriate number of stars. We won't go into detail about the control itself, but we should mention
      that we need to provide an <code>onClick</code> property in order to allow specifying a callback which gets called
      every time the user clicks on a star. We also need to suppy an initial <code>value</code>.
      </p>

      <p>
        In order to leverage the React component to a JSON Forms compatible renderer, we need to connect it to the store.
        This will allow us to retrieve the initial value and to emit events updating the respective value in the
        store when the users clicks on a star. JSON Forms provides a
        helper function <code>mapStateToControlProps</code> which already provides most of the necessary props for us.
        In this case, the props are <code>data</code>, which is the actual data bit to be rendered, and <code>path</code>,
        a dot-separated string, which is necessary to propagate an update back to the store.
      </p>

      <p>
        For the <code>onClick</code> prop we pass the <code>handleChange</code> handler, which we retrieve
        via another helper function provided by JSON Forms called <code>mapDispatchToControlProps</code>.
        All the handler actually does is to emit a change with the new value.
      </p>

      <p>The complete code of <code>src/RatingControl.js</code> looks as follows:</p>

      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`jsx\n${ratingControlCode}\n\`\`\``}
      />

      <Typography variant='title' className={classes.title}>
        2. Create a tester
      </Typography>
      <p>
        Now that we have our renderer ready, we need to tell JSON Forms when we want to make use of it.
        For that purpose we create a tester that checks if the corresponding UI schema element is a control
        and whether it is bound to a path that ends with <code>rating</code>. If that is the case, we return a rank of
        3. That is because the default renderer sets provide a rank with a value of 2, hence our tester will need to
        rank the custom control higher a bit higher, such that it will be picked up for the rating control during rendering.
        The <code>ratingControlTester.js</code> file contains the respective code as a default export.
      </p>

      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`jsx\n${ratingControlTesterCode}\n\`\`\``}
      />

      <p>
        Generally speaking, the testers API if made out of different predicates and functions that allow
        for composition (e.g. <code>and</code> or <code>or</code>) such that it is easy to target specific parts
        of the UI schema and/or JSON schema.
      </p>

      <Typography variant='title'>
        3. Register the renderer
      </Typography>
      <p>
        All there is left to do is to register the renderer with its tester. We can do so by calling
        the <code>registerRenderer</code> action on the store. Within <code>index.js</code>, the following
        statement registers the renderer.
      </p>

      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`jsx\n${registerRendererCode}\n\`\`\``}
      />

      <p>
        And that's it! The rating control will now be used to render the <code>rating</code> property.
        It should be noted that in order to create a full-fledged control there's more work left,
        since we did not cover concepts like validation or visibility.
      </p>
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

export default withStyles(styles)(CustomRenderers);
