import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    // Simple check for demonstration purposes
    if (username && password) {
      // Prepare the data to be sent to the server
      const loginData = {
        username,
        password,
      };

      // Make a POST request to the login endpoint
      axios.post('http://localhost:3001/users', loginData)
        .then(response => {
          console.log('Login successful:', response.data);
          setLoggedIn(true);
        })
        .catch(error => {
          console.error('Error logging in:', error);
          setLoginError('Invalid username or password');
        });
    }
  };

  return (
    <div style={styles.container}>
      {!loggedIn ? (
        <div style={styles.loginContainer}>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>
      ) : (
        <div style={styles.welcomeContainer}>
          <h1>Welcome, {username}!</h1>
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
  loginContainer: {
    textAlign: 'center',
    padding: '20px',
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

export default Login;
