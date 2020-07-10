import React from 'react';
import styles from './index.module.scss';
import FormButton from '../formbutton';

import GoogleIconPng from '../../assets/img/google-icon.png';

const SignupForm: React.FC = () => (
  <div className={`${styles.loginFormContainer} responsiveContainer`}>
    <div className={`${styles.loginForm}`}>
      <div className={`${styles.loginTitle}`}>Sign Up</div>
      <form>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="name">
            <div>Email</div>
            <input type="text" name="name" />
          </label>
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="password">
            <div>Password</div>
            <input type="password" name="password" />
          </label>
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="password">
            <div>Confirm Password</div>
            <input type="password" name="password" />
          </label>
        </div>
        <FormButton text="Create Account" type="regular" topMargin={false} />
        <div className={`${styles.textLine}`}>
          <div className={`${styles.hrContainer}`}>
            <hr />
          </div>
          <div className={`${styles.or}`}>or</div>
          <div className={`${styles.hrContainer}`}>
            <hr />
          </div>
        </div>
        <FormButton
          text="Sign up with Google"
          type="google"
          src={GoogleIconPng}
          topMargin={false}
        />
        <FormButton
          text="Sign up with Facebook"
          type="facebook"
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"
          topMargin
        />
        <div className={`${styles.subtext} ${styles.terms}`}>
          <div>By creating an account you agree to our</div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Terms & Conditions</a>
          <div>and</div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Privacy Policy</a>
        </div>
        <div className={`${styles.subtext} ${styles.bottomText}`}>
          <div>Already have an account?</div>
          <a href="/login">Log In</a>
        </div>
      </form>
    </div>
  </div>
);

export default SignupForm;
