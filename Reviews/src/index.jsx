import React from 'react';
import ReactDOM from 'react-dom';
import ReviewApp from './Components/ReviewApp.jsx';

const id = 14936;

ReactDOM.render(
  <ReviewApp productId={id} />,
  document.getElementById('app'),
);
