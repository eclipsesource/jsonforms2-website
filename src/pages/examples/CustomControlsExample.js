import React from 'react';
import { day3 } from '@jsonforms/examples';
import { registerRenderer } from '@jsonforms/core';
import { JsonForms } from '@jsonforms/react';
import { Provider } from 'react-redux';
import Typography from "@material-ui/core/Typography";

import {Demo, RadiumHashLink} from '../../common'
import {createJsonFormsStore} from "../../common/store";
import ratingControlTester from "../docs/ratingControlTester";
import RatingControl from "../docs/RatingControl";

const CustomControlsExample = () => {

  const store = createJsonFormsStore({
    data: day3.data,
    schema: day3.schema,
    uischema: day3.uischema
  });

  store.dispatch(registerRenderer(ratingControlTester, RatingControl));

  return (
    <div className='example'>
      <Typography variant='body1'>
        This example demonstrates that the default renderers of JSON Forms can be replaced with custom ones.
        We've replaced the default renderer for integers (which have a maximum value of 5 here) with one
        display stars (at the bottom of the form).
      </Typography>
      <Typography variant='body1'>
        You can read more about custom
        controls <RadiumHashLink to='/docs/custom-renderers' className='link'>here</RadiumHashLink>.
      </Typography>
      <Provider store={store}>
        <Demo
          schema={day3.schema}
          uischema={day3.uischema}
          js={() => (
            <JsonForms />
          )}
        />
      </Provider>
    </div>
  );
};

export default CustomControlsExample;
