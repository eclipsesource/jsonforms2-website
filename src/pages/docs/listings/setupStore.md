import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { JsonForms, jsonformsReducer } from '@jsonforms/core';

// TODO: settup up 2nd argument (initial state) need to be more convenient 
export const store = ({ data, schema, uischema}) => createStore(
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