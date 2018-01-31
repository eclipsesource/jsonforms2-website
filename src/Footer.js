import React from 'react';
import { Link } from 'react-router-dom';
import {Button, withStyles} from "material-ui";
import commonStyles from "./common/styles";

const styles = () => ({
  link: {
    ...commonStyles.link,
    paddingLeft: '1em'
  },
  footer: {
    backgroundColor: '#212121',
    justifyContent: 'flex-end',
    display: 'flex'
  },
});

const Footer = ({classes}) => (
  <footer className={classes.footer}>
    © EclipseSource 2018

    <a href="https://twitter.com/JSONForms" className={classes.link}>
      Twitter
    </a>

    <a href="https://github.com/eclipsesource/jsonforms" className={classes.link}>
      Github
    </a>

    <Link to="/imprint" className={classes.link}>
      Imprint
    </Link>
  </footer>
);
export default withStyles(styles)(Footer);
