import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import {AppBar, Button, Toolbar, Typography, withStyles} from "material-ui";
import 'typeface-roboto'
import Radium from 'radium';
import './App.css';
import Home from './pages/home';
import Imprint from "./pages/Imprint";
import Docs from "./pages/docs";
import Examples from "./pages/examples";
import Support from "./pages/support";
import Footer from "./Footer";
import { commonStyles, Logo } from './common';

const styles = theme => ({
  root: {
    width: '100%',
  },
  main: {
    display: 'flex',
    flex: 1,
    minHeight: '100vh',
    flexDirection: 'column'
  },
  appBar: {
    minHeight: '4em',
    margin: 0,
    backgroundColor: '#212121',
    boxShadow: 'none',
    padding: 0
  },
  content: {
    display: 'flex',
    paddingTop: '4em',
    flex: 1,
    padding: '0em'
  },
  logoTitle: {
    textDecoration: 'none',
    color: '#fff',
    flex: '1'
  },
  link: {
    ...commonStyles.link,
    marginLeft: '1em',
    fontWeight: 'bold'
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
        <div className={classes.main}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <RadiumLink to='/' style={{ alignItems: 'center', display: 'flex' }}>
                <Logo width={45} height={30} color='#fff'/>
              </RadiumLink>
              &nbsp;
              <RadiumLink to='/' className={classes.logoTitle}>
                <Typography variant="title" color="inherit">
                  JSONForms
                </Typography>
              </RadiumLink>
              <Button
                component={({...props}) => <RadiumLink to='/examples/basic' {...props} className={classes.link} />}
              >
                Examples
              </Button>

              <Button
                component={props => <Link to="/docs/getting-started" {...props} className={classes.link} />}
              >
                Docs
              </Button>
              <Button
                component={props => <Link to="/support" {...props} className={classes.link} />}
              >
                Professional Support
              </Button>
            </Toolbar>
          </AppBar>

          <div className={classes.content}>
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
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);