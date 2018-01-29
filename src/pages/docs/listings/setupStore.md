
// TODO: settup up 2nd argument (initial state) need to be more convenient 
export const store = createStore(
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