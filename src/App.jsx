import { useState } from 'react';
import './App.css';
import data from './contacts.json';

function App() {
  // const [oscar, setOscar] = useState(false);
  const [contacts, setContacts] = useState(data.slice(0, 5));

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const addRandomContacts = () => {
    const randomIndex = getRandomInt(5, data.length);
    console.log(randomIndex);
    const randomContact = data[randomIndex];
    setContacts([...contacts, randomContact]);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick={addRandomContacts}>Add a contact</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} width="50px" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar}</td>
                <td>{contact.wonEmmy}</td>
                <td>{contact.wonOscar ? <h1>🏆</h1> : ''}</td>
                <td>{contact.wonEmmy ? <h1>🏆</h1> : ''}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
