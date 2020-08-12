/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Auth } from 'aws-amplify';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const ProtectedRoute: React.FC<RouteProps> = (props) => {
  const [auth, setAuth] = React.useState<any>();
  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setAuth(user);
      })
      .catch(() => {
        setAuth(null);
      });
  }, []);

  if (auth === null) {
    return <Redirect to="/" />;
  }
  if (auth === undefined) {
    return <></>;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
