import React, { useState, useEffect } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/Ives-Gomes/repos');
    const data = await response.json();

    setRepositories(data);
  }, []);

  return (
    <div>
      <ul>
        {repositories.map(repo => (
        <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>ADD</button>
    </div>  
  );
}
