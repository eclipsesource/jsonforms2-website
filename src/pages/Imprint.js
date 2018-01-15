import React from 'react';
import {Card, CardContent, Grid, Typography, withStyles} from "material-ui";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: 10,
    margin: 'auto',
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

const Imprint = ({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={0}>
      <Grid item xs={12} >
        <div className={classes.container}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline">Imprint</Typography>
              <address>
                EclipseSource München GmbH<br/>
                Agnes-Pockels-Bogen 1<br/>
                80992 München<br/>
                Germany<br/>
              </address>

              <p>
                Email: munich@eclipsesource.com<br/>
                Web: http://eclipsesource.com/munich<br/>
                Phone: +49 89 21 555 301<br/>
                Fax: +49 89 21 555 302<br/>
              </p>

              <p>
                General Managers: Dr. Jonas Helming, Dr. Maximilian Kögel<br/>
                Registered Office: Agnes-Pockels-Bogen 1, 80992 München, Commercial Register München, HRB 191789
              </p>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Imprint);