import React from 'react';
import {rule} from '@jsonforms/examples';
import {JsonForms} from '@jsonforms/react';
import {Provider} from 'react-redux';
import Typography from "@material-ui/core/Typography";
import Demo from "../../common/Demo";
import {RadiumHashLink} from "../../common";
import {createJsonFormsStore} from "../../common/store";

const RuleExample = () => {

  const store = createJsonFormsStore({
    data: rule.data,
    schema: rule.schema,
    uischema: rule.uischema
  });

  return (
    <div>
      <Typography variant='body1'>
        This example uses a <RadiumHashLink to={'/docs/uischema/rules'} className='link'>Rule</RadiumHashLink> to
        display an additional selection control if the 'Is Alive' checkbox is unchecked.
        If is is checked the control will be hidden. Give it a try!
      </Typography>

      <Provider store={store}>
        <Demo
          schema={rule.schema}
          uischema={rule.uischema}
          js={() =>
            <JsonForms />
          }
        />
      </Provider>
    </div>
  );
};

export default RuleExample;