import React, { useState } from 'react';

function NameForm({ onNameSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onNameSubmit(name);
    setName('');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

function NameList({ names }) {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

function NamesComponent() {
  const [names, setNames] = useState([]);

  const handleNameSubmit = (name) => {
    setNames([...names, name]);
  };

  return (
    <div>
      <NameForm onNameSubmit={handleNameSubmit} />
      <NameList names={names} />
    </div>
  );
}

export default NamesComponent;








