import * as React from "react";
import {Button, Card, CardContent, Grid, Typography, withStyles} from "material-ui";
import FeaturesIcon from 'material-ui-icons/Report';
import CustomizeIcon from 'material-ui-icons/Brush';
import { DispatchRenderer }  from '@jsonforms/core'
import { Provider } from 'react-redux';
import schema from './schema.json';
import uischema from './uischema.json';
import reactLogo from './reactLogo.svg';
import schemaLogo from './schemalogo.svg';
import reduxLogo from './reduxLogo.svg';

import {commonStyles, Demo, Logo, RadiumLink} from '../../common'
import {createJsonFormsStore} from "../../common/store";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: 'auto',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: '#212121',
    color: '#fff',
  },
  logo: {
    textAlign: 'center',
    marginTop: '0.5em',
    paddingTop: '0.25em',
    paddingBottom: '0.5em',
    fontSize: '2em',
  },
  icon: {
    color: '#fff',
    width: 'auto',
    height: '6em',
  },
  iconWrapper: {
    height: '3em',
    width: '3em',
  },
  details: {
    color: '#9b9b9b',
    display: 'flex',
    fontWeight: 'bold',
    flexDirection: 'column',
    fontSize: '1.5em',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  containerText: {
    // alignItems: 'center',
    display: 'flex',
    // justifyContent: 'center',
    maxWidth: '1200px',
    textAlign: 'center',
    margin: 'auto',
  },
  link: commonStyles.link,
  button: {
    backgroundColor: '#11b3bb',
    color: 'white',
    margin: '1em'
  },

});

const store = createJsonFormsStore({
  data: { firstName: 'Max Power' },
  schema,
  uischema
  });

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.logo}>
            <strong>JSON</strong>Forms
            <div style={{ paddingTop: '0.5em'}}>
              <Logo/>
            </div>
            More forms. Less code.
          </div>

          <div className={classes.container}>
            <Typography type={'headline'} style={{ color: '#747474' }}>
              Complex forms in the blink of an eye
            </Typography>
          </div>

          <div className={classes.container}>
            <RadiumLink
              to='/docs/getting-started'
              className={classes.link}
            >
              <Button
                raised
                className={classes.button}
              >
                Get started
              </Button>
            </RadiumLink>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify={'center'} align={'center'}>
                <Grid item xs={4}>
                  <img src={schemaLogo} alt='JSON Schema Logo' height='74px' style={{ margin: '11px', padding: 0 }}/>
                  <div className={classes.container}>
                    <div className={classes.details}>
                      Declare your forms as JSON based on a JSON Schema
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <FeaturesIcon className={classes.icon} />
                  <div className={classes.container}>
                    <div className={classes.details}>
                      Fully-featured forms including data-binding, input validation, and rule-based visibility
                      out-of-the-box
                    </div>
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <div>
                    <CustomizeIcon className={classes.icon} />
                  </div>
                  <div className={classes.container}>
                    <div className={classes.details}>
                      Designed for customizability from custom styling to custom widgets
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>



        <Grid item xs={12} className={classes.card} style={{ backgroundColor: '#eeeeee', marginTop: 0, padding: '1em' }}>
          <Grid container>
            <Grid item xs={3}/>
            <Grid item xs={6} justify='center' align='center'>
              <img src={reactLogo} alt="React logo" style={{ height: '80px' }}/>
              <img src={reduxLogo} alt="Redux logo" style={{ height: '80px' }}/>
              <Typography type='title' style={{ color: '#212121' }}>
                JSON Forms currently primarily supports React/Redux based applications
              </Typography>
            </Grid>
            <Grid item xs={3}/>
            </Grid>
          </Grid>

        <Grid item xs={12} className={classes.container} style={{ paddingTop: '1em '}}>
          <Typography type='heading'>
            Demo
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.container}>
          <Provider store={store}>
            <Demo
              js={() => <DispatchRenderer /> }
              schema={schema}
              uischema={uischema}
            />
          </Provider>
        </Grid>
      </Grid>
    </div>
);
};

export default withStyles(styles)(Home);
