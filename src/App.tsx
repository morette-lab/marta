import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/login'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
