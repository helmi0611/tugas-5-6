import React, { useState } from 'react';
import Person from './components/Person';
import './App.css'

const App = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Helmi Tris Edyan', age: 20 },
    { id: 2, name: 'Pahlevi Edyan', age: 26 },
    { id: 3, name: 'Arifi Edyan', age: 32 }
  ]);

  const [newPersonName, setNewPersonName] = useState('');
  const [newPersonAge, setNewPersonAge] = useState(0);
  const [deletePersonId, setDeletePersonId] = useState(0);

  function tambahDepan() {
    const newPerson = { id: people.length + 1, name: newPersonName, age: newPersonAge };
    setPeople([newPerson, ...people]);
  };

  function tambahBelakang() {
    const newPerson = { id: people.length + 1, name: newPersonName, age: newPersonAge };
    setPeople([...people, newPerson]);
    
  };

  const [editPersonId, setEditPersonId] = useState(null);
  const [editName, setEditName] = useState('');

  const increaseAge = () => {
    setPeople(prevPeople => {
      return prevPeople.map(person => {
        if (person.id === editPersonId) {
          return { ...person, age: person.age + 1 };
        }
        return person;
      });
    });
  };

  const decreaseAge = () => {
    setPeople(prevPeople => {
      return prevPeople.map(person => {
        if (person.id === editPersonId) {
          return { ...person, age: person.age - 1 };
        }
        return person;
      });
    });
  };

  const handleNameChange = e => {
    setEditName(e.target.value);
  };

  const updateName = () => {
    setPeople(prevPeople => {
      return prevPeople.map(person => {
        if (person.id === editPersonId) {
          return { ...person, name: editName };
        }
        return person;
      });
    });
  };
  function hapusDepan() {
    if (people.length > 0) {
      const updatedPeople = [...people];
      updatedPeople.shift();
      setPeople(updatedPeople);
    }
  };

  function hapusBelakang() {
    if (people.length > 0) {
      const updatedPeople = [...people];
      updatedPeople.pop();
      setPeople(updatedPeople);
    }
  };

  function hapusBerdasarkanId() {
    setPeople(people.filter(person => person.id !== deletePersonId));
  };

  function hapusSemua() {
    setPeople([]);
  };

  return (
    <div style={{
      backgroundColor:'aquamarine'
    }}>
      <h2 style={{
        textAlign:'center'
      }}>People</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {people.map(person => (
          <Person key={person.id} id={person.id} name={person.name} age={person.age} />
        ))}
      </div>
      <div style={{
        display:'flex',
        justifyContent:'space-around',
        backgroundColor:'cyan',
        borderRadius:'8px'
      }}>
          <div className='action'>
          <label>Edit</label>
            <input type="number" onChange={e => setEditPersonId(Number(e.target.value))} placeholder="ID"/>
            <input type="text" onChange={handleNameChange} placeholder="Nama" />
            <button onClick={increaseAge}>Perbesar</button>
            <button onClick={decreaseAge}>Perkecil</button>
            <button onClick={updateName}>Update Nama</button>
          </div>
          <div className='action'>
          <label>Tambah</label>
            <input type="text"onChange={(e) => setNewPersonName(e.target.value)}placeholder="Nama"/>
            <input type="number" onChange={(e) => setNewPersonAge(e.target.value)} placeholder="Usia"/>
            <button onClick={tambahDepan}>Tambah Depan</button>
            <button onClick={tambahBelakang}>Tambah Belakang</button>
          </div>
          <div className='action'>
            <label>Hapus Berdasarkan ID</label>
            <div>
                <input type ="number"onChange={e => setDeletePersonId(Number(e.target.value))} placeholder="ID"/>
                <button onClick={hapusBerdasarkanId}>Hapus</button>
            </div>
            <button onClick={hapusDepan}>Hapus Depan</button>
            <button onClick={hapusBelakang}>Hapus Belakang</button>
            <button onClick={hapusSemua}>Hapus Semua</button>
          </div>
      </div>
    </div>
  );
};

export default App;
