import React from 'react';
import ApiLink from "../../common/ApiLink";
import commonStyles from "../../common/styles";
import {Typography, withStyles} from "material-ui";

const styles = () => ({
  display1: commonStyles.display1,
  list: {
    ...commonStyles.list,
    listStyle: 'none'
  }
});

const APIs = ({ classes }) => (
  <div>
    <Typography variant='display1' className={classes.display1}>
      API Documentation
    </Typography>
    <p>
      This section provides links to the API documentation of all available JSON Forms modules.
    </p>
    <ul className={classes.list}>
      <li>
        <ApiLink link={'/api/core/'}>Core</ApiLink>
      </li>
      <li>
        <ApiLink link={'/api/react/'}>React Integration</ApiLink>
      </li>
      <li>
        <ApiLink link={'/api/material/'}>React-based Material Renderers</ApiLink>
      </li>
      <li>
        <ApiLink link={'/api/vanilla/'}>React-based Vanilla Renderers</ApiLink>
      </li>
    </ul>
  </div>
);

export default withStyles(styles)(APIs);