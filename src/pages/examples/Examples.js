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
import GenerateSchemaExample from "./GenerateSchemaExample";
import GenerateUISchemaExample from "./GenerateUISchemaExample";

const RadiumLink = Radium(Link);

const styles = () => ({
  link: commonStyles.link,
  grid: commonStyles.grid,
  mainSection: commonStyles.mainSection,
  sidebar: commonStyles.sidebar,
  headline: commonStyles.headline
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
        <Route path={`${match.url}/generate-uischema`} component={GenerateUISchemaExample}/>
        <Route path={`${match.url}/generate-schemata`} component={GenerateSchemaExample}/>
        <Route path={match.url} render={() => (
          <div>
            <Typography type="headline" className={classes.headline}>Examples</Typography>
            <p>
              This section shows different examples how JSON Forms can be put to use.
              You can browse the examples on the right.
              Each example runs within its own redux store provided via a <code>Provider</code> element.
              You can inspect the corresponding data, schema and UI schema entries within the store
              by clicking the respective buttons on top right hande side of each example.
            </p>
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
              },
              {
                slug: 'generate-uischema',
                name: 'Inferring a UI schema'
              },
              {
                slug: 'generate-schemata',
                name: 'Inferring both schemata'
              }
            ]
          )
        }
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
