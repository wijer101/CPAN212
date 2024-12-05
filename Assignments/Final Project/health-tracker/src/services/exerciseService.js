import axios from 'axios';

const API_URL = 'http://localhost:5000/api/exercise'; // Backend endpoint

// Add a new exercise log
export const addExerciseLog = async (exercise, token) => {
    const response = await axios.post(API_URL, exercise, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Get all exercise logs
export const getExerciseLogs = async (token) => {
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Clear all exercise logs
export const clearExerciseLogs = async (token) => {
    const response = await axios.delete(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
