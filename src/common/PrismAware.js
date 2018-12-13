import React from 'react';

class PrismAware extends React.Component {
  componentDidMount() {
    global.Prism.highlightAll();
  }
}

export default PrismAware;
