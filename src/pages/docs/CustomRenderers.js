import React from 'react';
import {Typography, withStyles} from "material-ui";
import { Provider } from 'react-redux';
import { DispatchRenderer, initJsonFormsStore, registerRenderer } from '@jsonforms/core';
import Demo from "../../Demo";
import RatingControl from './RatingControl';
import { ratingControlTester } from './rating.tester';
import MarkdownElement from "../../MarkdownElement";
import commonStyles from '../common/styles';
/* eslint import/no-webpack-loader-syntax: off */
const seed = require('!raw-loader!./listings/seed.md');
const ratingControlCode = require('!raw-loader!./RatingControl.jsx');
const ratingTesterCode = require('!raw-loader!./rating.tester');

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
  scope: {
    $ref: '#/properties/rating'
  }
};


const storeWithRatingControlExample = initJsonFormsStore({
  data: ratingData,
  schema: ratingSchema,
  uischema: ratingUiSchema,
});

const styles = theme => ({
  code: commonStyles.code(theme),
  headline: commonStyles.headline,
  title: {
    marginTop: '0.5em'
  },
  display1: commonStyles.display1
});

export const CustomRenderers = ({ classes }) => {
  const store = initJsonFormsStore({
    data: ratingData,
    schema: ratingSchema,
    uischema: ratingUiSchema
  });
  return (
    <div>
      <Typography type={'display1'} className={classes.display1}>Custom Renderers</Typography>

      <p>
        The default renderers of JSON Forms are a good fit for most scenarios,
        but there might be certain situations where you'd want to customize the rendered forms.
        JSON Forms allows for this by registering a custom renderer that produces a different UI
        control.

      </p>

      <p>
        In this section you will learn how to create and register a custom renderer within a native
        React application. We do so by replacing the default renderer for integer values which is
        depicted below where it is used to render a rating ranging from 0 to 5.
      </p>

      <Provider store={store} >
        <Demo
          js={() => {
            // TODO: remove uischema/schema props from DispatchRenderer once JSON Forms dependency has been updated
            return (
              <DispatchRenderer />
            )
          }}
          schema={ratingSchema}
          uischema={ratingUiSchema}>
        </Demo>
      </Provider>

      The replacement will be a control which renders the rating as stars:

      <Provider store={storeWithRatingControlExample} >
        <Demo
          js={() => {
            storeWithRatingControlExample.dispatch(registerRenderer(ratingControlTester, RatingControl));
            return (<DispatchRenderer />);
          }}
          schema={ratingSchema}
          uischema={ratingUiSchema}
        />
      </Provider>

      <Typography type={'headline'}>
        Running the seed
      </Typography>
      <p>
        If you want to follow along this tutorial, you may want to clone the seed repository
        which basically is just a React application scaffolded by create-react-app with redux
        and JSON Forms dependencies added.
      </p>

      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`bash\n${seed}\n\`\`\``}
      />

      <p>
        Once the dependencies are installed and the local server has been started,
        navigate to <code>localhost:3000</code> in order to see the application running.
        The seed is described in detail within the <code>README.md</code> file of the repo, hence we only focus
        on the most crucial parts of the app in the following.
      </p>

      <Typography type={'headline'} className={classes.headline}>
        Core concepts about rendering
      </Typography>
      <p>
        Before explaining how to contribute a component (which we refer to a custom control) to JSON Forms,
        we first explain how the basic process of rendering works.
      </p>

      <p>
        JSON Forms maintains a set of renderers which are regular React components. When JSON Forms is instructed to
        render a given UI schema to produce a form, the question then becomes how JSON Forms is supposed to choose a
        renderer. This is handled by an additional concept we call testers. Each renderer needs to define a corresponding tester.
      </p>

      <p>
        A tester then is just a function which is passed the UI schema and the data schema and returns a number.
        The returned number determines the priority by which JSON Forms will use the renderer to render the form, hence
        the higher the number, the more likely it will be picked.
        So in order to add a renderer, we need to perform the following steps:
      </p>

      <ol>
        <li>Create a renderer based on a React component</li>
        <li>Create a corresponding tester for the renderer</li>
        <li>Register both the renderer and the tester</li>
      </ol>

      <p>
        The seed app already contains all of the ingredients necessary to create a custom renderer,
        which we'll use in the following.
      </p>

      <Typography type='title' className={classes.title}>
        Create a renderer
      </Typography>
      <p>
      As mentioned previously the seed app already features a component which we want to make a renderer from.
      It's contained in <code>src/Rating.js</code> and is a rating control, i.e. it allows to set a value between 0 and 5
      by selecting the appropriate number of stars. We won't go into detail about the control itself, but we should mention
      that we need to provide an <code>onClick</code> prop in order to allow specifying a callback which gets called
      every time the user clicks on a star as well as an initial <code>value</code>.
      </p>

      <p>
        In order to leverage the component to a renderer we need to connect it to the store in order to retrieve
        the initial value as well as being able to send any events when the users clicks a star. JSON Forms provides
        helper functions <code>mapStateToFieldProps</code> which already provides most of the necessary props for us,
        in this case <code>data</code> (the actual data bit to be rendered) as well as <code>path</code> (which is
        necessary to propagate an update back to the store).
      </p>

      <p>
        For the <code>onClick</code> prop we pass the <code>handleChange</code> handler which we retrieve
        via another helper function <code>mapDispatchToFieldProps</code>
        All the handler actually does is to emit a change with the new value.
      </p>

      <p>The complete code looks as follows:</p>

      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`jsx\n${ratingControlCode}\n\`\`\``}
      />

      <Typography type='title' className={classes.title}>
        Create a tester
      </Typography>
      <p>
        Now that we have our renderer ready we need to tell JSON Forms when we want to make use of it.
        For that purpose we create a tester that checks if the corresponding UI schema element is a control
        and whether it is bound to a path that ends with <code>rating</code>. If that is the case we return a rank of
        3 which is by one higher than what the default renderer sets provide.
      </p>

      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`jsx\n${ratingTesterCode}\n\`\`\``}
      />

      <p>
        Generally speaking, the tester API if made out of different predicates as well as functions that allow
        for composition, such as <code>and</code> or <code>or</code>. For a complete overview see TODO.
      </p>

      <Typography type='title'>
        Register the renderer
      </Typography>
      <p>
        All there is left to do is to register the renderer with its tester. We can do so by calling the
        <code>registerRenderer</code> action on the store:
      </p>

      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`jsx\nstore.dispatch(\n  registerRenderer(ratingControlTester, RatingControl)\n);\n\`\`\``}
      />

      <p>
        And that's it, the rating control will now be used to render the <code>rating</code> property.
        It should be noted that in order to create a full-fledged control there's more work left,
        since we did not cover concepts like validation or visibility.
        Please refer to TODO the API docs if you are interested in these.
      </p>
    </div>

);
};

export default withStyles(styles)(CustomRenderers);
