import { checkEmailExists, googleAuth } from './api';

// Load the Google API client library
const loadGoogleScript = () => {
  return new Promise((resolve, reject) => {
    if (document.querySelector('script[src*="accounts.google.com/gsi/client"]')) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

export const initGoogleAuth = async () => {
  try {
    await loadGoogleScript();
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: (response) => window.handleGoogleSignIn?.(response)
    });
  } catch (error) {
    console.error('Failed to initialize Google Auth:', error);
    throw new Error('Failed to initialize Google Sign-In');
  }
};

export const handleGoogleResponse = async (response) => {
  try {
    if (!response?.credential) {
      throw new Error('Invalid Google response');
    }

    // Decode the JWT token to get user info
    const tokenData = JSON.parse(atob(response.credential.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);

    if (tokenData.exp < currentTime) {
      throw new Error('Google token has expired');
    }

    // Extract user data from token
    const { email, name, picture, given_name, family_name } = tokenData;

    // Check if email exists
    try {
      const { exists } = await checkEmailExists(email);
      
      // Prepare user data
      const userData = {
        credential: response.credential,
        email,
        firstName: given_name || name.split(' ')[0],
        lastName: family_name || name.split(' ').slice(1).join(' '),
        picture,
        isGoogleSignIn: true
      };

      // Call appropriate endpoint based on email existence
      const authResponse = await googleAuth(userData);

      if (!authResponse?.token) {
        throw new Error('Invalid server response - no token received');
      }

      return {
        success: true,
        token: authResponse.token,
        user: authResponse.user,
        isNewUser: !exists
      };
    } catch (error) {
      console.error('Authentication Error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Google Auth Error:', error);
    return {
      success: false,
      error: error.message || 'Authentication failed'
    };
  }
};

export const renderGoogleButton = (elementId, theme = 'outline', size = 'large') => {
  try {
    window.google.accounts.id.renderButton(
      document.getElementById(elementId),
      {
        theme,
        size,
        type: 'standard',
        shape: 'rectangular',
        text: 'continue_with',
        logo_alignment: 'left'
      }
    );
  } catch (error) {
    console.error('Failed to render Google button:', error);
    throw new Error('Failed to render Google Sign-In button');
  }
};
