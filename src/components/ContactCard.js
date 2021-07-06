import React from 'react';
import user from "../images/user-picture.png";

const ContactCard = (props) =>{
    const {id,name,email} = props.contact;
    return(
    
        <table class="ui celled table">
            <thead>
                <tr><th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr></thead>
            <tbody>
                <tr>
                <td data-label="Photo"><img className="ui avatar image" src={user} alt="avater" /></td>
                <td data-label="Name">
                    <div className="content">
                        <div className="header">{name}</div>
                    </div>
                </td>
                <td data-label="Email"><div>{email}</div></td>
                <td data-label="Action">
                    <i 
                        className="trash alternate outline icon" 
                        style={{color:"red", marginTop:"7px", cursor:"pointer"}}
                        onClick={() => props.clickHandler(id)}>
                    </i>
                </td>
                </tr>
            </tbody>
        </table>   
        
    );
}

export default ContactCard;