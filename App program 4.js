import React, { useState, useEffect } from 'react';

function NameList() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/names')
      .then(response => response.json())
      .then(data => setNames(data));
  }, []);

  return (
    <div>
      <h2>List of Names:</h2>
      <ul>
        {names.map(name => <li key={name.id}>{name.name}</li>)}
      </ul>
    </div>
  );
}

export default NameList;
