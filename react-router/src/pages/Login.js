import React from 'react';

const Login = ({handleAuthLogin, handleAuthSignOut}) => {
  return <div>
      <h3>Login</h3>

      <button onClick={handleAuthLogin} >Log In</button>
      <button onClick={handleAuthSignOut} >Sign Out</button>
  </div>;
};

export default Login;
