import * as React from "react";
import { Link } from 'docz';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
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
import architecture from '../images/architecture.svg';
import schema from './schema.json';
import uischema from './uischema.json';
import tweets from '../pages/news/tweets.json';
import schemaLogo from './schemalogo.svg';
import { NewsSection } from './NewsSection';

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
  gettingStartedButton: {
    margin: '1em'
  }
});

const store = createJsonFormsStore({
  data: { firstName: 'Max', lastName: 'Power' },
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
          <img src={schemaLogo} className={styles.schemaLogo} />
          <p className={styles.landing_page__detail}>
            Declare your forms as JSON based on a JSON Schema
          </p>
        </div>

        <div className={styles.feature}>
          <FeaturesIcon className={styles.icon} />
          <p className={styles.landing_page__detail}>
            Fully-featured forms including data-binding, input validation, and rule-based visibility
            out-of-the-box
          </p>
        </div>

        <div className={styles.feature}>
          <CustomizeIcon className={styles.icon} />
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
          JSON Forms is a JSON Schema based approach for creating forms based on Redux and comes with support for React, Angular and Vue.
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

      <hr/>

      <div className={styles.landing_page__news}>
        <div class={styles.news_section}>
          <NewsSection tweets={tweets} amount="1" />
        </div>
        <Link
          to='/news'
          className={globalStyles.link}
        >
          <Button variant="contained">
            more news
          </Button>
        </Link>
      </div>

      <div className={styles.landing_page__architecture}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={8}>
            <Typography variant='h3' align='center' className={styles.shift_left}>JSON Forms Architecture</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={8}>
            <img src={architecture} alt="JSON Forms Architecture" className={styles.architecture_default} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Paper className={styles.architecture_description}>
              <p>
                The basis of JSON Forms is the core module (<code>@jsonforms/core</code>) which provides utilities for managing and rendering JSON Schema based forms.
                The core package is independent of any UI technology.
                <br/><br/>
                We also provide the JSON Forms React (<code>@jsonforms/react</code>), JSON Forms Angular (<code>@jsonforms/angular</code>) and JSON Forms Vue (<code>@jsonforms/vue</code>, <code>@jsonforms/vue2</code>) modules.
                These use the core package to provide specialized bindings for React, Angular and Vue.
                This approach is especially useful when developing multiple renderer sets against the same technology (i.e. React) as the core bindings don't need to be reimplemented with each set.
                <br/><br/>
                For React we maintain two renderer sets:
                The <code>@jsonforms/material-renderers</code>, which are based on the popular <a href="https://material-ui.com/">Material-UI</a> framework and <code>@jsonforms/vanilla-renderers</code> which provides pure HTML5 renderers.
                For Angular we provide a <a href="https://material.angular.io/">Angular Material</a> based renderer set (<code>@jsonforms/angular-material</code>).
                We don't publish a Vue-based renderer set yet.
                <br/><br/>
                We lay great importance on the customizability and extensibility of JSON Forms.
                Not only are the existing renderers declaratively configurable, you can also add your own custom renderers or replace existing ones.
                Even when you would like to use a different UI framework (e.g. Bootstrap) you can still reuse the JSON Forms core and React, Angular or Vue packages to help you on the way.
                <br/><br/>
                In case you would like to use different application framework you can even create the bindings yourself.
                In this case you still get use out of JSON Forms via the core package.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment >
  );
};

export default withStyles(additionalStyles)(Home);
