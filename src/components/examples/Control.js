import React from 'react';
import { control } from '@jsonforms/examples';
import { JsonFormsDispatch, JsonFormsReduxContext } from '@jsonforms/react';
import { Provider } from 'react-redux';
import { createJsonFormsStore } from '../../common/store';
import Demo from '../common/Demo';

const controlStore = createJsonFormsStore({
  data: control.data,
  schema: control.schema,
  uischema: control.uischema
});

const extendedControlStore = createJsonFormsStore({
  data: control.extendedData,
  schema: control.extendedSchema,
  uischema: control.extendedUischema
});

export const Control = () => (
  <Provider store={controlStore}>
    <JsonFormsReduxContext>
      <Demo
        js={() => <JsonFormsDispatch />}
        schema={control.schema}
        uischema={control.uischema}
      />
    </JsonFormsReduxContext>
  </Provider>
);

export const ExtendedControl = () => (
  <Provider store={extendedControlStore}>
    <JsonFormsReduxContext>
      <Demo
        js={() => <JsonFormsDispatch />}
        schema={control.extendedSchema}
        uischema={control.extendedUischema}
      />
    </JsonFormsReduxContext>
  </Provider>
);

