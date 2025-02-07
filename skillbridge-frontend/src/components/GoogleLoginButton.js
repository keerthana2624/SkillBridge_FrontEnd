import React from 'react';
import { GoogleLogin } from 'react-oauth/google';
function GoogleLoginButton({ onSuccess, onError }) {
    return (
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
      />
    );
  }
  
  export default GoogleLoginButton;