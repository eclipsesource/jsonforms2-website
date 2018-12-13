import React from 'react';
import {Link} from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import corePackageJson from '@jsonforms/core/package'

const styles = () => ({
  link: {
    paddingLeft: '1em'
  }
});

const Footer = ({classes}) => {
  const linkClasses = [classes.link, 'link'].join(' ');
  return (
    <footer>
      <div className='footer__version_and_copyright'>
        <span>
          Version {corePackageJson.version}
        </span>
        <span className='footer__version_and_copyright-copyright'>
          © EclipseSource 2018
        </span>
      </div>
      <div className='footer__links'>
        <a href="https://twitter.com/JSONForms" className={linkClasses}>
          Twitter
        </a>

        <a href="https://github.com/eclipsesource/jsonforms" className={linkClasses}>
          Github
        </a>

        <Link to="/imprint" className={linkClasses}>
          Imprint
        </Link>

        <Link to="/privacy-policy" className={linkClasses}>
          Privacy Policy
        </Link>

        <Link to="/cookie-policy" className={linkClasses}>
          Cookie Policy
        </Link>
      </div>
    </footer>
  );
}

export default withStyles(styles)(Footer);
