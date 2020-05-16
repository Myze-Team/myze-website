import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-nunito-sans';
import 'normalize.css';
import 'focus-visible/dist/focus-visible.min';
import './styles/index.scss';
import { Amplify } from 'aws-amplify';
import * as serviceWorker from './serviceWorker';
import amplifyConfig from './configs/amplify';
import MainPage from './pages/main';

Amplify.configure(amplifyConfig);

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
