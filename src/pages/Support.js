import React from 'react';
import {Grid, Typography, withStyles} from "material-ui";
import commonStyles from '../common/styles';
import UnderConstruction from "../common/UnderConstruction";

const styles = () => ({
  grid: commonStyles.grid,
  display1: commonStyles.display1
});

const Support = ({ classes }) => (
  <Grid container spacing={0} className={classes.grid}>
    <Grid item xs={1}/>
    <Grid item xs={7}>
      <div>
        <Typography type="display1" className={classes.display1}>Support</Typography>
        <UnderConstruction/>
      </div>
    </Grid>
    <Grid item xs={3}>

    </Grid>
  </Grid>
);

export default withStyles(styles)(Support);
