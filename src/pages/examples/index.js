import React from 'react';
import {Grid, Typography, withStyles} from "material-ui";
import {Route, Switch} from "react-router-dom";
import commonStyles from "../../common/styles";
import {generateLinks} from "../../common/gen-links";

import Person from "./Person";
import Layouts from "./LayoutExamples";
import Array from "./Array";
import CategorizationExample from "./Categorization";
import RuleExample from "./RuleExample";
import GenerateSchemaExample from "./GenerateSchemaExample";
import GenerateUISchemaExample from "./GenerateUISchemaExample";
import CustomControlsExample from "./CustomControlsExample";

const styles = () => ({
  link: commonStyles.link,
  sidebarLink: commonStyles.sidebarLink,
  grid: commonStyles.grid,
  mainSection: commonStyles.mainSection,
  sidebar: commonStyles.sidebar,
  display1: commonStyles.display1,
  currentRoute: {
    fontWeight: 'bold'
  },
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
        <Route path={`${match.url}/custom-controls`} component={CustomControlsExample}/>
        <Route path={match.url} render={() => (
          <div>
            <Typography variant="display1" className={classes.display1}>Examples</Typography>
            <p>
              This section shows different examples how JSON Forms can be put to use.
              You can browse the examples on the right.
              Each example runs within its own redux store provided via a <code>Provider</code> element.
              You can inspect the corresponding data, schema and UI schema entries within the store
              by clicking the respective buttons on top right handle side of each example.
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
                name: 'Basic Example'
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
              },
              {
                slug: 'custom-controls',
                name: 'Custom controls'
              }
            ]
          )
        }
      </ul>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Examples);
