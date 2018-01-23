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
    © EclipseSource 2017
    <Button
      component={props => <Link to="/imprint" {...props} className={classes.link} />}
    >
      Imprint
    </Button>
  </footer>
);
export default withStyles(styles)(Footer);
