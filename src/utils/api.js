import axios from 'axios';

const API_BASE_URL = "https://localhost:44316/api";

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Account/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    return response; // Return the full response object
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Account/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const checkEmailExists = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/GoogleAuth/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to check email");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const googleAuth = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/GoogleAuth/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Google authentication failed");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const addMember = async (memberData) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No authorization token found');
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/Member/addMember`, // Replace with your actual endpoint
      memberData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    // Enhance error handling
    const message =
      error.response?.data?.message || error.message || 'Failed to add member';
    throw new Error(message);
  }
};

export const getAllMembers = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No authorization token found');
  }

  try {
    const response = await axios.get(
      `${API_BASE_URL}/Member/getallmembers`, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || 'Failed to fetch members';
    throw new Error(message);
  }
};
