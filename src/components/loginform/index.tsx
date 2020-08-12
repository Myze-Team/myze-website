import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import styles from './index.module.scss';
import FormButton from '../formbutton';

import GoogleIconPng from '../../assets/img/google-icon.png';

const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();
  const handleUserLogin = async () => {
    try {
      await Auth.signIn(username, password);
      setUsername('');
      setPassword('');
      history.push('dashboard');
    } catch (e) {
      console.log(e);
    }
  };
  const handleGoogleLogin = async () => {
    await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
  };
  const handleFacebookLogin = async () => {
    await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook });
  };
  return (
    <div className={`${styles.loginFormContainer} responsiveContainer`}>
      <div className={`${styles.loginForm}`}>
        <div className={`${styles.loginTitle}`}>Login</div>
        <div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="name">
              <div>Email</div>
              <input
                type="text"
                id="name"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </label>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="password">
              <div>Password</div>
              <input
                type="password"
                id="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </label>
            <div className={`${styles.subtext} ${styles.forgotPassword}`}>
              <span>Forgot </span>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">Username/Password?</a>
            </div>
          </div>
          <FormButton text="Login" type="regular" topMargin={false} onClick={handleUserLogin} />
          <div className={`${styles.textLine}`}>
            <div className={`${styles.hrContainer}`}>
              <hr />
            </div>
            <div className={`${styles.or}`}>or</div>
            <div className={`${styles.hrContainer}`}>
              <hr />
            </div>
          </div>
        </div>
        <FormButton
          text="Login with Google"
          type="google"
          src={GoogleIconPng}
          topMargin={false}
          onClick={handleGoogleLogin}
        />
        <FormButton
          text="Login with Facebook"
          type="facebook"
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"
          topMargin
          onClick={handleFacebookLogin}
        />
        <div className={`${styles.subtext} ${styles.bottomText}`}>
          <span>Don&rsquo;t have an account? </span>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
