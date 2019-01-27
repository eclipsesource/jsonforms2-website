import React from 'react';
import _ from 'lodash';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link, Route, Switch} from "react-router-dom";
import Intro from "./Intro";
import GettingStarted from "./GettingStarted";
import CustomRenderers from './CustomRenderers';
import UISchemaElements from "./UISchemaElements";
import Controls from "./Controls";
import Layouts from "./Layouts";
import {commonStyles} from "../../common";
import Links from '../../common/Links'
import Rules from "./Rules";
import Store from "./Store";
import Tutorial from "./Tutorial";
import TutorialTypescript from "./TutorialTypescript";
import APIs from "./APIs";
import ProvidingUISchemas from './ProvidingUISchemas';
import RendererSets from './RendererSets';
import Radium from 'radium';

const RadiumLink = Radium(Link);

const styles = () => ({
  currentRoute: {
    fontWeight: 'bold'
  },
  sidebarLink: commonStyles.sidebarLink,
  sidebarLinks: commonStyles.sidebarLinks
});


// TODO: classes should be object with key-value-pairs where values map to stylename
export const TOCLinks = ({ currentLocation, classes, url, routes, indentation = 1 }) => {
  return (
    <React.Fragment>
      <Typography variant='h1'>Documentation</Typography>
      <div className='toc'>
        {
          routes.map(route => {
            const slug = _.endsWith(url, '/') ? url + route.slug : `${url}/${route.slug}`;
            return (
              <React.Fragment key={slug}>
                <RadiumLink
                  key={route.slug}
                  to={slug}
                  className={classes.sidebarLink}
                >
                  <span style={{
                    marginLeft: `${indentation * 0.5}em`
                  }}
                  >
                    {route.name}
                  </span>
                </RadiumLink>
              </React.Fragment>
            );
          })
        }
      </div>
    </React.Fragment>
  );
}

const TOC = ({ location, match, classes }) => (
  <TOCLinks
    currentLocation={location.pathname}
    classes={classes}
    url={match.url}
    routes={
      [
        {
          slug: 'getting-started',
          name: 'Getting started'
        },
        {
          slug: 'intro',
          name: 'What is JSON Forms?'
        },
        {
          slug: 'tutorial',
          name: 'Tutorial'
        },
        {
          slug: 'tutorialTypescript',
          name: 'Tutorial Typescript'
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
            },
            {
              slug: 'rules',
              name: 'Rules'
            },
          ]
        },
        {
          slug: 'custom-renderers',
          name: 'Custom renderers'
        },
        {
          slug: 'providing-uischemas',
          name: 'Providing UISchemas'
        },
        {
          slug: 'renderer-sets',
          name: 'Renderer Sets'
        },
        {
          slug: 'store',
          name: 'Store'
        },
        {
          slug: 'apis',
          name: 'APIs'
        }
      ]
    }
  />
)


const Docs = ({ classes, match, location }) => {
  return (
    <React.Fragment>
      <div className='docs__main'>
        <div className='docs__main-inner'>
          <Switch>
            <Route path={`${match.url}/intro`} component={Intro}/>
            <Route path={`${match.url}/getting-started`} component={GettingStarted}/>
            <Route path={`${match.url}/tutorial`} component={Tutorial}/>
            <Route path={`${match.url}/tutorialTypescript`} component={TutorialTypescript}/>
            <Route path={`${match.url}/uischema/controls`} component={Controls}/>
            <Route path={`${match.url}/uischema/layouts`} component={Layouts}/>
            <Route path={`${match.url}/uischema/rules`} component={Rules}/>
            <Route path={`${match.url}/uischema`} component={UISchemaElements}/>
            <Route path={`${match.url}/custom-renderers`} component={CustomRenderers}/>
            <Route path={`${match.url}/providing-uischemas`} component={ProvidingUISchemas}/>
            <Route path={`${match.url}/renderer-sets`} component={RendererSets}/>
            <Route path={`${match.url}/store`} component={Store}/>
            <Route path={`${match.url}/apis`} component={APIs}/>
            <Route path={`${match.url}/`} component={withStyles(styles)(TOC)}/>
            <Route path={match.url} render={() => (
              <div>
                <Typography variant="h4">Documentation</Typography>
                <p>
                  We provide articles on different aspects of JSON Forms -
                  from a basic introduction to implementing custom renderers.
                  This page lists important articles to get started below.
                  A list of all available articles is available to the right.
                </p>
              </div>
            )}/>
          </Switch>
        </div>
      </div>
      {
        !_.endsWith(location.pathname, 'docs/') && !_.endsWith(location.pathname, 'docs') &&
        <ul className='docs__sidebar'>
          <Links
            currentLocation={location.pathname}
            classes={classes}
            url={match.url}
            routes={
              [
                {
                  slug: 'getting-started',
                  name: 'Getting started'
                },
                {
                  slug: 'intro',
                  name: 'What is JSON Forms?'
                },
                {
                  slug: 'tutorial',
                  name: 'Tutorial'
                },
                {
                  slug: 'tutorialTypescript',
                  name: 'Tutorial Typescript'
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
                    },
                    {
                      slug: 'rules',
                      name: 'Rules'
                    },
                  ]
                },
                {
                  slug: 'custom-renderers',
                  name: 'Custom renderers'
                },
                {
                  slug: 'providing-uischemas',
                  name: 'Providing UISchemas'
                },
                {
                  slug: 'renderer-sets',
                  name: 'Renderer Sets'
                },
                {
                  slug: 'store',
                  name: 'Store'
                },
                {
                  slug: 'apis',
                  name: 'APIs'
                }
              ]
            }
          />
        </ul>
      }
    </React.Fragment>
  );
};

export default withStyles(styles)(Docs);
