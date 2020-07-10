import React from 'react';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import LoginForm from '../../components/loginform';
import LogoBar from '../../components/logobar';

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
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
