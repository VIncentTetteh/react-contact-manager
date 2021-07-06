import React from 'react';

class AddContact extends React.Component{
    state = {
        name:"",
        email:"",
    };
    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("fields cant be empty");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
    }
    render(){
        return(
            <div className="ui main">
                
                <h2 style={{marginTop:"80px",textAlign:"center"}}>Add Contact</h2>
                <form className="ui form" onSubmit={this.add} style={{width:"400px", border:"solid 1px gray", padding:"25px",marginLeft:"auto",marginRight:"auto"}} >
                        <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value = {this.state.name}
                        onChange = {(e) => this.setState({name:e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="email" 
                        name="name" 
                        placeholder="Email"
                        value = {this.state.email}
                        onChange = {(e) => this.setState({email:e.target.value})}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>

            </div>
        );
    }
}
export default AddContact;