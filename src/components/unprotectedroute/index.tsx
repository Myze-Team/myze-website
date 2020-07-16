import React from 'react';
import { Auth } from 'aws-amplify';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const UnProtectedRoute: React.FC<RouteProps> = (props) => {
  const [auth, setAuth] = React.useState<any>();
  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setAuth(user);
      }).catch(() => {
        setAuth(null);
      })
  }, []);
  if (auth) {
    return <Redirect to='/' />
  } else if (auth === undefined) {
    return <></>
  }
  return <Route {...props} />;
}

export default UnProtectedRoute;