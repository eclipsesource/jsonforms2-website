import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import {AppBar, Button, Toolbar, Typography, withStyles} from "material-ui";
import Radium from 'radium';
import './App.css';
import Home from './Home';
import 'typeface-roboto'
import Imprint from "./pages/Imprint";
import Docs from "./pages/docs/Docs";
import Examples from "./pages/examples/Examples";
import Support from "./pages/Support";
import Footer from "./Footer";
import commonStyles from "./pages/common/styles";

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
    minHeight: '5vh',
    margin: 0,
    backgroundColor: '#212121',
  },
  content: {
    display: 'flex',
    paddingTop: '7vh',
    flex: 1,
    padding: '0em'
  },
  flex: {
    flex: 1,
  },
  link: {
    ...commonStyles.link,
    marginLeft: '1em',
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
              <Typography type="title" color="inherit" className={classes.flex}>
                JSONForms
              </Typography>
              <Button
                component={({...props}) => <RadiumLink to='/' {...props} className={classes.link}/>}
              >
                Home
              </Button>
              <Button
                component={({...props}) => <RadiumLink to='/examples' {...props} className={classes.link} />}
              >
                Examples
              </Button>

              <Button
                component={props => <Link to="/docs" {...props} className={classes.link} />}
              >
                Docs
              </Button>
              <Button
                component={props => <Link to="/support" {...props} className={classes.link} />}
              >
                Support
              </Button>
            </Toolbar>
          </AppBar>

          <div className={classes.content}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/examples" component={Examples}/>
              <Route path="/docs" component={Docs}/>
              <Route path="/support" component={Support}/>
              <Route path="/imprint" component={Imprint}/>
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);