import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { Actions, jsonformsReducer } from '@jsonforms/core';
import { person } from '@jsonforms/examples';
import { materialFields, materialRenderers } from '@jsonforms/material-renderers';
