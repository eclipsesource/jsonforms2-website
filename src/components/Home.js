import * as React from "react";
import { Link } from 'docz';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import FeaturesIcon from '@material-ui/icons/Report';
import CustomizeIcon from '@material-ui/icons/Brush';
import AddIcon from '@material-ui/icons/Add';
import { JsonFormsDispatch, JsonFormsReduxContext } from '@jsonforms/react'
import corePackageJson from '@jsonforms/core/package'
import { Provider } from 'react-redux';
import angularLogo from "../images/angular.svg"
import reactLogo from '../images/react-logo.svg';
import reduxLogo from '../images/reduxLogo.svg';
import schema from './schema.json';
import uischema from './uischema.json';

import { Demo, Logo } from '../components/common'
import { createJsonFormsStore } from "../common/store"
import globalStyles from '../styles/global.module.css';
import styles from "./home.module.css"
import { Grid } from "@material-ui/core";
//import SEO from "../components/seo"

const additionalStyles = () => ({
  logo: {
    textAlign: 'center',
    marginTop: '0.5em',
    paddingBottom: '0.5em',
    fontSize: '2em',
  },
  icon: {
    width: 'auto',
    height: '6em',
    padding: 9,
  },
  schemaLogo: {
    padding: '18px',
    height: '108px',
    width: '108px',
  },
  gettingStartedButton: {
    margin: '1em'
  }
});

const store = createJsonFormsStore({
  data: { firstName: 'Max Power' },
  schema,
  uischema
});

const nextVersion = process.env.DOCZ_NEXTVERSION;
const nextVersionText = nextVersion && nextVersion !== corePackageJson.version ? `@next: ${nextVersion}` : '';

const Home = ({ classes }) => {
  return (
    <React.Fragment>
      {/*<SEO title="Home" keywords={[`jsonschema`, `json`, `react`, `forms`]} />*/}
      <div className={classes.logo}>
        <div style={{ paddingTop: '0.5em' }}>
          <Grid container>
            <Grid item sm={4} md={4}></Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography variant='h2'>
                <strong>JSON</strong>Forms
              </Typography>
              <Logo />
              <Typography variant='h5'>
                More forms. Less code.
              </Typography>
              <div className={styles.feature}>
                <Typography variant='h6' style={{ color: '#747474' }}>
                  Complex forms in the blink of an eye
                </Typography>
              </div>
              <div className={styles.feature}>
                <Typography>
                  Version: {corePackageJson.version}
                  {nextVersionText && <><br/>{nextVersionText}</>}
                </Typography>
              </div>
              <div className={styles.feature}>
                <Link
                  to='/docs/getting-started'
                  className={globalStyles.link}
                >
                  <Button variant='outlined' className={classes.gettingStartedButton}>
                    Get started
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className={styles.landing_page__features}>
        <div className={styles.feature}>
          <div alt='JSON Schema Logo' className={[classes.schemaLogo, styles.schema_logo_black, styles.schema_logo_white].join(' ')} />
          <p className={styles.landing_page__detail}>
            Declare your forms as JSON based on a JSON Schema
          </p>
        </div>

        <div className={styles.feature}>
          <FeaturesIcon className={[classes.icon, styles.icon].join(' ')} />
          <p className={styles.landing_page__detail}>
            Fully-featured forms including data-binding, input validation, and rule-based visibility
            out-of-the-box
          </p>
        </div>

        <div className={styles.feature}>
          <CustomizeIcon className={[classes.icon, styles.icon].join(' ')} />
          <p className={styles.landing_page__detail}>
            Designed for customizability from custom styling to custom widgets
          </p>
        </div>
      </div>

      <div className={styles.landing_page__description}>
        <div className={styles.landing_page__logos}>
          <img src={reduxLogo} alt="Redux logo" style={{ height: '80px' }} />
          <AddIcon />
          <img src={reactLogo} alt="React logo" style={{ height: '80px', width: '80px' }} />

          <img src={angularLogo} alt="Angular logo" style={{ height: '80px' }} />
        </div>
        <Typography variant='h4' style={{ color: '#212121', textAlign: 'center' }}>
          JSON Forms is a JSON Schema based approach for creating forms based on Redux and comes with support for React and Angular.
        </Typography>
      </div>

      <div className={styles.landing_page__form}>
        <Provider store={store}>
          <JsonFormsReduxContext>
            <Demo
              js={() => <JsonFormsDispatch />}
              schema={schema}
              uischema={uischema}
            />
          </JsonFormsReduxContext>
        </Provider>
      </div>
    </React.Fragment >
  );
};

export default withStyles(additionalStyles)(Home);
