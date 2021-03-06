import React from 'react';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';
import FormButton from '../formbutton';

import GoogleIconPng from '../../assets/img/google-icon.png';

const SignupForm: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpwd, setConfirmpwd] = React.useState('');
  const history = useHistory();
  const handleSignup = async () => {
    try {
      if (password !== confirmpwd) {
        throw Error("Passwords don't match");
      }
      await Auth.signUp({
        username,
        password,
      });
      setUsername('');
      setPassword('');
      setConfirmpwd('');
      history.push('login');
    } catch (e) {
      console.log(e);
    }
  };
  const handleGoogleSignup = async () => {
    await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
  };
  const handleFacebookSignup = async () => {
    await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook });
  };
  return (
    <div className={`${styles.loginFormContainer} responsiveContainer`}>
      <div className={`${styles.loginForm}`}>
        <div className={`${styles.loginTitle}`}>Sign Up</div>
        <div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="name">
              <div>Email</div>
              <input
                type="email"
                id="email"
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
                name="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </label>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="confirmpassword">
              <div>Confirm Password</div>
              <input
                type="password"
                id="confirmpassword"
                onChange={(event) => {
                  setConfirmpwd(event.target.value);
                }}
              />
            </label>
          </div>
          <FormButton
            text="Create Account"
            type="regular"
            topMargin={false}
            onClick={handleSignup}
          />
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
          text="Sign up with Google"
          type="google"
          src={GoogleIconPng}
          topMargin={false}
          onClick={handleGoogleSignup}
        />
        <FormButton
          text="Sign up with Facebook"
          type="facebook"
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"
          topMargin
          onClick={handleFacebookSignup}
        />
        <div className={`${styles.subtext} ${styles.terms}`}>
          <div>By creating an account you agree to our</div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Terms & Conditions</a>
          <span> and </span>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Privacy Policy</a>
        </div>
        <div className={`${styles.subtext} ${styles.bottomText}`}>
          <span>Already have an account? </span>
          <a href="/login">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
