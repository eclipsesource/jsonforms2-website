import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Route, Switch} from "react-router-dom";

import Person from "./Person";
import Layouts from "./LayoutExamples";
import Array from "./Array";
import CategorizationExample from "./Categorization";
import RuleExample from "./RuleExample";
import GenerateSchemaExample from "./GenerateSchemaExample";
import GenerateUISchemaExample from "./GenerateUISchemaExample";
import CustomControlsExample from "./CustomControlsExample";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import * as ReactDOM from "react-dom";

const styles = theme => ({
  link: {
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',
    backgroundColor: 'red',
    flex: 1,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const examples = [
  {
    slug: 'basic',
    name: 'Basic Example'
  },
  {
    slug: 'layouts',
    name: 'Layouts',
  },
  {
    slug: 'categorization',
    name: 'Categorization'
  },
  {
    slug: 'rule',
    name: 'Rule'
  },
  {
    slug: 'generate-uischema',
    name: 'Inferring a UI schema'
  },
  {
    slug: 'generate-schemata',
    name: 'Inferring both schemata'
  },
  {
    slug: 'custom-controls',
    name: 'Custom controls'
  },
  {
    slug: 'array',
    name: 'Array',
    css: 'examples__array'
  }
];

class Examples extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      labelWidth: 0
    }
  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = (event) => {
    const { match, history } = this.props;
    const basePath = match.url.substring(0, match.url.lastIndexOf('/'));
    history.push(`${basePath}/${event.target.value}`);
  }

  render() {
    const { classes, match } = this.props;
    const basePath = match.url.substring(0, match.url.lastIndexOf('/'));
    return (
      <React.Fragment>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            htmlFor="example"
            ref={ref => {
              this.InputLabelRef = ref;
            }}
          >Current Example</InputLabel>
          <Select
            value={match.params.example}
            onChange={this.handleChange}
            renderValue={val => {
              const foundExample = examples.find(ex => ex.slug === val)
              return foundExample ? foundExample.name : '';
            }}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="example"
                id="example"
              />
            }
          >
            {
              examples.map(example => {
                return (
                  <MenuItem
                    value={example.slug}
                    key={example.slug}
                  >
                      {example.name}
                  </MenuItem>
                )
              })
            }
          </Select>
        </FormControl>

        <div style={{ backgroundColor: '#eeeeee', padding: 5, borderRadius: 5 }}>
          <Switch>
            <Route path={`${basePath}/basic`} component={Person}/>
            <Route path={`${basePath}/layouts`} component={Layouts}/>
            <Route path={`${basePath}/array`} component={Array} />
            <Route path={`${basePath}/categorization`} component={CategorizationExample}/>
            <Route path={`${basePath}/rule`} component={RuleExample}/>
            <Route path={`${basePath}/generate-uischema`} component={GenerateUISchemaExample}/>
            <Route path={`${basePath}/generate-schemata`} component={GenerateSchemaExample}/>
            <Route path={`${basePath}/custom-controls`} component={CustomControlsExample}/>
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

class ExamplesPage extends React.Component {

  render() {
    const { match } = this.props;
    return (
      <div className='examples__main'>
        <div className='examples__main-inner'>
          <Typography variant='h1'>Examples</Typography>
          <Switch>
            <Route path={`${match.url}/:example`} component={withStyles(styles)(Examples)}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ExamplesPage);
