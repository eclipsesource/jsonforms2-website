import React from 'react';
import loadScript from "../common/loadScript";

class PrivacyPolicy extends React.Component {

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
        <a href="https://www.iubenda.com/privacy-policy/83048734"
           className="iubenda-nostyle no-brand iubenda-embed iub-legal-only iub-body-embed"
           title="Privacy Policy">Privacy Policy</a>
      </div>
    );
  }
}

export default PrivacyPolicy;
