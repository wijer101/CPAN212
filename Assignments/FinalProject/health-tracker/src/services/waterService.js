import axios from 'axios';

const API_URL = 'http://localhost:5000/api/water'; // Backend endpoint

// Add a new water intake
export const addWaterIntake = async (amount, token) => {
    const response = await axios.post(
        API_URL,
        { amount },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};

// Get all water intake records
export const getWaterIntake = async (token) => {
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Clear all water intake records
export const clearWaterIntake = async (token) => {
    const response = await axios.delete(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
