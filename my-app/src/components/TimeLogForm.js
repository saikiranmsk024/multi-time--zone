import React, { useState, useEffect } from 'react';
import { fetchTimeZones } from '../services/api';
import styles from './TimeLogForm.module.css';

const TimeLogForm = ({ onAddLog, isOffline }) => {
  const [log, setLog] = useState({ task: '', startTime: '', endTime: '', timezone: 'UTC' });
  const [timezones, setTimezones] = useState([]);

  useEffect(() => {
    const loadTimeZones = async () => {
      try {
        const zones = await fetchTimeZones();
        setTimezones(zones);
      } catch (error) {
        console.error('Error fetching time zones:', error);
      }
    };

    loadTimeZones();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLog(log);
    setLog({ task: '', startTime: '', endTime: '', timezone: 'UTC' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        placeholder="Task Name"
        value={log.task}
        onChange={(e) => setLog({ ...log, task: e.target.value })}
        className={styles.inputField}
        required
      />
      <input
        type="datetime-local"
        value={log.startTime}
        onChange={(e) => setLog({ ...log, startTime: e.target.value })}
        className={styles.inputField}
        required
      />
      <input
        type="datetime-local"
        value={log.endTime}
        onChange={(e) => setLog({ ...log, endTime: e.target.value })}
        className={styles.inputField}
        required
      />
      <select
        value={log.timezone}
        onChange={(e) => setLog({ ...log, timezone: e.target.value })}
        className={styles.inputField}
      >
        {timezones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={isOffline}
        className={styles.submitButton}
      >
        {isOffline ? 'Offline - Saved Locally' : 'Add Log'}
      </button>
    </form>
  );
};

export default TimeLogForm;
