import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <div>
        <Login />
      </div>
    </Router>
  );
}

export default App;