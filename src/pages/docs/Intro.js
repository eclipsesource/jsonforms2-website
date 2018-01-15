import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Grid, Typography, withStyles} from "material-ui";
import Demo from "../../Demo";
import DispatchRenderer, { initJsonFormsStore, registerRenderer } from '@jsonforms/core';
import { IntroCode } from './listings/intro';
import MarkdownElement from "../../MarkdownElement";
import RatingControl from './RatingControl';
import { ratingControlTester} from "./rating.tester";
import commonStyles from '../common/styles';
import Logo from '../../logo';

const RadiumLink = Radium(Link);

const styles = theme => ({
  code: commonStyles.code(theme),
  link: commonStyles.link,
  display1: commonStyles.display1,
  headline: commonStyles.headline,
  caption: commonStyles.caption
});

const Intro = ({ classes }) => {

  const storeWithoutCustomControl = initJsonFormsStore({
    data: {},
    schema: IntroCode.schema,
    uischema: IntroCode.uischema
  });

  const storeWithRatingControlExample = initJsonFormsStore({
    data: {},
    schema: IntroCode.schema,
    uischema: IntroCode.uischema
  });

  return (
    <div>
      <Typography type='display1' className={classes.display1}>
        What is JSONForms?
      </Typography>

      <p>
        JSON Forms is a declarative framework for efficiently building form-based web UIs.
        These UIs are targeted at entering, modifying, and viewing data and are usually embedded within an application.
      </p>

      <Typography type={'headline'} className={classes.headline}>
        Why do we need such a framework?
      </Typography>
      <p>
        Writing HTML templates and Javascript for data binding by hand is hard, especially in applications
        of reasonable size. JSONForms utilizes the capabilities of JSON and JSON schema and
        provides a simple and declarative way of describing forms.
        Forms are then rendered with a UI framework, currently one that is based on React/Redux.
      </p>

      <Typography type={'headline'} className={classes.headline}>
        How does it work?
      </Typography>
      <p>
        Any UI is defined by using two schemata:
      </p>

      <ul style={{ paddingLeft: '1em' }}>
        <li>The data/JSON schema defines the underlying data to be shown in the UI (objects, properties, and their types).</li>
        <li>The UI schema defines how this data is rendered as a form, e.g. the order of controls, their visibility, and the layout.</li>
      </ul>

      <p>
        Both artifacts are interpreted during runtime by the framework and mapped to respective React components,
        which already feature data binding, validation, etc.
      </p>

      <p>
        Let's look at an example: Below is given a JSON schema on the left hand side describing a task while on the
        right hand side there's an UI schema, which defines three controls which will be arranged in a vertical fashion.
        The result of rendering the form with JSON Forms can be seen at the bottom.
      </p>

      <Grid container style={{ marginTop: '0.5em' }} justify={'center'}>
        <Grid item xs={5}>
          <Typography type='title'style={{ textAlign: 'center' }}>JSON Schema</Typography>
          <MarkdownElement dir="ltr" className={classes.code} text={`\`\`\`json\n${JSON.stringify(IntroCode.schema, null, 2)}\n\`\`\``} />
        </Grid>
        <Grid item xs={1} style={{ alignItems: 'center' }}>
          <Typography type='title'style={{ textAlign: 'center' }}>+</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography type='title'style={{ textAlign: 'center' }}>UI Schema</Typography>
          <MarkdownElement dir="ltr" className={classes.code} text={`\`\`\`json\n${JSON.stringify(IntroCode.uischema, null, 2)}\n\`\`\``} />
        </Grid>
        <Grid item xs={4}>
          <Typography type='title'style={{ textAlign: 'center' }}>⬇</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography type='title'style={{ textAlign: 'center' }}>
            <Logo width={45} height={30}/>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography type='title'style={{ textAlign: 'center' }}>⬇</Typography>
        </Grid>
        <Grid item xs={12}>
          <Provider store={storeWithoutCustomControl}>
            <Demo
              js={() => {
                const store = initJsonFormsStore({
                  data: { },
                  schema: IntroCode.schema,
                  uischema:  IntroCode.uischema
                });
                return (
                  <Provider store={store} >
                    <DispatchRenderer
                      schema={IntroCode.schema}
                      uischema={IntroCode.uischema}
                    />
                  </Provider>
                )
              }}
              schema={IntroCode.schema}
              uischema={IntroCode.uischema}
            />
          </Provider>
          <Typography type={'caption'} className={classes.caption}>The form as rendered by JSON Forms</Typography>
        </Grid>
      </Grid>

      <p>
        JSON Forms provides default renderers for all data types, however, you can change the way things are rendered by
        providing custom renderers. An example is given below where we replaced the control for the rating property:
      </p>

      <Provider store={storeWithRatingControlExample} >
        <Demo
          js={() => {
            storeWithRatingControlExample.dispatch(registerRenderer(ratingControlTester, RatingControl));
            return (
              <DispatchRenderer
                schema={IntroCode.schema}
                uischema={IntroCode.uischema}
              />
            )
          }}
          schema={IntroCode.schema}
          uischema={IntroCode.uischema}
        />
      </Provider>
      <Typography type={'caption'} className={classes.caption}>The same form now rendered with a custom control renderer</Typography>

      If you are interested in learning more about JSON Forms, check out
      the <RadiumLink to={'/docs/getting-started'} className={classes.link}>Getting started</RadiumLink> secion.
    </div>
  );
};

export default withStyles(styles)(Intro);