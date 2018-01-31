import React from 'react';
import {Button, Grid, Typography, withStyles} from "material-ui";
import Feedback from 'material-ui-icons/Feedback'
import Build from 'material-ui-icons/Build'
import School from 'material-ui-icons/School'
import Swap from 'material-ui-icons/SwapVerticalCircle'
import Chat from 'material-ui-icons/Chat'
import LocalOffer from 'material-ui-icons/LocalOffer'
import commonStyles from '../../common/styles';
import eclipseSourceLogo from './eclipsesource.png';
import EmailIcon from 'material-ui-icons/Email';

const styles = () => ({
  grid: {
    paddingTop: '1em'
  },
  display1: commonStyles.display1,
  icon: {
    width: 'auto',
    height: '6em',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    margin: '0.5em'
  }
});

const Support = ({ classes }) => (
  <Grid container spacing={0} className={classes.grid} justify={'center'} align={'center'}>
    <Grid item xs={3}/>
    <Grid item xs={6} justify='center' align='center'>
      <Typography type="display1">Professional Support is brought to you by</Typography>
      <img src={eclipseSourceLogo} />
    </Grid>
    <Grid item xs={3}/>

    <Grid container  spacing={0}>
      <Grid item xs />
      <Grid item xs>
        <Feedback className={classes.icon}/>
        <Typography type='title' className={classes.title}>
          Evaluation
        </Typography>
        <p>
          Let us help to decide, whether JSON Forms is the right choice for you. We will evaluate your requirements, assess if and how they can be matched with JSON Forms, and help you to estimate the integration effort
        </p>
      </Grid>
      <Grid item xs>
        <Build className={classes.icon}/>
        <Typography type='title' className={classes.title}>
          Prototyping
        </Typography>
        <p>
          Let us provide you with a prototype demonstrating how JSON Forms will work in your domain
        </p>
      </Grid>
      <Grid item xs>
        <School className={classes.icon}/>
        <Typography type='title' className={classes.title}>
          Training
        </Typography>
        <p>
          Let us teach you how to apply JSON Forms most efficient in your project, including related technologies such as React or JSON Schema.
        </p>
      </Grid>
      <Grid item xs />
    </Grid>

    <Grid container>
      <Grid item xs />
      <Grid item xs>
        <Swap className={classes.icon}/>
        <Typography type='title' className={classes.title}>
          Integration
        </Typography>
        Let us help you to integrate JSON Forms into your existing application as efficiently as possible
      </Grid>
      <Grid item xs>
        <Chat className={classes.icon}/>
        <Typography type='title' className={classes.title}>
          Support
        </Typography>
        Let us assist your team when solving day-to-day issues, such as technical problems or architecture decisions
      </Grid>
      <Grid item xs>
        <LocalOffer className={classes.icon}/>
        <Typography type='title' className={classes.title}>
          Sponsored Development
        </Typography>
        Let us adapt and enhance the framework based on your specific requirements
      </Grid>
      <Grid item xs/>
    </Grid>

    <Grid container>
      <Grid item xs>
        <Button style={{ paddingTop: '2em', paddingBottom: '2em' }} color={'primary'} component={props => <a href='mailto:munich@eclipsesource.com' {...props}/>}>
          <EmailIcon/>
          Contact us
        </Button> for more details!
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Support);
