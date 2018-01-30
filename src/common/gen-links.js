import React from 'react';
import {Link} from "react-router-dom";
import Radium from 'radium';

const RadiumLink = Radium(Link);

export const generateLinks = (currentLocation, classes, url, routes, indentation = 1) => {
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