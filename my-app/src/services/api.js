import axios from 'axios';

// Base URL for the API
const TIME_API_BASE_URL = 'https://www.timeapi.io/api';

// Fetch current time for a specific timezone
export const fetchCurrentTime = async (timezone = 'UTC') => {
  try {
    const response = await axios.get(`${TIME_API_BASE_URL}/Time/current/zone`, {
      params: { timeZone: timezone },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current time:', error.response || error.message);
    throw error;
  }
};

// Fetch available time zones
export const fetchTimeZones = async () => {
  try {
    const response = await axios.get(`${TIME_API_BASE_URL}/TimeZone/Available`);
    return response.data;
  } catch (error) {
    console.error('Error fetching time zones:', error.response || error.message);
    throw error;
  }
};
