import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    // Simple check for demonstration purposes
    if (username && email && password && dob && phoneNumber) {
      // Prepare the data to be sent to the server
      const userData = {
        username,
        email,
        password,
        dob,
        phoneNumber,
      };

      // Make a POST request to store user data in db.json
      axios.post('http://localhost:3001/users', userData)
        .then(response => {
          console.log('Registration successful:', response.data);
          setRegistered(true);
        })
        .catch(error => {
          console.error('Error registering:', error);
        });
    }
  };

  return (
    <div style={styles.container}>
      {!registered ? (
        <div style={styles.registerContainer}>
          <h1>Register</h1>
          <input
            type="text"
            placeholder="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            style={styles.input}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          
          <button onClick={handleRegister} style={styles.button}>
            Register
          </button>
        </div>
      ) : (
        <div style={styles.welcomeContainer}>
          <h1>Registration Successful, {username}!</h1>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  registerContainer: {
    textAlign: 'center',
    padding: '10px',  // Reduced padding
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '100%',
    margin: '10px 0',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  welcomeContainer: {
    textAlign: 'center',
  },
};

export default Register;