import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '@jsonforms/material-renderers';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
