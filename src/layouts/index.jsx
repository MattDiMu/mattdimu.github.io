import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle="">
          <html lang="en" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Knowledge Base by Matthias Müller" />
          <meta property="og:site_name" content="Matthias Müller" />
          <meta property="og:title" content="Knowledge Base" />
          <meta property="og:url" content="https://www.matthiasmueller.me" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@MattDiMu" />
          <meta name="twitter:url" content="https://www.matthiasmueller.me" />
          <meta name="twitter:title" content="Knowledge Base" />
          <meta name="theme-color" content="#1976d2" />
          <meta name="google-site-verification" content="FOZaQe5QDrL73m3dsGPGE8gybcFBPamUOa-9nIydYOY" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Helmet>
        {children()}
      </div>
    );
  }
}

export default Layout;
