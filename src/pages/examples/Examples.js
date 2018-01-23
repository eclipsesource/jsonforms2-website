import React from 'react';
import {Grid, Typography, withStyles} from "material-ui";
import {Link, Route, Switch} from "react-router-dom";
import Radium from 'radium';
import commonStyles from "../../common/styles";
import UnderConstruction from "../../common/UnderConstruction";
import {generateLinks} from "../../common/gen-links";

import Person from "./Person";
import Layouts from "./LayoutExamples";
import Array from "./Array";
import CategorizationExample from "./Categorization";
import RuleExample from "./RuleExample";

const RadiumLink = Radium(Link);

const styles = () => ({
  link: commonStyles.link,
  grid: commonStyles.grid,
  mainSection: commonStyles.mainSection,
  sidebar: commonStyles.sidebar,
});

const Examples = ({ classes, location, match }) => (
  <Grid container
        spacing={0}
        className={classes.grid}
        alignItems={'stretch'}
  >
    <Grid item xs={1}/>
    <Grid item xs={7} className={classes.mainSection}>
      <Switch>
        <Route path={`${match.url}/basic`} component={Person}/>
        <Route path={`${match.url}/layouts`} component={Layouts}/>
        <Route path={`${match.url}/array`} component={Array}/>
        <Route path={`${match.url}/categorization`} component={CategorizationExample}/>
        <Route path={`${match.url}/rule`} component={RuleExample}/>
        <Route path={match.url} render={() => (
          <div>
            <Typography type="headline">Examples</Typography>
            <p>
              Each example runs in an isolated environemnt with its own redux store.
            </p>
            <UnderConstruction />
          </div>
        )}/>
      </Switch>
    </Grid>
    <Grid item xs={1} />
    <Grid item xs={3} className={classes.sidebar}>
      <ul style={{ listStyleType: 'none' }}>
        {
          generateLinks(
            location.pathname, classes, match.url, [
              {
                slug: 'basic',
                name: 'Basic person example with validation'
              },
              {
                slug: 'layouts',
                name: 'Layouts',
              },
              {
                slug: 'array',
                name: 'Array'
              },
              {
                slug: 'categorization',
                name: 'Categorization'
              },
              {
                slug: 'rule',
                name: 'Rule'
              }
            ]
          )
        }
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
