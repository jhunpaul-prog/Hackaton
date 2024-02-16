import React from 'react';
import './css/login.css';

function App() {
  return (
    <div className="container">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="email">
            <label htmlFor="Email">Username:</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="Password">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
          <p>You Have Already Account?</p>
          
        </form>
      </div>
    </div>
  );
}

export default App;
