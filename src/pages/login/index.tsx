import React from 'react';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
  };
  return (
    <button type="button" onClick={handleLogin}>
      Login
    </button>
  );
};

export default LoginPage;
