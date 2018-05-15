import React from 'react';
import {Typography, withStyles} from "material-ui";
import commonStyles from "./styles";

const styles = () => ({
  headline: commonStyles.headline,
  link: commonStyles.link,
  type:  {
    color: '#424242',
  },
});

const PropHeader = ({ classes, title, type, link }) => (
  <Typography
    variant='headline'
    className={classes.headline}
  >
    <code>{title}</code>&nbsp;
    {
      link ?
        <span>(<a href={link} className={classes.link}>{type}</a>)</span> :
        type &&
          <span className={classes.type}>({type})</span>
    }
  </Typography>
);

export default withStyles(styles)(PropHeader);