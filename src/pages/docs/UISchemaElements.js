import React from 'react';
import {Grid, Typography, withStyles} from "material-ui";
import commonStyles from "../../common/styles";
import Info from 'material-ui-icons/Info'
import { Link } from 'react-router-dom';

const styles = () => ({
  display1: commonStyles.display1,
  link: commonStyles.link,
  list: {
    ...commonStyles.list,
    listStyleType: 'square'
  },
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
      The UI schema, which is passed to JSON Forms,
      describes the general layout of a form and is just a regular JSON object.
      It describes the form by means of different UI schema elements, which can often categorized
      into either Controls or Layouts.
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

    <Typography type='title' style={{ marginTop: '1em' }}>
      Available elements
    </Typography>

    <ul className={classes.list}>
      <li>
        <Link to='/docs/uischema/controls' className={classes.link}>Controls</Link>
      </li>
      <li>
        <Link to='/docs/uischema/layouts' className={classes.link}>Layout</Link>
      </li>
      <li>
        <Link to='/docs/uischema/rules' className={classes.link}>Rules</Link>
      </li>
    </ul>
  </div>
);

export default withStyles(styles)(UiSchemaElements);