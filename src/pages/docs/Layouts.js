import React from 'react'
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import {Typography, withStyles} from "material-ui";
import { DispatchRenderer, initJsonFormsStore } from "@jsonforms/core";
import { layout } from '@jsonforms/examples';
import { Provider } from "react-redux";
import Radium from 'radium';
import Demo from "../../Demo";
import commonStyles from "../common/styles";
import layouts from './listings/layouts'
import MarkdownElement from "../../MarkdownElement";

const styles = () => ({
  code: commonStyles.code,
  display1: commonStyles.display1,
  link: commonStyles.link,
  caption: commonStyles.caption,
  headline: commonStyles.headline,
  title: commonStyles.headline,
});

const RadiumLink = Radium(Link);
const RadiumHashLink = Radium(HashLink);

const data = layouts.data;
const schema = layouts.schema;

const groupStore = initJsonFormsStore({
  data,
  schema,
  uischema: layouts.group,
});

const horizontalStore = initJsonFormsStore({
  data,
  schema,
  uischema: layouts.horizontalLayout,
});

const categorizationStore = initJsonFormsStore({
  data,
  schema,
  uischema: layouts.categorization,
});

const Layouts = ({ classes }) => (
  <div>
    <Typography
      type='display1'
      className={classes.display1}
    >
      Layouts
    </Typography>
    <p>
      Layouts serve the purpose of structuring UI schema elements
      like <RadiumLink to='/docs/uischema/controls' className={classes.link}>Controls</RadiumLink> or
      other layouts.
    </p>

    <Typography type={'headline'} className={classes.headline}><code>elements</code></Typography>
    <p>
      All layouts need to declare an <code>elements</code> property which contains the children which are
      to be arranged by the layout. It is expected to be an array. See the different types of layouts
      on this page for examples.
    </p>

    <Typography type={'headline'} className={classes.headline}><code>type</code></Typography>
    By default, JSON Forms supports four different kinds of layouts: <code>VerticalLayout</code>&nbsp;
    and <code>HorizontalLayout</code>, a slightly modified version of the vertical layout called <code>Group</code>,
    as well <code>Categorization</code>, which is often used to bundle related data, for instance within Tabs.


    <Typography type='title' className={classes.title}>
      Horizontal Layout (<RadiumHashLink to={'/examples/layouts#horizontal-layout-example'} className={classes.link}>Demo</RadiumHashLink>)
    </Typography>
    <p>
      A horizontal layout uses the <code>HorizontalLayout</code> type and arranges its <code>elements</code> in a
      horizontal fashion. Each child occupies the same amount of space, i.e. for n children a child occupies 1/n space.
    </p>
    <MarkdownElement
      dir="ltr"
      className={classes.code}
      text={`\`\`\`json\n${JSON.stringify(layout.uischemaHorizontal, null, 2)}\n\`\`\``}
    />
    <Typography type={'caption'} className={classes.caption}>Example of a Horizontal Layout</Typography>

    <Typography type='title' className={classes.title}>
      Vertical Layout (<RadiumLink to={'/examples/layouts#vertical-layout-example'} className={classes.link}>Demo</RadiumLink>)
    </Typography>
    <p>
      A vertical layout uses the <code>VerticalLayout</code> type and arranges its <code>elements</code> in a
      vertical fashion
    </p>

    <MarkdownElement
      dir="ltr"
      className={classes.code}
      text={`\`\`\`json\n${JSON.stringify(layout.uischemaVertical, null, 2)}\n\`\`\``}
    />
    <Typography type={'caption'} className={classes.caption}>Example of a Vertical Layout</Typography>

    <Typography type='title' className={classes.title}>
      Group
    </Typography>
    <p>
      A Group is very similiar to a <code>VerticalLayout</code> but features an additional mandatory <code>label</code>
      property that is used to describe the <code>elements</code>.
    </p>
    <Provider store={groupStore}>
      <Demo
        js={() => {
          return (
            <DispatchRenderer
              schema={schema}
              uischema={layouts.group}
            />
          )
        }}
        schema={schema}
        uischema={layouts.group}
      />
    </Provider>

    <Typography type='headline'>
      Categorization
    </Typography>
    <p>
      A categorization layout uses the <code>Categorization</code> type and can only contain <code>elements</code>
      of type <code>Category</code>. A <code>Category</code> itself acts as a container and has an <code>elements</code>
      of its own as well as a <code>label</code> that describes the contained data.
      Categorizations are typically used to structure different data bits which belong together.
    </p>
    <Provider store={categorizationStore}>
      <Demo
        js={() => {
          return (
            <DispatchRenderer
              schema={schema}
              uischema={layouts.categorization}
            />
          )
        }}
        schema={schema}
        uischema={layouts.categorization}
      />
    </Provider>
  </div>
);

export default withStyles(styles)(Layouts);
