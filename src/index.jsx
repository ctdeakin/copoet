import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import '../public/main.css'


ReactDOM.render(
      <App />,
    document.getElementById('root')
  );

  module.hot.accept();