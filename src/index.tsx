import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-open-sans';
import './styles/index.scss';
import { Amplify } from 'aws-amplify';
import * as serviceWorker from './serviceWorker';
import Navbar from './pages/navbar';
import Cover from './pages/cover';
import HowItWorks from './pages/howitworks';
import AboutUs from './pages/aboutus';
import amplifyConfig from './configs/amplify';

const App: React.FC = () => (
  <>
    <Navbar />
    <Cover />
    <HowItWorks />
    <AboutUs />
  </>
);

Amplify.configure(amplifyConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
