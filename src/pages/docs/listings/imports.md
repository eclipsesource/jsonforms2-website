import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Actions, JsonForms, jsonformsReducer } from '@jsonforms/core';
import { person } from '@jsonforms/examples';
import '@jsonforms/material-renderers';
