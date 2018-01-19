import React from 'react'
import {Link} from "react-router-dom";
import {Typography, withStyles} from "material-ui";
import { DispatchRenderer, initJsonFormsStore } from "@jsonforms/core";
import { Provider } from "react-redux";
import Radium from 'radium';
import {UiSchemaElementsCode} from "./listings/uischema";
import {  } from "../../common";
import Demo from "../../common/Demo";
import commonStyles from "../../common/styles";
import UISchemaProp from "../../common/UISchemaProp";
import MarkdownElement from "../../common/MarkdownElement";

const styles = () => ({
  code: commonStyles.code,
  display1: commonStyles.display1,
  headline: commonStyles.headline,
  link: commonStyles.link,
  caption: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-1em',
    marginBottom: '0.5em'
  }
});

const RadiumLink = Radium(Link);

const Controls = ({ classes }) => {
  const store = initJsonFormsStore({
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
        Controls
      </Typography>
      <p>
        Controls are of
        type <a href='/api/core/interfaces/scopable.html' className={classes.link} target="_blank">Scopable</a> and
        represent the basic building blocks for creating forms and propagating data updates.
      </p>

      <UISchemaProp title='scope' type='string' />
      <p>
        The type of the actually rendered control depends on what subschema it is bound against.
        The <code>scope</code> property, which expects a&nbsp;
        <a href="https://spacetelescope.github.io/understanding-json-schema/structuring.html#reuse"
           className={classes.link}>
          JSON schema reference
        </a>,&nbsp;
        allows us to path to a property within the schema.

        <p>
          For instance, if the <code>scope</code> property points to something of type <code>string</code>,
          JSON Forms will render a text field, but if the property is of type <code>boolean</code>, a checkbox
          will be rendered.
        </p>

        They expect a mandatory <code>scope</code> property that describes
        against which part of the schema they should bind to.
      </p>
      <p>
        For instance, let's suppose we want to create a control for the <code>name</code> property in this schema:
      </p>
      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`json\n${JSON.stringify(UiSchemaElementsCode.controls.schema, null, 2)}\n\`\`\``}
      />
      <Typography type='caption' className={classes.caption}>
        JSON schema with a name property
      </Typography>

      <p>
        The corresponding UI Schema needs to set the type property as <code>Control</code> and looks as follows:
      </p>
      <MarkdownElement
        dir="ltr"
        className={classes.code}
        text={`\`\`\`json\n${JSON.stringify(UiSchemaElementsCode.controls.uischema, null, 2)}\n\`\`\``}
      />
      <Typography type='caption' className={classes.caption}>
        UI schema for binding a control against the name property
      </Typography>

      <p>
        The form rendered by JSON Forms:
      </p>

      <Provider store={store} >
        <Demo
          js={() => {
            return (
              <DispatchRenderer
                schema={UiSchemaElementsCode.controls.schema}
                uischema={UiSchemaElementsCode.controls.uischema}
              />
            )
          }}
          schema={UiSchemaElementsCode.controls.schema}
          uischema={UiSchemaElementsCode.controls.uischema}
        />
      </Provider>

      <p>
        JSON Forms ships with default renderers for all primitive types as well as for arrays and allows controls to be
        replaced in case one wants to customize the rendered form, see the section about &nbsp;
        <RadiumLink to={'/docs/custom-renderers'} className={classes.link}>Custom renderers</RadiumLink>.
      </p>
    </div>
  );
};

export default withStyles(styles)(Controls);