import React from 'react';
import {Grid, Typography, withStyles} from "material-ui";
import commonStyles from "../../common/styles";
import Info from 'material-ui-icons/Info'

const styles = () => ({
  display1: commonStyles.display1,
  container: {
    backgroundColor: '#3D5AFE',
    color: '#fff',
    borderRadius: '0.25em',
    padding: '0.25em',
    marginTop: '1em'
  },
  alert: {
    width: '100%',
    height: '100%'
  }
});

const UiSchemaElements = ({ classes }) => (
  <div>
    <Typography
      type='display1'
      className={classes.display1}
    >
      UI Schema Elements
    </Typography>
    <p>
      The UI schema, which is passed into the jsonforms directive,
      describes the general layout of a form and is just a regular JSON object.
      It describes the form by means of different UI schema elements, which can be categorized into Controls or Layouts.
      The type of an element can be specified via the type property.
      In this article, we provide a detailed overview about the currently available core UI schema elements.
    </p>

    <Grid container className={classes.container}>
      <Grid item xs={1}>
        <Info className={classes.alert} />
      </Grid>
      <Grid item xs={11}>
        <p>
          Please note that the UI schema hasn't been finalized yet!
          We'll try keep changes to a minimum and only do them if it's an substantial improvement to the framework.
        </p>
        <p>Thanks for your understanding!</p>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(UiSchemaElements);