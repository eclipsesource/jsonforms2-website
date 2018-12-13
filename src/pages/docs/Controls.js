import React from 'react'
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { JsonForms } from "@jsonforms/react";
import { Provider } from "react-redux";
import Radium from 'radium';
import {UiSchemaElementsCode} from "./listings/uischema";
import Demo from "../../common/Demo";
import PropHeader from "../../common/PropHeader";
import {createJsonFormsStore} from "../../common/store";
import ApiLink from "../../common/ApiLink";
import DocPage from "./DocPage";


const RadiumLink = Radium(Link);

const Controls = () => {
  const store = createJsonFormsStore({
    data: UiSchemaElementsCode.controls.data,
    schema: UiSchemaElementsCode.controls.schema,
    uischema: UiSchemaElementsCode.controls.uischema,
  });

  return (
    <DocPage>
      <Typography variant='h1'>
        Controls
      </Typography>
      <Typography variant='body1'>
        Controls represent the basic building blocks for creating forms.
      </Typography>
      <Typography variant='body1'>
        A control is usually displaying the value of one property from the data in an UI element such as an input field.
        How a control is rendered depends on the type of the property as defined in the JSON Schema,
        e.g. a property of type <code>boolean</code> is rendered as a Checkbox by default.
        Controls are of
        type <ApiLink link='/api/core/interfaces/scopable.html'>Scopable</ApiLink> and
        therefore have a <code>scope</code> property.
      </Typography>

      <PropHeader title='scope' type='string' />
      <Typography variant='body1'>
        The mandatory <code>scope</code> property, which expects a&nbsp;
        <a href="https://spacetelescope.github.io/understanding-json-schema/structuring.html#reuse"
           className='link'
        >
          JSON schema reference
        </a>&nbsp;, defines to which property of the data the control should be bound to.
      </Typography>
      <Typography variant='body1'>
        For instance, let us suppose we want to create a control for the <code>name</code> property in this schema:
      </Typography>

      <Typography variant='caption' className='caption'>
        JSON schema with a name property
      </Typography>
      <pre className='code-listing'>
        <code className='language-json'>
          {JSON.stringify(UiSchemaElementsCode.controls.schema, null, 2)}
        </code>
      </pre>

      <Typography variant='body1'>
        The corresponding UI Schema needs to set the <code>type</code> of the UI Schema Element
        to <code>Control</code> and set the <code>scope</code> to point to
        the <code>name</code> property from the JSON schema as follows:
      </Typography>
      <Typography variant='caption' className='caption'>
        UI schema for binding a control against the name property
      </Typography>

      <pre className='code-listing'>
        <code className='language-json'>
          {JSON.stringify(UiSchemaElementsCode.controls.uischema, null, 2)}
        </code>
      </pre>

      <Typography variant='body1'>
        JSON Forms will render the following form from this UI Schema:
      </Typography>

      <Provider store={store} >
        <Demo
          js={() => {
            return (
              <JsonForms
                schema={UiSchemaElementsCode.controls.schema}
                uischema={UiSchemaElementsCode.controls.uischema}
              />
            )
          }}
          schema={UiSchemaElementsCode.controls.schema}
          uischema={UiSchemaElementsCode.controls.uischema}
        />
      </Provider>

      <Typography variant='body1'>
        JSON Forms ships with a default renderer set which consists of renderers for all primitive types as well as
        for arrays. Furthermore JSON Forms allows controls to be replaced or new controls to be added for newly
        invented UI Schema Elements. For documentation on these so called <em>Custom Renderers</em> please see the section
        about <RadiumLink to={'/docs/custom-renderers'} className='link'>Custom renderers</RadiumLink>.
      </Typography>
    </DocPage>
  );
};

export default Controls;
