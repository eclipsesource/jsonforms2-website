import React from 'react';
import {Typography, withStyles} from "material-ui";
import commonStyles from "../common/styles";

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
  </div>
);

export default withStyles(styles)(UiSchemaElements);