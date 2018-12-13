import React from 'react';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
  type:  {
    color: '#424242',
  },
});

const PropHeader = ({ classes, title, type, link }) => (
  <Typography variant='h3'>
    <code>{title}</code>&nbsp;
    {
      link ?
        <span>(<a href={link} className='link'>{type}</a>)</span> :
        type &&
          <span className={classes.type}>({type})</span>
    }
  </Typography>
);

export default withStyles(styles)(PropHeader);
