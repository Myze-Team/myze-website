import React from 'react';
import styles from './index.module.scss';
import FormButton from '../../../components/formbutton';

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
        <FormButton text="Login" type="regular" topMargin={false} />
        <div className={`${styles.textLine}`}>
            <div className={`${styles.hrContainer}`}><hr /></div>
            <div className={`${styles.or}`}>or</div>
            <div className={`${styles.hrContainer}`}><hr /></div>
        </div>
        <FormButton text="Login with Google" type="google" src={GoogleIconPng} topMargin={false} />
        <FormButton text="Login with Facebook" type="facebook" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" topMargin={true} />
        <div className={`${styles.subtext} ${styles.bottomText}`}>
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </form>
    </div>
  </div>
);

export default LoginForm;
