import React from 'react';
import {Grid, Typography, withStyles} from "material-ui";
import commonStyles from './common/styles';
import UnderConstruction from "./common/UnderConstruction";

const styles = () => ({
  grid: commonStyles.grid,
});

const Support = ({ classes }) => (
  <Grid container spacing={0} className={classes.grid}>
    <Grid item xs={1}/>
    <Grid item xs={7}>
      <div>
        <Typography type="headline">Support</Typography>
        <UnderConstruction/>
      </div>
    </Grid>
    <Grid item xs={3}>

    </Grid>
  </Grid>
);

export default withStyles(styles)(Support);
