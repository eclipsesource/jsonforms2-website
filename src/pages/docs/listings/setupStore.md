const store = createStore(
  combineReducers({ jsonforms: jsonformsReducer() }),  
  {
    jsonforms: {
      renderers: materialRenderers,
      fields: materialFields,
    }
  }
);