import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import corePackageJson from '@jsonforms/core/package'
import commonStyles from "./common/styles";

const styles = () => ({
  link: {
    ...commonStyles.link,
    paddingLeft: '1em'
  },
  footer: {
    backgroundColor: '#212121',
    justifyContent: 'space-between',
    display: 'flex'
  },
});

const Footer = ({classes}) => (
  <footer className={classes.footer}>
    <span>
      Version {corePackageJson.version}
    </span>
    <span>
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

      <Link to="/privacy-policy" className={classes.link}>
        Privacy Policy
      </Link>

      <Link to="/cookie-policy" className={classes.link}>
        Cookie Policy
      </Link>
    </span>
  </footer>
);
export default withStyles(styles)(Footer);
