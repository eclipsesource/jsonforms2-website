import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import {JsonForms} from '@jsonforms/react';
import {registerRenderer} from '@jsonforms/core';
import {IntroCode} from './listings/intro';
import RatingControl from './RatingControl';
import ratingControlTester from "./ratingControlTester";
import {Demo} from '../../common';
import {createJsonFormsStore} from "../../common/store";
import DocPage from "./DocPage";

const RadiumLink = Radium(Link);

const styles = theme => ({
  topCaption: {
    textAlign: 'center',
    marginTop: '0.5rem',
  }
});

class Intro extends DocPage {

  render() {

    const { classes } = this.props;

    const storeWithoutCustomControl = createJsonFormsStore({
      data: {},
      schema: IntroCode.schema,
      uischema: IntroCode.uischema
    });

    const storeWithRatingControlExample = createJsonFormsStore({
      data: {},
      schema: IntroCode.schema,
      uischema: IntroCode.uischema
    });

    return (
      <DocPage>
        <Typography variant='h1'>
          What is JSONForms?
        </Typography>

        <Typography variant='body1'>
          JSON Forms is a declarative framework for efficiently building form-based web UIs.
          These UIs are targeted at entering, modifying and viewing data and are usually embedded within an application.
        </Typography>

        <Typography variant='h2'>
          Why do we need such a framework?
        </Typography>
        <Typography variant='body1'>
          Writing HTML templates and Javascript for data binding by hand is hard, especially in applications
          of reasonable size.
          Furthermore a form is often more than just a collection of input fields, usually more
          advanced functionality is required, e.g. validation or conditional visibility.
        </Typography>
        <Typography variant='body1'>
          JSONForms utilizes the capabilities of JSON and JSON schema and
          provides a simple and declarative way of describing forms.
          Forms are then rendered with a UI library or framework, e.g. React or Angular.
        </Typography>

        <Typography variant='h2'>
          How does it work?
        </Typography>
        <Typography variant='body1'>
          Any UI is defined by using two schemata:
        </Typography>

        <ul className='bullet-list'>
          <li>
            <Typography variant='body1'>
              The data/JSON schema defines the underlying data to be shown in the UI (objects, properties, and their
              types)
            </Typography>
          </li>
          <li>
            <Typography variant='body1'>
              The UI schema defines how this data is rendered as a form, e.g. the order of controls, their visibility,
              and the layout.
            </Typography>
          </li>
        </ul>

        <Typography variant='body1'>
          Both artifacts are interpreted during runtime by the framework and mapped to respective UI components,
          which already feature data binding, validation, etc.
        </Typography>

        <Typography variant='body1'>
          Let's look at an example: Below is given a JSON schema describing a task and an
          UI schema which defines four controls which are to be arranged in a vertical fashion.
          The result of rendering the form with JSON Forms can be seen at the bottom.
        </Typography>

        <Typography
          variant='caption'
          className={classes.topCaption}
        >
          JSON Schema
        </Typography>
        <pre className='code-listing'>
        <code className='language-json'>
          {JSON.stringify(IntroCode.schema, null, 2)}
        </code>
      </pre>

        <Typography
          variant='caption'
          className={classes.topCaption}
        >
          UI Schema
        </Typography>
        <pre className='code-listing'>
          <code className='language-json'>
            {JSON.stringify(IntroCode.uischema, null, 2)}
          </code>
        </pre>

        <Typography
          variant='caption'
          className={classes.topCaption}
        >
          The form as rendered by JSON Forms
        </Typography>
        <Provider store={storeWithoutCustomControl}>
          <Demo
            js={() => <JsonForms/>}
            schema={IntroCode.schema}
            uischema={IntroCode.uischema}
          />
        </Provider>

        <Typography variant='body1'>
          JSON Forms provides default renderers for all data types, however, you can change the way things are rendered by
          providing custom renderers. An example is given below where we replaced the control for the rating property:
        </Typography>

        <Typography
          variant='caption'
          className={classes.topCaption}
        >
          The same form now rendered with a custom control renderer
        </Typography>
        <Provider store={storeWithRatingControlExample} >
          <Demo
            js={() => {
              storeWithRatingControlExample.dispatch(registerRenderer(ratingControlTester, RatingControl));
              return (
                <JsonForms
                  schema={IntroCode.schema}
                  uischema={IntroCode.uischema}
                />
              )
            }}
            schema={IntroCode.schema}
            uischema={IntroCode.uischema}
          />
        </Provider>

        <Typography variant='body1'>
          If you are interested in learning more about JSON Forms, check out
          the <RadiumLink to={'/docs/getting-started'} className='link'>Getting started</RadiumLink> section.
        </Typography>
      </DocPage>
    );
  }
}

export default withStyles(styles)(Intro);
