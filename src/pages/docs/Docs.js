import React from 'react';
import {Grid, Typography, withStyles} from "material-ui";
import {Link, Route, Switch} from "react-router-dom";
import Radium from 'radium';
import Intro from "./Intro";
import GettingStarted from "./GettingStarted";
import CustomRenderers from './CustomRenderers';
import commonStyles from '../common/styles'
import API from "./API";
import UISchemaElements from "./UISchemaElements";
import Controls from "./Controls";
import Layouts from "./Layouts";

const RadiumLink = Radium(Link);

const styles = () => ({
  grid: commonStyles.grid,
  currentRoute: {
    fontWeight: 'bold'
  },
  link: commonStyles.link,
  mainSection: commonStyles.mainSection,
  sidebar: commonStyles.sidebar,
  list: {
    listStyleType: 'none',
    paddingTop: 0,
    paddingBottom: 0,
  },
});

const generateRoutes = (currentLocation, classes, url, routes, indentation = 1) => {
  return routes.map(route => {
    return (
      <RadiumLink
        to={`${url}/${route.slug}`}
        className={classes.link}
      >
        <li key={route.slug}>
          {
            (currentLocation === `${url}/${route.slug}`) ?
              <span className={classes.currentRoute}
              >
                <span style={{
                  color: '#ff1744',
                  marginRight: '0.25em'
                }}
                >
                  |
                </span>
                {route.name}
              </span> :
              <span>{route.name}</span>
          }
          {
            currentLocation.indexOf(`${url}/${route.slug}`) > -1 &&
            <ul className={classes.list} style={{ paddingLeft: `${indentation * 10}px`}}>
              {
                route.routes &&
                generateRoutes(
                  currentLocation,
                  classes,
                  url + `/${route.slug}`,
                  route.routes,
                  indentation + 1
                )
              }
            </ul>
          }
        </li>
      </RadiumLink>
    );
  });
};

const Docs = ({ classes, match, location }) => (
  <Grid container
        spacing={0}
        className={classes.grid}
        alignItems={'stretch'}
  >
    <Grid item xs={1}></Grid>
    <Grid item xs={6} className={classes.mainSection}>
      <Switch>
        <Route path={`${match.url}/intro`} component={Intro}/>
        <Route path={`${match.url}/getting-started`} component={GettingStarted}/>
        <Route path={`${match.url}/uischema/controls`} component={Controls}/>
        <Route path={`${match.url}/uischema/layouts`} component={Layouts}/>
        <Route path={`${match.url}/uischema`} component={UISchemaElements}/>
        <Route path={`${match.url}/custom-renderers`} component={CustomRenderers}/>
        <Route path={`${match.url}/api`} component={API}/>
        <Route path={match.url} render={() => (
          <div>
            <Typography type="headline">Documentation</Typography>
            <p>
              We provide articles on different aspects of JSON Forms -
              from a basic introduction to implementing custom renderers.
              This page lists important articles to get started below.
              A list of all available articles is available to the left.
            </p>
          </div>
        )}/>
      </Switch>
    </Grid>
    <Grid item xs={2}/>
    <Grid item xs={3} className={classes.sidebar}>
      <ul className={classes.list}>
        {
          generateRoutes(location.pathname, classes, match.url, [
            {
              slug: 'getting-started',
              name: 'Getting started'
            },
            {
              slug: 'intro',
              name: 'Intro'
            },
            {
              slug: 'uischema',
              name: 'UI Schema Elements',
              routes: [
                {
                  slug: 'controls',
                  name: 'Controls'
                },
                {
                  slug: 'layouts',
                  name: 'Layouts'
                }
              ]
            },
            {
              slug: 'custom-renderers',
              name: 'Custom renderers'
            },
            {
              slug: 'api',
              name: 'API'
            }
          ])
        }
      </ul>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Docs);