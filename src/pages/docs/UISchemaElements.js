import React from 'react';
import {Grid, Typography, withStyles} from "material-ui";
import commonStyles from "../../common/styles";
import Alert from 'material-ui-icons/Error'

const styles = () => ({
  display1: commonStyles.display1
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

    <Grid container style={{ backgroundColor: '#F44336', color: '#fff', borderRadius: '0.25em', padding: '0.25em', marginTop: '1em' }}>
      <Grid item xs={1}>
        <Alert style={{ width: '100%', height: '100%' }}/>
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