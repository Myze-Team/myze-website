import React from 'react';
import styles from './index.module.scss';

import GoogleIconPng from '../../../assets/img/google-icon.png';

const LoginForm: React.FC = () => (
  <div className={`${styles.loginFormContainer} responsiveContainer`}>
    <div className={`${styles.loginForm}`}>
      <div className={`${styles.loginTitle}`}>
        Login
      </div>
      <form>
        <div className={`${styles.formGroup}`}>
          <label>
            <div>Email</div>
            <input type="text" name="name" />
          </label>
        </div>
        <div className={`${styles.formGroup}`}>
          <label>
            <div>Password</div>
            <input type="text" name="name" />
          </label>
          <div className={`${styles.subtext} ${styles.forgotPassword}`}>
            Forgot <a href="#">Username/Password?</a>
          </div>
        </div>
        <div className={`${styles.btn} ${styles.btnRegular}`}>Login</div>
        <div className={`${styles.textLine}`}>
            <div className={`${styles.hrContainer}`}><hr /></div>
            <div className={`${styles.or}`}>or</div>
            <div className={`${styles.hrContainer}`}><hr /></div>
        </div>
        <div className={`${styles.btn} ${styles.btnGoogle}`}>
          <img className={`${styles.googleIcon}`} src={GoogleIconPng} />
          Login with Google
        </div>
        <div className={`${styles.btn} ${styles.btnFacebook}`}>
          <img className={`${styles.facebookIcon}`} src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" />
          Login with Facebook
        </div>
        <div className={`${styles.subtext} ${styles.bottomText}`}>
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </form>
    </div>
  </div>
);

export default LoginForm;
