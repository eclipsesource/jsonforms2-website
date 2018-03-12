import React from 'react';
import {Link} from "react-router-dom";
import Radium from 'radium';

const RadiumLink = Radium(Link);

// TODO: classes should be object with key-value-pairs where values map to stylename
export const generateLinks = (currentLocation, classes, url, routes, indentation = 1) => {
  return routes.map(route => {
    return (
      <RadiumLink
        key={route.slug}
        to={`${url}/${route.slug}`}
        className={classes.sidebarLink}
      >
        <li>
          {
            (currentLocation === `${url}/${route.slug}`) ?
              <span className={classes.currentRoute}
              >
                <span style={{
                  color: '#ff1744',
                  marginRight: '0.25em',
                  marginLeft: `${indentation * 0.5}em`
                }}
                >
                  |
                </span>
                {route.name}
              </span> :
              <span style={{
                marginLeft: `${indentation * 0.5}em`
              }}>{route.name}</span>
          }
          {
            currentLocation.indexOf(`${url}/${route.slug}`) > -1 &&
            <ul className={classes.sidebarLinks} style={{ paddingLeft: `${indentation * 10}px`}}>
              {
                route.routes &&
                generateLinks(
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