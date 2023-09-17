import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/Homepage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Login />} /> {/* Use element prop */}
          <Route path="/register" element={<Register />} /> {/* Use element prop */}
          <Route path="/homepage" element={<HomePage />} /> {/* Use element prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
