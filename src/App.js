import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import 'typeface-roboto'
import Radium from 'radium';
import './App.css';
import Home from './pages/home';
import Imprint from "./pages/Imprint";
import Docs from "./pages/docs";
import Examples from "./pages/examples";
import Support from "./pages/support";
import Footer from "./Footer";
import { Logo } from './common';
import NotFound from "./pages/NotFound";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const styles = theme => ({
  root: {
    width: '100%',
  },
  appBar: {
    minHeight: '5vh',
    margin: 0,
    backgroundColor: '#212121',
    boxShadow: 'none',
    paddingLeft: 10,
    paddingRight: 10
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const RadiumLink = Radium(Link);

class App extends Component {
  render() {

    const { classes } = this.props;

    return (
      <Router>
        <React.Fragment>
          <AppBar className={classes.appBar} position='relative'>
            <Toolbar style={{ padding: 0}} >
              <RadiumLink to='/' className='logo__icon'>
                <Logo width={45} height={30} color='#fff'/>
              </RadiumLink>
              &nbsp;
              <RadiumLink to='/' className='logo__title'>
                <Typography variant="title" color="inherit">
                  JSONForms
                </Typography>
              </RadiumLink>
              <Button
                component={({...props}) => <RadiumLink to='/examples/basic' {...props} className='nav__link' />}
              >
                Examples
              </Button>

              <Button
                component={props => <Link to="/docs" {...props} className='nav__link' />}
              >
                Docs
              </Button>
              <Button
                component={props => <Link to="/support" {...props} className={['nav__link', 'navbar__support-link'].join(' ')} />}
              >
                Professional Support
              </Button>
            </Toolbar>
          </AppBar>

          <div className='content'>
            <Switch>
              <Route exact 
                path="/"
                component={Home} 
                />
              <Route 
                path="/examples"
                component={Examples} 
                />
              <Route 
                path="/docs"
                component={Docs}
              />
              <Route 
                path="/support"
                component={Support}
              />
              <Route 
                path="/imprint"
                component={Imprint}
              />
              <Route
                path="/privacy-policy"
                component={PrivacyPolicy}
              />
              <Route
                path="/cookie-policy"
                component={CookiePolicy}
              />
              <Route
                component={NotFound}
              />
            </Switch>
          </div>

          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default withStyles(styles)(App);