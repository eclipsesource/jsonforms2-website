import React from 'react';
import { layout } from '@jsonforms/examples';
import { DispatchRenderer, initJsonFormsStore } from '@jsonforms/core';
import { Provider } from 'react-redux';
import {Typography, withStyles} from "material-ui";
import commonStyles from "../common/styles";
import Demo from "../../Demo";

const styles = () => ({
  display1: commonStyles.display1,
  headline: commonStyles.headline
});

const verticalLayoutStore = initJsonFormsStore({
  data: layout.data,
  schema: layout.schema,
  uischema: layout.uischemaVertical
});

const groupStore = initJsonFormsStore({
  data: layout.data,
  schema: layout.schema,
  uischema: layout.uischemaGroup,
});

const horizontalStore = initJsonFormsStore({
  data: layout.data,
  schema: layout.schema,
  uischema: layout.uischemaHorizontal,
});

const complexStore = initJsonFormsStore({
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

      <Typography
        type={'headline'}
        className={classes.headline}
        id='vertical-layout-example'
      >
        Vertical Layout
      </Typography>
      <Provider store={verticalLayoutStore}>
        <Demo
          js={() => <DispatchRenderer/> }
          uischema={verticalLayoutStore}
          schema={layout.schema}
        />
      </Provider>

      <Typography type={'headline'} className={classes.headline}>Group Layout</Typography>
      <Provider store={groupStore}>
        <DispatchRenderer />
      </Provider>

      <Typography
        type={'headline'}
        className={classes.headline}
        id='horizontal-layout-example'
      >
        Horizontal Layout
      </Typography>
      <Provider store={horizontalStore}>
        <DispatchRenderer />
      </Provider>

      <Typography type={'headline'} className={classes.headline}>Complex Example</Typography>
      <Provider store={complexStore}>
        <DispatchRenderer />
      </Provider>

    </div>
  );
};

export default withStyles(styles)(Layouts);