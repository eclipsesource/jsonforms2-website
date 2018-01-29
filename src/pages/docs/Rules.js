import React from 'react'
import {Link} from "react-router-dom";
import {Typography, withStyles} from "material-ui";
import Radium from 'radium';
import {UiSchemaElementsCode} from "./listings/uischema";
import MarkdownElement from "../../common/MarkdownElement";
import commonStyles from "../../common/styles";
import PropHeader from "../../common/PropHeader";
import ApiLink from "../../common/ApiLink";
import {createJsonFormsStore} from "../../common/store";
/* eslint import/no-webpack-loader-syntax: off */
const rule = require('!raw-loader!./listings/rule.md');

const styles = () => ({
  code: commonStyles.code,
  display1: commonStyles.display1,
  headline: commonStyles.headline,
  link: commonStyles.link,
  caption: commonStyles.caption,
  ul: {
    listStyleType: 'square',
    paddingLeft: '1em'
  },
});

const RadiumLink = Radium(Link);

const Rules = ({ classes }) => {
  const store = createJsonFormsStore({
    data: UiSchemaElementsCode.controls.data,
    schema: UiSchemaElementsCode.controls.schema,
    uischema: UiSchemaElementsCode.controls.uischema,
  });

  return (
    <div>
      <Typography
        type='display1'
        className={classes.display1}
      >
        Rules (<RadiumLink to='/examples/rule' className={classes.link}>Demo</RadiumLink>)
      </Typography>
      <p>
        <ApiLink link='/api/core/interfaces/rule.html'>Rules</ApiLink> allow for dynamic aspects for a form,
        e.g. by hiding or disabling UI schema elements.
        A rule may be attached to any UI schema element and can be defined with the <code>rule</code> property.
        We'll first look at an example definition of a rule and then explain it in detail.
      </p>

      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`json\n${rule}\n\`\`\``}
      />
      <Typography type={'caption'} className={classes.caption}>
        A basic rule definition
      </Typography>

      <p>
        A rule basically works by first evaluating the <code>condition</code> property and in case it evaluates
        to true, executing the associated <code>effect</code>.
      </p>

      <PropHeader title='effect' type='RuleEffect' link='/api/core/enums/ruleeffect.html'/>
      <p>
        The <code>effect</code> property determines what should happen to the attached UI schema element once
        the <code>condition</code> is met. In the example above, if the <code>name</code> property has the value
        of <code>foo</code>, we'll hide the UI schema element the rule is attached to.
        Current effects include:
        <ul className={classes.ul}>
          <li><code>HIDE</code>: hide the UI schema element</li>
          <li><code>SHOW</code>: show the UI schema element</li>
          <li><code>DISABLE</code>: disable the UI schema element</li>
          <li><code>ENABLE</code>: enable the UI schema element</li>
        </ul>
      </p>

      <PropHeader title='condition' type='Condition' link='/api/core/interfaces/condition.html'/>
      <p>
        The <code>condition</code> property describes what value should be observed and compares that value with the
        one provided via <code>expectedValue</code>. The format for describing the scope is the same as for regular
        controls.
      </p>
    </div>
  );
};

export default withStyles(styles)(Rules);