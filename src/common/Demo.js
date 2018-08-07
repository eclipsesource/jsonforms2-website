import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import DataIcon from '@material-ui/icons/Code';
import SchemaIcon from '@material-ui/icons/Description';
import UiSchemaIcon from '@material-ui/icons/ViewQuilt';
import { getData } from '@jsonforms/core';
import MarkdownElement from './MarkdownElement';

//
// Based on https://github.com/mui-org/material-ui/blob/v1-beta/docs/src/modules/components/Demo.js
//

const styles = theme => ({
  root: {
    position: 'relative',
    marginBottom: 40,
    marginTop: 20,
    marginLeft: -theme.spacing.unit * 2,
    marginRight: -theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      padding: `0 ${theme.spacing.unit}px`,
      marginLeft: 0,
      marginRight: 0,
    },
  },
  demo: theme.mixins.gutters({
    backgroundColor: theme.palette.background.contentFrame,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 6,
    },
  }),
  code: {
    display: 'none',
    padding: 0,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    '& pre': {
      overflow: 'auto',
      margin: '0px !important',
      borderRadius: '0px !important',
    },
  },
  schemaButton: {
    display: 'none',
    flip: false,
    zIndex: 10,
    position: 'absolute',
    top: 2,
    right: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  uischemaButton: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      flip: false,
      zIndex: 10,
      position: 'absolute',
      top: 2,
      right: theme.spacing.unit * 8,
    },
  },
  data: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      flip: false,
      zIndex: 10,
      position: 'absolute',
      top: 2,
      right: theme.spacing.unit * 14,
    },
  },
});

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataOpen: props.js === undefined,
      schemaOpen: false,
      uischemaOpen: false,
    };
  }


  handleClickOpenSchema = () => {
    this.setState({
      schemaOpen: !this.state.schemaOpen,
      uischemaOpen: false,
      dataOpen: false,
    });
  };

  handleClickOpenUiSchema = () => {
    this.setState({
      uischemaOpen: !this.state.uischemaOpen,
      schemaOpen: false,
      dataOpen: false,
    });
  };

  handleClickOpenData = () => {
    this.setState({
      uischemaOpen: false,
      schemaOpen: false,
      dataOpen: !this.state.dataOpen
    });
  };

  render() {
    const { classes, js: DemoComponent, schema, uischema, data } = this.props;
    const dataAsString = JSON.stringify(data, null, 2);
    const schemaAsString = JSON.stringify(schema, null, 2);
    const uiSchemaAsString = JSON.stringify(uischema, null, 2);
    const { schemaOpen, uischemaOpen, dataOpen } = this.state;

    return (
      <div className={classes.root}>
        <Tooltip title={schemaOpen ? 'Hide schema' : 'Show schema'} placement="top">
          <IconButton onClick={this.handleClickOpenSchema} className={classes.schemaButton}>
            <SchemaIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={uischemaOpen ? 'Hide UI schema' : 'Show UI schema'} placement="top">
          <IconButton onClick={this.handleClickOpenUiSchema} className={classes.uischemaButton}>
            <UiSchemaIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={dataOpen ? 'Hide data' : 'Show data'} placement="top">
          <IconButton onClick={this.handleClickOpenData} className={classes.data}>
            <DataIcon/>
          </IconButton>
        </Tooltip>

        <Collapse in={schemaOpen} unmountOnExit>
          <MarkdownElement dir="ltr" className={classes.code} text={`\`\`\`json\n${schemaAsString}\n\`\`\``} />
        </Collapse>

        <Collapse in={uischemaOpen} unmountOnExit>
          <MarkdownElement dir="ltr" className={classes.code} text={`\`\`\`json\n${uiSchemaAsString}\n\`\`\``} />
        </Collapse>

        <Collapse in={dataOpen} unmountOnExit>
          <MarkdownElement dir="ltr" className={classes.code} text={`\`\`\`json\n${dataAsString}\n\`\`\``} />
        </Collapse>

        {
          this.props.js &&
          <div className={classes.demo}>
            <DemoComponent/>
          </div>
        }
      </div>
    );
  }
}

Demo.propTypes = {
  classes: PropTypes.object.isRequired,
  js: PropTypes.func,
  schema: PropTypes.object.isRequired,
  uischema: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  data: getData(state),
});

export default connect(
  mapStateToProps
)(withStyles(styles)(Demo));
