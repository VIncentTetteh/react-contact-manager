import React,{useState,useEffect} from 'react';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import './App.css';
import {uuid} from "uuidv4";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState([]);
  const addContactHandler = (contact)=>{
    setContacts([...contacts,{id:uuid(),...contact}]);
    console.log(contacts);
  }

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact) =>{
        return contact.id !== id;
    });
    setContacts(newContactList);
  }
  useEffect(() =>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts)
  },[]);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts]);
  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactid={removeContactHandler}/>
    </div>
  );
}

export default App;
