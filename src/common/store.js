import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { JsonForms, jsonformsReducer } from '@jsonforms/core';

export const createJsonFormsStore = ({ data, schema, uischema }) => createStore(
  jsonformsReducer(),
  {
    jsonforms: {
      common: {
        data,
        schema,
        uischema,
      },
      renderers: JsonForms.renderers,
      fields: JsonForms.fields,
    }
  },
  applyMiddleware(thunk)
);