import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Actions, JsonForms, jsonformsReducer } from '@jsonforms/core';

export const createJsonFormsStore = ({ data, schema, uischema }) => {
  const store = createStore(
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
  store.dispatch({
    type: Actions.INIT,
    data,
    schema,
    uischema
  });
  store.dispatch(Actions.validate());
  return store;
};