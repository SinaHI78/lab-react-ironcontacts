import { useState } from 'react';
import './App.css';
import data from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(data.slice(0, 5));

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const sortByName = () => {
    const newContacts = [...contacts];
    setContacts(
      newContacts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    );
  };

  const sortByPopularity = () => {
    const newContacts = [...contacts];
    setContacts(
      newContacts.sort((a, b) => {
        return a.popularity - b.popularity;
      })
    );
  };

  const deleteContact = (id) => {
    const remainingContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(remainingContacts);
  };

  const addRandomContacts = () => {
    const randomIndex = getRandomInt(5, data.length);
    const randomContact = data[randomIndex];
    setContacts([...contacts, randomContact]);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick={addRandomContacts}>Add a contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} width="50px" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <h1>🏆</h1> : ''}</td>
                <td>{contact.wonEmmy ? <h1>🌟</h1> : ''}</td>
                <td>
                  <button onClick={() => deleteContact(contact.id)}>
                    Delete contact
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
