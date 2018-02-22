import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from "material-ui";
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
    </span>
  </footer>
);
export default withStyles(styles)(Footer);
