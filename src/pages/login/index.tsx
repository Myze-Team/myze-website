import React from 'react';

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    /*
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
    */
  };
  return (
    <button type="button" onClick={handleLogin}>
      Login
    </button>
  );
};

export default LoginPage;
