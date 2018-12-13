import React from 'react';
import {JsonForms} from '@jsonforms/react';
import {jsonformsReducer} from '@jsonforms/core';
import {
  MaterialCategorizationLayout,
  materialCategorizationTester,
  materialFields,
  materialRenderers
} from '@jsonforms/material-renderers';
import Typography from "@material-ui/core/Typography";
import PropHeader from "../../common/PropHeader";
import {RadiumLink} from "../../common";
import ApiLink from "../../common/ApiLink";
import {schema, schemas, uischema, uischemas} from './listings/store';
import {Provider} from "react-redux";
import Demo from "../../common/Demo";
import {combineReducers, createStore} from "redux";
import DocPage from "./DocPage";
/* eslint import/no-webpack-loader-syntax: off */
const jsonFormsState = require('!raw-loader!./listings/jsonFormsState.md');
const validationState = require('!raw-loader!./listings/validationState.md');
const multipleForms = require('!raw-loader!./listings/multipleForms.md');

const store = createStore(
  combineReducers({ jsonforms: jsonformsReducer() }),
  {
    jsonforms: {
      renderers: materialRenderers
        .concat([{ tester: materialCategorizationTester, renderer: MaterialCategorizationLayout}]),
      fields: materialFields,
    }
  }
);

const linkedFormsStore = createStore(
  combineReducers({ jsonforms: jsonformsReducer() }),
  {
    jsonforms: {
      renderers: materialRenderers
        .concat([{ tester: materialCategorizationTester, renderer: MaterialCategorizationLayout}]),
      fields: materialFields,
    }
  }
);

