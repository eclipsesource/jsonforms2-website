import React from 'react';
import {Grid, Typography, withStyles} from "material-ui";
import {Link, Route, Switch} from "react-router-dom";
import Radium from 'radium';
import commonStyles from "../common/styles";
import UnderConstruction from "../common/UnderConstruction";

const RadiumLink = Radium(Link);

const Basic = () => (
  <h1>Basic</h1>
);

const Layouts = () => (
  <h1>Layouts</h1>
);

const Array = () => (
  <h1>Array</h1>
);

const styles = () => ({
  link: commonStyles.link,
  grid: commonStyles.grid
});

const Examples = ({ classes, match }) => (
  <Grid container
        spacing={0}
        className={classes.grid}
        alignItems={'stretch'}
  >
    <Grid item xs={1}></Grid>
    <Grid item xs={7}>
      <Switch>
        <Route path={`${match.url}/basic`} component={Basic}/>
        <Route path={`${match.url}/layouts`} component={Layouts}/>
        <Route path={`${match.url}/uischema`} component={Array}/>
        <Route exact path={match.url} render={() => (
          <div>
            <Typography type="headline">Examples</Typography>
            <UnderConstruction />
          </div>
        )}/>
      </Switch>
    </Grid>
    <Grid item xs={3}>
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <RadiumLink to={`${match.url}/basic`} className={classes.link}>
            Basic Use-case with validation
          </RadiumLink>
        </li>
        <li>
          <RadiumLink to={`${match.url}/layouts`} className={classes.link}>
            Layouts
          </RadiumLink>
        </li>
        <li>
          <RadiumLink
            to={`${match.url}/array`}
            className={classes.link}
          >
            Array control
          </RadiumLink>
        </li>
        <li>
          <RadiumLink
            to={`${match.url}/categories`}
            className={classes.link}
          >
            Categories control
          </RadiumLink>
        </li>
        <li>
          <RadiumLink
            to={`${match.url}/rule`}
            className={classes.link}
          >
            Rule
          </RadiumLink>
        </li>
        <li>
          <RadiumLink
            to={`${match.url}/uischema`}
            className={classes.link}
          >
            Inferring a UI schema
          </RadiumLink>
        </li>
        <li>
          <RadiumLink
            to={`${match.url}/schemata`}
            className={classes.link}
          >
            Inferring both schemata
          </RadiumLink>
        </li>
        <li>
          <RadiumLink
            to={`${match.url}/custom-controls`}
            className={classes.link}
          >
            Custom controls
          </RadiumLink>
        </li>
      </ul>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Examples);
