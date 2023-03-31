import React, { useState, useEffect } from 'react';

function NamesComponent() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/names')
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  return (
    <div>
      <h1>List of Names</h1>
      <ul>
        {names.map((name) => (
          <li key={name.id}>{name.firstName} {name.lastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default NamesComponent;
