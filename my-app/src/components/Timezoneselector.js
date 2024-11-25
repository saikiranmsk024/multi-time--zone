import React, { useState } from 'react';
import axios from '../services/api'; // Axios service
import moment from 'moment-timezone';

const TimezoneSelector = ({ onTimezoneSaved }) => {
  const [timezone, setTimezone] = useState('');

  const handleSave = async () => {
    try {
      await axios.post('/users', { name: 'John Doe', timezone }); // Replace 'John Doe' dynamically
      onTimezoneSaved(); // Notify parent component
      alert('Timezone saved successfully!');
    } catch (error) {
      alert('Error: ' + error.response.data.error);
    }
  };

  return (
    <div>
      <h3>Select Your Timezone</h3>
      <select onChange={(e) => setTimezone(e.target.value)} value={timezone}>
        {moment.tz.names().map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
      <button onClick={handleSave}>Save Timezone</button>
    </div>
  );
};

export default TimezoneSelector;
