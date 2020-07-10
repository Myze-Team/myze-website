import React from 'react';
import ReactDOM from 'react-dom';
import { Amplify } from 'aws-amplify';
import 'typeface-nunito-sans';
import 'normalize.css';
import 'focus-visible/dist/focus-visible.min';
import './styles/index.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import MainPage from './pages/main';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import amplifyConfig from './configs/amplify';

Amplify.configure(amplifyConfig);

const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/signup" component={SignupPage} />
  </Switch>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
