import React from 'react';
import commonStyles from "./styles";
import {withStyles} from "material-ui";

const styles = () => ({
  link: commonStyles.link
});

const ApiLink = ({ classes, link, children }) => (
  <a href={link} className={classes.link}>{children}</a>
);

export default withStyles(styles)(ApiLink)