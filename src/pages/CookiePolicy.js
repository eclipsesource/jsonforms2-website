import React from 'react';
import loadScript from "../common/loadScript";

class CookiePolicy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'start'
    };
    this.loadCookiePolicy = this.loadCookiePolicy.bind(this);
  }

  loadCookiePolicy = () => {
    this.setState({ status: 'loading' });
    loadScript("https://cdn.iubenda.com/iubenda.js")
      .then(() => {
        this.setState({'status': 'done'});
      }).catch(() => {
        this.setState({'status': 'error'});
      })
  }

  render() {
    if (this.state.status === 'start') {
      setTimeout(() => this.loadCookiePolicy());
    }

    return (
      <div>
        <a href="https://www.iubenda.com/privacy-policy/83048734/cookie-policy"
           className="iubenda-nostyle no-brand iubenda-embed iub-body-embed"
           title="Cookie Policy">Cookie Policy</a>
      </div>
    );
  }
}

export default CookiePolicy;
