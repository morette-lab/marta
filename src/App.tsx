import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/Login'
import Home from './screens/Home'
import UserRegistration from './screens/UserRegistration'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-registration" element={<UserRegistration />} />
      </Routes>
    </div>
  );
}

export default App;
