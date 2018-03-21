import React from 'react';
import { layout } from '@jsonforms/examples';
import { JsonForms } from '@jsonforms/react';
import { Provider } from 'react-redux';
import {Typography, withStyles} from "material-ui";
import { commonStyles, Demo }from "../../common";
import {createJsonFormsStore} from "../../common/store";

const styles = () => ({
  display1: commonStyles.display1,
  headline: commonStyles.headline
});

const verticalLayoutStore = createJsonFormsStore({
  data: layout.data,
  schema: layout.schema,
  uischema: layout.uischemaVertical
});

const groupStore = createJsonFormsStore({
  data: layout.data,
  schema: layout.schema,
  uischema: layout.uischemaGroup,
});

const horizontalStore = createJsonFormsStore({
  data: layout.data,
  schema: layout.schema,
  uischema: layout.uischemaHorizontal,
});

const complexStore = createJsonFormsStore({
  data: layout.data,
  schema: layout.schema,
  uischema: layout.uischemaComplex,
});

const Layouts = ({ classes }) => {
  return (
    <div>
      <Typography
        type={'display1'}
        className={classes.display1}
      >
        Layouts
      </Typography>
      <p>
        All layout examples use the same schema which is an <code>object</code> with
        two <code>properties</code>, <code>name</code> and <code>birthDate</code>.
      </p>

      {/* HORIZONTAL LAYOUT */}
      <Typography
        type={'headline'}
        className={classes.headline}
        id='horizontal-layout'
      >
        Horizontal Layout
      </Typography>
      <Provider store={horizontalStore}>
        <Demo
          js={() => <JsonForms/> }
          uischema={layout.uischemaHorizontal}
          schema={layout.schema}
        />
      </Provider>

      {/* VERTICAL LAYOUT */}
      <Typography
        type={'headline'}
        className={classes.headline}
        id='vertical-layout'
      >
        Vertical Layout
      </Typography>
      <Provider store={verticalLayoutStore}>
        <Demo
          js={() => <JsonForms/> }
          uischema={layout.uischemaVertical}
          schema={layout.schema}
        />
      </Provider>

      {/* GROUP LAYOUT */}
      <Typography
        type={'headline'}
        className={classes.headline}
        id='group-layout'
      >
        Group Layout
      </Typography>
      <p>
        A <code>Group</code> is like a <code>VerticalLayout</code> but features an additional <code>label</code> property.
        In this case it has been set to 'My Group'.
      </p>
      <Provider store={groupStore}>
        <Demo
          js={() => <JsonForms/> }
          uischema={layout.uischemaGroup}
          schema={layout.schema}
        />
      </Provider>

      {/* NESTED LAYOUTS */}
      <Typography
        type={'headline'}
        className={classes.headline}
      >
        Nested Layouts
      </Typography>
      <p>
        This example demonstrates how layouts can be nested in order to create more complex forms.
        The top UI schema element is a <code>Group</code> which in turn contains a <code>HorizontalLayout</code>.
        The <code>elements</code> of the <code>HorizontalLayout</code> then are again <code>VerticalLayout</code>.
      </p>
      <Provider store={complexStore}>
        <Demo
          js={() => <JsonForms/> }
          uischema={layout.uischemaComplex}
          schema={layout.schema}
        />
      </Provider>

    </div>
  );
};

export default withStyles(styles)(Layouts);