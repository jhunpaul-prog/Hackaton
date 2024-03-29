import React, { useState } from 'react';
import './css/style.css'; // Importing the CSS file for LandingPage

const LandingPage = () => {
  // State to manage the input value
  const [search, setSearch] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic, such as sending data to a server
    console.log('Form submitted with email:', email);
  };

  return (
    <div className="container">
      <h1>Welcome to our Study Concept LearnEase </h1>
      <p>Sign up to receive updates and exclusive content.</p>
      <form onSubmit={handleSubmit}>
        <input
          type=""
          placeholder="Search here..."  
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default LandingPage;
