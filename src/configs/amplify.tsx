export default {
  Auth: {
    oauth: {
      domain: process.env.REACT_APP_COGNITO_DOMAIN,
      scope: ['email', 'profile', 'openid'],
      redirectSignIn: process.env.REACT_APP_SIGNIN_REDIRECT,
      redirectSignOut: process.env.REACT_APP_SIGNOUT_REDIRECT,
      responseType: 'code',
    },
    mandatorySignIn: true,
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
  },
  Analytics: {
    disabled: true,
  },
};
