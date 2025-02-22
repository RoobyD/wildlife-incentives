// frontend/pages/index.js (Next.js)
import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState(null);
  const [submittedMessage, setSubmittedMessage] = useState(''); // Store submitted message

  useEffect(() => {
    // Fetch data from the backend API (optional, for initial data)
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSubmittedMessage(message); // Update the displayed message
      setMessage(''); // Clear the input field
      alert(result.message); // Or update the UI with the result

    } catch (error) {
      console.error("Error submitting message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Wildlife Conservation Platform</h1>

      {/* Display data from the backend (optional) */}
      {data && <p>Message from backend: {data.message}</p>}

      {/* Display the most recently submitted message */}
      {submittedMessage && <p>You last submitted: {submittedMessage}</p>}


      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Enter a message:</label><br />
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Corrected typo here
        /><br />
        <button type="submit">Submit</button>
      </form>

       {/* Example of displaying a list (replace with your actual data) */}
        <h2>Example List</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>

       {/* Example of conditional rendering */}
        {data && data.message === "Hello from the backend!" && (
           <p>This message is only shown if the backend says hello!</p>
        )}

    </div>
  );
}