import React from 'react'
import {Link} from "react-router-dom";
import {Typography, withStyles} from "material-ui";
import { DispatchRenderer, initJsonFormsStore } from "@jsonforms/core";
import { Provider } from "react-redux";
import Radium from 'radium';
import MarkdownElement from "../../MarkdownElement";
import Demo from "../../Demo";
import {UiSchemaElementsCode} from "./listings/uischema";
import commonStyles from "../common/styles";

const styles = () => ({
  code: commonStyles.code,
  display1: commonStyles.display1,
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
        Controls are the basic building blocks for creating forms and are responsible for
        propagating data updates. They expect a mandatory <code>scope</code> property that describes
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
        The actually rendered component is dependent of the type of the property the <code>scope</code> refers to,
        for instance JSON Forms will render a text field, if the property is of type <code>string</code>, but a checkbox if
        the type is <code>boolean</code>.
      </p>

      <p>
        JSON Forms ships with default renderers for all primitive types as well as for arrays and allows controls to be
        replaced in case one wants to customize the rendered form, see the section about &nbsp;
        <RadiumLink to={'/docs/custom-renderers'} className={classes.link}>Custom renderers</RadiumLink>.
      </p>
    </div>
  );
};

export default withStyles(styles)(Controls);