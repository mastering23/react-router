import React from 'react';
import users from "./database";

const UserList = () => {
  return (
    
    <div id="users-list">
         <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name} ({user.role})</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Status:</strong> {user.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
