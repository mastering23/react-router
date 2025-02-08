import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import BlueComponent from './components/Blue';
import RedComponent from './components/Red';
import FooterComponent from './components/Footer';
import HomeComponent from './components/home';
import UserList from './components/Listuser';
import Login from './components/Login'; 

const App = () => {
  const [currentUser, setCurrentUser] = useState(null); 
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          {currentUser ? (
            <>
              <Link to="/users">Users</Link>
              <span>Welcome, {currentUser.name}</span>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/blue" element={<BlueComponent />} />
            <Route path="/red" element={<RedComponent />} />
            <Route path="/users" element={<UserList currentUser={currentUser} />} />
            <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} /> 
          </Routes>
        </div>
      </div>

      <FooterComponent />
    </>
  );
}

export default App;
