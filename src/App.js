import React, { useState, useEffect } from 'react';
import'./styles/index.css'; 

export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [count, setCount] = useState(0);
  const [background, setBackground] = useState('#fff')

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/Ives-Gomes/repos');
    const data = await response.json();

    setRepositories(data);
  }, []);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  function handleAdd() {
    setCount(count + 1)

    if(background === '#fff') {
      setBackground('blue')
    } else {
      setBackground('#fff')
    } 
    
  }

  return (
    <div style={{backgroundColor: background}}>
      <ul>
        {repositories.map(repo => (
        <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

        <h1>{count}</h1>
        <button onClick={() => handleAdd()}>ADD</button>
    </div>  
  );
}
