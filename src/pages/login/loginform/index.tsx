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
        </div>
      </form>
    </div>
  </div>
);

export default LoginForm;