const Store = () => (
  <DocPage>
    <Typography variant='h1'>
      Store setup
    </Typography>
    <Typography variant='body1'>
      JSON Forms makes use of redux to maintain its internal state. This section describes
      the state managed by the JSON Forms reducer.
    </Typography>
    <Typography variant='h2'>
      Basic structure
    </Typography>

    <Typography variant='body1'>
      JSON Forms exports its reducer via
      the <ApiLink link='/api/core/globals.html#jsonformsreducer'>jsonformsReducer</ApiLink> function.
      It's expected that you add this reducer to your application via <code>combineReducers</code> under the
      <code>jsonforms</code> key. The basic structure of the JSON Forms state looks like this:
    </Typography>

    <pre className='code-listing'>
      <code className='language-javascript'>
        {jsonFormsState}
      </code>
    </pre>

    <Typography variant='body1'>
      Let's inspect each of these state properties:
    </Typography>

    <PropHeader title='core'/>
    <Typography variant='body1'>
      The core substate stores the <code>data</code>, which represents the data
      to be rendered, the <code>schema</code> which describes the structure of the <code>data</code> and
      the <code>uischema</code>, which describes how to render the <code>data</code>.
    </Typography>

    <Typography variant='body1'>
      The <code>validation</code> substate stores any validation errors the <code>data</code> currently has with
      respect to the <code>schema</code>. It's shape is defined as:
    </Typography>

    <pre className='code-listing'>
      <code className='language-javascript'>
        {validationState}
      </code>
    </pre>

    <Typography variant='body1'>
      The <code>errors</code> property stores the current errors. Under the hood, JSON Forms
      uses <a href="https://github.com/epoberezkin/ajv" className='link'>ajv</a> to validate the
      data against the schema, hence the <code>ValidationFunction</code> and <code>ErrorObject</code> types are from ajv.
    </Typography>

    <PropHeader title='renderers'/>
    <Typography variant='body1'>
      The <code>renderers</code> property stores all available renderers that are used by JSON Forms when rendering.
      If you want to know more about renderers, see
      the section on <RadiumLink to='/docs/custom-renderers' className='link'>Custom Renderers</RadiumLink>.
    </Typography>

    <PropHeader title='fields'/>
    <Typography variant='body1'>
      Fields are like renderers but only represent the data to be displayed and nothing else. This is not necessarily
      the case with Renderers stored within <code>renderers</code>, as such renderers may also display a label
      or any validation errors. Fields are more universal in that sense that they should not make any assumptions
      about the environment they are embedded in, e.g. a field may either be used by a regular control or by a table,
      where it is used within a call. Most controls for primitive datatypes in the default renderer sets of JSON Forms
      are implemented with fields.
    </Typography>


    <Typography variant='body1'>
      If you contribute custom renderers/fields, some of them might need to some additional state not covered by
      JSON Forms. For that purpose the <code>JsonFormsState</code> allows any additional state to be passed in
      via an index property.
    </Typography>

    <Typography variant='h2'>
      Available actions
    </Typography>
    <Typography variant='body1'>
      JSON Forms provides a couple of action to interact with the store, which we describe here. All
      actions might either be imported directly or via the <code>Actions</code> utility.
    </Typography>
    <PropHeader title={'init'}/>
    <Typography variant='body1'>
      The <code>INIT</code> action expects the data, schema and uischema and initializes the store accordingly.
      Currently, this action <strong>must</strong> be called in order for JSON Forms to work properly.
    </Typography>

    <PropHeader title='update'/>
    <Typography variant='body1'>
      The <code>update</code> is action is used to update the <code>data</code> substate within the store. It expects two
      arguments: a dot-separated path describing which part of the data should be updated as well as a function that
      returns the value that should be used. The function gets passed the current value that might be used to calculate
      the updated value.
      &nbsp;<ApiLink link='/api/core/globals.html#mapdispatchtocontrolprops'>mapDispatchToControlProps</ApiLink> and
      &nbsp;<ApiLink link='/api/core/globals.html#mapdispatchtofieldprops'>mapDispatchToFieldProps</ApiLink>&nbsp;
      provide a helper function called <code>handleChange</code> which already dispatches the <code>update</code> action,
      so that you rarely need to interact with <code>update</code> itself, if at all.
    </Typography>

    <PropHeader title='registerRenderer'/>
    <Typography variant='body1'>
      These actions allow to register or unregister renderers, respectively. The <code>registerRenderer</code> expects
      two arguments, the 1st being a tester and the 2nd the actual renderer. Please see the section
      about <RadiumLink to='/docs/custom-renderers' className='link'>Custom Renderers</RadiumLink> for an example
      how to use these.
    </Typography>

    <PropHeader title='registerUISchema'/>
    <Typography variant='body1'>
      These actions allow to register or unregister UISchemas, respectively. The <code>registerUISchema</code> expects
      two arguments, the 1st being a tester and the 2nd the actual UISchemaElement. Please see the section
      about <RadiumLink to='/docs/providing-uischemas' className='link'>Providing UISchemas</RadiumLink> for an example
      how to reference additional uischemas from the registry.
    </Typography>

    <Typography variant='h2'>
      Linking forms
    </Typography>

    <Typography variant='body1'>
      Forms can interact with each other by using $ref and setting the <code>scope</code> property within the UI schema
      accordingly. In this example, we have two entities, Person and Address. Whenever we change
      the <code>shippingAddress</code> property of the person, it is accordingly updated in the address form and vice versa.
    </Typography>

    <Provider store={linkedFormsStore}>
      <Demo
        js={() => (
          <JsonForms schema={schema}
                     uischema={uischema}
          />
        )}
        schema={schema}
        uischema={uischema}
      />
    </Provider>

    <Typography variant='h3'>
      Multiple forms within single store
    </Typography>
    <Typography variant='body1'>
      There might be use cases where you have forms that do not have anything in common. In such cases
      you can explicitly pass  <code>schema</code> and <code>uischema</code> props to the <code>JsonForms</code> component
      (if you don't specify these, they will be fetched from the store).
    </Typography>

    <Typography variant='body1'>
      Additionally, the <code>JsonForms</code> component also takes a <code>path</code> prop which specifies
      the instance path that is used to bind against the data.
    </Typography>

    <Typography variant='body1'>
      To illustrate, let's look again at the example from before, but this time
      the <code>person</code> and <code>address</code> schemas are not stored in any common parent schema.
    </Typography>

    <Provider store={store}>
      <Demo
        js={() => (
          <div>
            <JsonForms schema={schemas.person}
              uischema={uischemas.person}
              path='person'
            />
            <JsonForms schema={schemas.address}
              uischema={uischemas.address}
              path='shippingAddress'
            />
          </div>
        )}
        schema={schemas}
        uischema={uischemas}
      />
    </Provider>

    <Typography variant='body1'>
      The code for the above example looks as follows:
    </Typography>

    <pre className='code-listing'>
      <code className='language-jsx'>
        {multipleForms}
      </code>
    </pre>

    <Typography variant='body1'>
      As you can see we explicitly pass in the <code>schema</code> and <code>uischema</code> props.
      We also need to specify which property the data should be written to, in this case we
      use <code>person</code> and <code>shippingAddress</code>.
    </Typography>
  </DocPage>
);

export default Store;