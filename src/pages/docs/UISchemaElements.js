import React from 'react';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import commonStyles from "../../common/styles";
import { Link } from 'react-router-dom';
import Warning from "../../common/Warning";

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
  }
});

const UiSchemaElements = ({ classes }) => (
  <div>
    <Typography
      variant='display1'
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

    <Warning>
      <p>
        Please note that the UI schema hasn't been finalized yet!
        We'll try keep changes to a minimum and only do them if it's an substantial improvement to the framework.
      </p>
      <p>Thanks for your understanding!</p>
    </Warning>

    <Typography variant='title' style={{ marginTop: '1em' }}>
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
