import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './fonts/turnpike-webfont.ttf';
import './fonts/WorkSans-Bold.ttf';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
