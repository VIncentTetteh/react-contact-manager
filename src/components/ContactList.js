import React from 'react';
import ContactCard from './ContactCard'

const ContactList = (props) =>{
    console.log(props)
    const deleteContactHandler = (id) =>{
        props.getContactid(id)
    };
    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard 
            contact={contact} 
            clickHandler= {deleteContactHandler} 
            key={contact.id}/>
        );

    });
    return(
        <div className="ui ">
            contact
            {renderContactList}
        </div>
    );
}
export default ContactList