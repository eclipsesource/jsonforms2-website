import React from 'react';
import ApiLink from "../../common/ApiLink";
import commonStyles from "../../common/styles";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Warning from "../../common/Warning";

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
    <Warning>
      <strong>ATTENTION</strong>: Please note that we do not yet follow SemVer conventions yet as the the API of the
      WIP renderer sets is not considered stable yet. We'll switch versioning schemes starting with <strong>3.x.x</strong>.
    </Warning>
    <p>
      This section provides links to the API documentation of all available JSON Forms modules.
    </p>
    <ul className={classes.list}>
      <li>
        <ApiLink link={'/api/core/'}>Core</ApiLink>
      </li>
      <li>
        <ApiLink link={'/api/react/'}>React integration</ApiLink>
      </li>
      <li>
        <ApiLink link={'/api/material/'}>React-based Material renderers</ApiLink>
      </li>
      <li>
        <ApiLink link={'/api/vanilla/'}>React-based vanilla renderers (WIP)</ApiLink>
      </li>
      <li>
        <ApiLink link={'/api/material-tree-renderer/'}>React-based Material tree renderer (WIP)</ApiLink>
      </li>
      <li>
        <ApiLink link={'/api/angular-material/'}>Angular-based Material renderers</ApiLink>
      </li>
      <li>
        <ApiLink link={'/api/ionic/'}>Angular-based Ionic renderers (WIP)</ApiLink>
      </li>
    </ul>
  </div>
);

export default withStyles(styles)(APIs);