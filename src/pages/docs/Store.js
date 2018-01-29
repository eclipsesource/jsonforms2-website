import React from 'react';
import commonStyles from "../../common/styles";
import {Typography, withStyles} from "material-ui";
import MarkdownElement from "../../common/MarkdownElement";
import PropHeader from "../../common/PropHeader";
import {RadiumLink} from "../../common";
import ApiLink from "../../common/ApiLink";
/* eslint import/no-webpack-loader-syntax: off */
const jsonFormsState = require('!raw-loader!./listings/jsonFormsState.md');
const validationState = require('!raw-loader!./listings/validationState.md');

const styles = () => ({
  link: commonStyles.link,
  code: commonStyles.code,
  display1: commonStyles.display1,
  headline: commonStyles.headline,
  list: commonStyles.list
});

const Store = ({ classes }) => (
  <div>
    <Typography type='display1' className={classes.display1}>
      Store setup
    </Typography>
    <p>
      JSON Forms makes use of redux to maintain its internal state. This section describes
      the state managed by the JSON Forms reducer.
    </p>
    <Typography type='headline' className={classes.headline}>
      Basic structure
    </Typography>
    JSON Forms exports its reducer via
    the <ApiLink link='/api/core/globals.html#jsonformsreducer'>jsonformsReducer</ApiLink> function.
    It describes the basic structure of the JSON Forms state which looks like this:
    <MarkdownElement
      dir="ltr"
      className={classes.code}
      text={`\`\`\`js\n${jsonFormsState}\n\`\`\``}
    />

    <p>
      Let's inspect each of these state properties:
    </p>
    <ul className={classes.list}>
      <li>
        <PropHeader title='common'/>
        The common substate stores the <code>data</code>, which represents the data
        to be rendered, the <code>schema</code> which describes the structure of the <code>data</code> and
        the <code>uischema</code>, which describes how to render the <code>data</code>.
      </li>
      <li>
        <PropHeader title='validation'/>
        The <code>ValidationState</code> stores any validation errors the <code>data</code> currently has with
        respect to the <code>schema</code>. It's internal shape is defined as:
        <MarkdownElement
          dir="ltr"
          className={classes.code}
          text={`\`\`\`js\n${validationState}\n\`\`\``}
        />
        The <code>errors</code> property stores the current errors. Under the hood, JSON Forms
        uses <a href="https://github.com/epoberezkin/ajv" className={classes.link}>ajv</a> to validate the
        data against the schema, hence the <code>ValidationFunction</code> and <code>ErrorObject</code> types are from ajv.
      </li>
      <li>
        <PropHeader title='renderers'/>
        The <code>renderers</code> property stores all available renderers that are used by JSON Forms when rendering.
        If you want to know more about renderers, see
        the section on <RadiumLink to='/docs/custom-renderers' className={classes.link}>Custom Renderers</RadiumLink>.
      </li>
      <li>
        <PropHeader title='fields'/>
        Fields are like renderers but only represent the data to be displayed and nothing else. This is not necessarily
        the case with Renderers stored within <code>renderers</code>, as such renderers may also display a label
        or any validation errors. Fields are more universal in that sense that they should not make any assumptions
        about the environment they are embedded in, e.g. a field may either be used by a regular control or by a table,
        where it is used within a call. Most controls for primitive datatypes in the default renderer sets of JSON Forms
        are implemented with fields.
      </li>
    </ul>

    <p>
      If you contribute custom renderers/fields, some of them might need to some additional state not covered by
      JSON Forms. For that purpose the <code>JsonFormsState</code> allows any additional state to be passed in
      via an index property.
    </p>

    <Typography type='headline' className={classes.headline}>
      Available actions
    </Typography>
    <p>
      JSON Forms provides a couple of action to interact with the store, which we describe here. All
      actions might either be imported directly or via the <code>Actions</code> utility.
    </p>
    <PropHeader title={'init'}/>
    <p>
      The <code>INIT</code> action expects the data, schema and uischema and initializes the store accordingly.
      Currently, this action <strong>must</strong> be called in order for JSON Forms to work properly.
    </p>

    <PropHeader title='update'/>
    <p>
      The <code>update</code> is action is used to update the <code>data</code> substate within the store. It expects two
      arguments: a dot-separated path describing which part of the data should be updated as well as a function that
      returns the value that should be used. The function gets passed the current value that might be used to calculate
      the updated value.
      &nbsp;<ApiLink link='/api/core/globals.html#mapdispatchtocontrolprops'>mapDispatchToControlProps</ApiLink> and
      &nbsp;<ApiLink link='/api/core/globals.html#mapdispatchtofieldprops'>mapDispatchToFieldProps</ApiLink>&nbsp;
      provide a helper function called <code>handleChange</code> which already dispatches the <code>update</code> action,
      so that you rarely need to interact with <code>update</code> itself, if at all.
    </p>

    <PropHeader title='validate'/>
    <p>
      The <code>validate</code> action cause a validation to be executed.
      When using
      &nbsp;<ApiLink link='/api/core/globals.html#mapdispatchtocontrolprops'>mapDispatchToControlProps</ApiLink> or
      &nbsp;<ApiLink link='/api/core/globals.html#mapdispatchtofieldprops'>mapDispatchToFieldProps</ApiLink>&nbsp;
      to trigger change notifications this will be called automatically, but you need to call this action initially
      yourself, if you want validation results to be appear on first rendering.
    </p>

    <PropHeader title='registerRenderer/unregisterRenderer'/>
    <p>
      These actions allow to register or unregister renderers, respectively. The <code>registerRenderer</code> expects
      two arguments, the 1st being a tester and the 2nd the actual renderer. Please see the section
      about <RadiumLink to='/docs/custom-renderers' className={classes.link}>Custom Renderers</RadiumLink> for an example
      how to use these.
    </p>
  </div>
);

export default withStyles(styles)(Store);