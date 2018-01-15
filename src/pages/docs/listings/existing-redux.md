import { jsonformsReducer } from '@jsonforms/core';

const myStore = createStore({
  myAppReducer,
  jsonforms: jsonformsReducer,
  ...otherReducers,
})