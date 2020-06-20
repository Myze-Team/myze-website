import React from 'react';
import LoginForm from './loginform';
import LogoBar from '../../components/logobar';

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    /*
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
    */
  };
  return (
    <>
    <LogoBar />
    <LoginForm />

    <button type="button" onClick={handleLogin}>
      Login
    </button>
    </>
  );
};

export default LoginPage;
