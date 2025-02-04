import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { initGoogleAuth, renderGoogleButton, handleGoogleResponse } from '../../utils/googleAuth';

const GoogleSignInButton = ({ onSuccess, className, isRegisterPage }) => {
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initGoogle = async () => {
      try {
        await initGoogleAuth();
        renderGoogleButton(buttonRef.current.id);

        // Add callback handler to window object
        window.handleGoogleSignIn = async (response) => {
          try {
            if (response.credential) {
              const result = await handleGoogleResponse(response);
              
              if (result.success) {
                // Store the token and user info
                localStorage.setItem('token', result.token);
                localStorage.setItem('user', JSON.stringify(result.user));

                // Handle different scenarios
                if (result.isNewUser) {
                  if (isRegisterPage) {
                    // New user on register page - proceed to dashboard
                    toast.success(' Successfully registered with Google!', {
                      position: "top-right",
                      autoClose: 3000,
                    });
                    navigate('/dashboard');
                  } else {
                    // New user on login page - redirect to register
                    toast.info('Please complete your registration first', {
                      position: "top-right",
                      autoClose: 3000,
                    });
                    navigate('/register');
                  }
                } else {
                  // Existing user - proceed to dashboard
                  toast.success(' Successfully signed in with Google!', {
                    position: "top-right",
                    autoClose: 3000,
                  });
                  navigate('/dashboard');
                }

                // Call success callback if provided
                if (onSuccess) {
                  onSuccess(result);
                }
              } else {
                throw new Error(result.error);
              }
            }
          } catch (error) {
            console.error('Google Sign In Error:', error);
            toast.error(error.message || 'Google Sign-In failed. Please try again.', {
              position: "top-right",
              autoClose: 5000,
            });
          }
        };
      } catch (error) {
        console.error('Google Init Error:', error);
        toast.error('Failed to initialize Google Sign-In', {
          position: "top-right",
          autoClose: 5000,
        });
      }
    };

    initGoogle();

    return () => {
      // Cleanup
      delete window.handleGoogleSignIn;
    };
  }, [navigate, onSuccess, isRegisterPage]);

  return (
    <div 
      ref={buttonRef}
      id="google-signin-button"
      className={className}
    />
  );
};

export default GoogleSignInButton;
