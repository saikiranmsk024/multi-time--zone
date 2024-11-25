import React, { useState } from 'react';
import axios from 'axios';

const timezones = [
  'America/New_York',
  'America/Los_Angeles',
  'Europe/London',
  'Asia/Tokyo',
  'Australia/Sydney'
];

export default function SaveTimezone() {
  const [username, setUsername] = useState('');
  const [selectedTimezone, setSelectedTimezone] = useState(timezones[0]); // Default timezone
  const [message, setMessage] = useState('');

  const handleSaveTimezone = async () => {
    try {
      // Send the selected timezone to your backend
      const response = await axios.post('http://localhost:5000/users', {
        name: username,
        timezone: selectedTimezone,
      });
      setMessage(`Success: ${response.data.message}`);
    } catch (error) {
      console.error(error);
      setMessage(`Error: ${error.response?.data?.error || 'Failed to save timezone'}`);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">Save Your Timezone</h1>

      {/* Input for Username */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Enter Your Name:</label>
        <input
          type="text"
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="John Doe"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {/* Dropdown for Selecting Timezone */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Select Your Timezone:</label>
        <select
          className="border border-gray-300 rounded p-2 w-full"
          value={selectedTimezone}
          onChange={(e) => setSelectedTimezone(e.target.value)}
        >
          {timezones.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSaveTimezone}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Timezone
      </button>

      {/* Message */}
      {message && <p className="mt-4 text-sm font-medium">{message}</p>}
    </div>
  );
}
