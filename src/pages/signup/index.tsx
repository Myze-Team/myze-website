import React from 'react';
import SignupForm from './signupform';
import LogoBar from '../../components/logobar';

const SignupPage: React.FC = () => {
  const handleLogin = () => {
    /*
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
    */
  };
  return (
    <>
    <LogoBar />
    <SignupForm />

    <button type="button" onClick={handleLogin}>
      Login
    </button>
    </>
  );
};

export default SignupPage;
