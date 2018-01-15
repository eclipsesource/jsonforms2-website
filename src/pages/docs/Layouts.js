import React from 'react'
import {Link} from "react-router-dom";
import {Typography, withStyles} from "material-ui";
import { DispatchRenderer, initJsonFormsStore } from "@jsonforms/core";
import { Provider } from "react-redux";
import Radium from 'radium';
import Demo from "../../Demo";
import commonStyles from "../common/styles";
import layouts from './listings/layouts'

const styles = () => ({
  code: commonStyles.code,
  display1: commonStyles.display1,
  link: commonStyles.link,
  caption: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-1em',
    marginBottom: '0.5em'
  }
});

const RadiumLink = Radium(Link);

const data = layouts.data;
const schema = layouts.schema;

const verticalLayoutStore = initJsonFormsStore({
  data,
  schema,
  uischema: layouts.verticalLayout,
});

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
      other UI layouts.
    </p>
    <p>
      All layouts need to declare an <code>elements</code> property which contains the children which are
      to be layout.
    </p>

    <Typography type='headline'>
      Vertical Layout
    </Typography>
    <p>
      A vertical layout uses the <code>VerticalLayout</code> type and arranges its <code>elements</code> in a
      vertical fashion.
    </p>
    <Provider store={verticalLayoutStore}>
      <Demo
        js={() => {
          return (
            <DispatchRenderer
              schema={schema}
              uischema={layouts.verticalLayout.uischema}
            />
          )
        }}
        schema={schema}
        uischema={layouts.verticalLayout.uischema}
      />
    </Provider>

    <Typography type='headline'>
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
      Horizontal Layout
    </Typography>
    <p>
      A horizontal layout uses the <code>HorizontalLayout</code> type and arranges its <code>elements</code> in a
      horizontal fashion.
    </p>
    <Provider store={horizontalStore}>
      <Demo
        js={() => {
          return (
            <DispatchRenderer
              schema={schema}
              uischema={layouts.horizontalLayout}
            />
          )
        }}
        schema={schema}
        uischema={layouts.horizontalLayout}
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
    <Provider store={horizontalStore}>
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
