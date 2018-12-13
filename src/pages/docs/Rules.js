import React from 'react'
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Radium from 'radium';
import PropHeader from "../../common/PropHeader";
import ApiLink from "../../common/ApiLink";
import DocPage from "./DocPage";
/* eslint import/no-webpack-loader-syntax: off */
const rule = require('!raw-loader!./listings/rule.md');


const RadiumLink = Radium(Link);

const Rules = () => {
  return (
    <DocPage>
      <Typography variant='h1'>
        Rules (<RadiumLink to='/examples/rule' className='link'>Demo</RadiumLink>)
      </Typography>
      <Typography variant='body1'>
        <ApiLink link='/api/core/interfaces/rule.html'>Rules</ApiLink> allow for dynamic aspects for a form,
        e.g. by hiding or disabling UI schema elements.
        A rule may be attached to any UI schema element and can be defined with the <code>rule</code> property.
        We'll first look at an example definition of a rule and then explain it in detail.
      </Typography>

      <pre className='code-listing'>
        <code className='language-json'>
          {rule}
        </code>
      </pre>

      <Typography variant={'caption'}>
        A basic rule definition
      </Typography>

      <Typography variant='body1'>
        A rule basically works by first evaluating the <code>condition</code> property and in case it evaluates
        to true, executing the associated <code>effect</code>.
      </Typography>

      <PropHeader title='effect' type='RuleEffect' link='/api/core/enums/ruleeffect.html'/>
      <Typography variant='body1'>
        The <code>effect</code> property determines what should happen to the attached UI schema element once
        the <code>condition</code> is met. In the example above, if the <code>name</code> property has the value
        of <code>foo</code>, we'll hide the UI schema element the rule is attached to.
        Current effects include:
      </Typography>

      <ul className='bullet-list'>
        <li><Typography variant='body1'><code>HIDE</code>: hide the UI schema element</Typography></li>
        <li><Typography variant='body1'><code>SHOW</code>: show the UI schema element</Typography></li>
        <li><Typography variant='body1'><code>DISABLE</code>: disable the UI schema element</Typography></li>
        <li><Typography variant='body1'><code>ENABLE</code>: enable the UI schema element</Typography></li>
      </ul>

      <PropHeader title='condition' type='Condition' link='/api/core/interfaces/condition.html'/>
      <Typography variant='body1'>
        The <code>condition</code> property describes what value should be observed and validates that value with
        against the JSON schema that is specified with `schema`. If validation succeeds the condition is fulfilled
        and the associated <code>effect</code> will be triggered.
      </Typography>

      <Typography variant='body1'>
        <code>SchemaBasedCondition</code>s have been introduced with version
        2.0.6 and have become the new default. The previous format via <code>type</code> and <code>expectedValue</code> properties
        is still supported for the time being.
      </Typography>
    </DocPage>
  );
};

export default Rules;
