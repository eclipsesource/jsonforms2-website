import React from 'react';
import {Grid, Typography, withStyles} from "material-ui";
import commonStyles from "../common/styles";
import UnderConstruction from "../common/UnderConstruction";

const styles = () => ({
  grid: commonStyles.grid,
  mainSection: commonStyles.mainSection,
  display1: commonStyles.display1,
});

const API = ({ classes }) => (
  <Grid container
        spacing={0}
        className={classes.grid}
  >
    <Grid item xs={1}></Grid>
    <Grid item xs={6} className={classes.mainSection}>
      <Typography
        type={'display1'}
        className={classes.display1}
      >
        API Documentation
      </Typography>
      <UnderConstruction/>
    </Grid>
  </Grid>
);

export default withStyles(styles)(API);
