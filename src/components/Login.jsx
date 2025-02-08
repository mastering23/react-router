import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from './database';

const Login = ({ setCurrentUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const btnSubmit = (event) => {
    event.preventDefault();

    
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      if (user.role === 'admin') {
        setCurrentUser(user); 
        navigate('/user-list'); 
        alert('Access Granted....')
      } else {
        alert('You are not authorized to access the user list...');
      }
    } else {
      alert('Invalid username or password...');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={btnSubmit}>
        <input
          type="text"
          placeholder="Username:"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password:"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
