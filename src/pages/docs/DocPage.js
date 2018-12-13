import React from "react";
import PrismAware from "../../common/PrismAware";
import {RadiumLink} from "../../common";
import withStyles from "@material-ui/core/styles/withStyles";

class DocPage extends PrismAware {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {this.props.children}
        <RadiumLink
          to='/docs'
          className={['link', classes.link].join(' ')}
        >
          Back to TOC
        </RadiumLink>
      </div>
    );
  }
}

export default withStyles({
  link: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: '1.25rem'
  }
})(DocPage);
