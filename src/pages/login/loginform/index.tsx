import React from 'react';
import styles from './index.module.scss';

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
          <div className={`${styles.forgotPassword}`}>
            Forgot <a href="#">Username/Password?</a>
          </div>
        </div>
        <div className={`${styles.btn} ${styles.btnRegular}`}>Login</div>
        <div className={`${styles.textLine}`}>
            <div className={`${styles.hrContainer}`}><hr /></div>
            <div className={`${styles.or}`}>or</div>
            <div className={`${styles.hrContainer}`}><hr /></div>
        </div>
        <div className={`${styles.btn} ${styles.btnGoogle}`}>Login with Google</div>
      </form>
    </div>
  </div>
);

export default LoginForm;
