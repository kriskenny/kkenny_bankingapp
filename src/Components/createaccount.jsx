import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"

export const UserContext = React.createContext({
  users: [],
  addUser: () => {},
});

export default function CreateAccount(props){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  
  const formRef = React.useRef();
  const [users, setUsers] = useState([]);
  const [tableData, setTableData] = useState([]);
  const balance = 100;
  const [success, setSuccess] = useState(false);

  console.log(status);
  
  const updateTableData = () => {
    const newData = [...tableData, { name, email, password }];
    setTableData(newData);
    setName('');
    setEmail('');
    setPassword('');
  };

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(event){

    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.addUser({name,email,password,balance:100});
    setUsers([...users, {name, email, password, balance: 100}]);
    setName("");
    setEmail("");
    setPassword("");
    setShow(false);
    const newTableData = { name, email, password };
    updateTableData(newTableData);
}

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    if (formRef.current) {
      formRef.current.reset();
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    // Name validation
    if (!name) {
      alert('Please enter your name.');
      return;
    }
    // Email validation
    if (!email) {
      alert('Please enter your email.');
      return;
    }
    // Password validation
    if (password.length < 8) {
      alert('Password should be at least 8 characters long.');
      return;
    };
    localStorage.setItem(name, JSON.stringify({name, email, password, balance}));
    localStorage.setItem("currentUser", name);
    setSuccess(true);
    // form validation passed, handle form submission
    handleCreate();
  }

  return (
  <div className="position-absolute top-50 start-50 translate-middle">
    <Card style={{ width: '24rem', margin: 'auto', marginTop: '2rem', color: 'white', 
    boxShadow: '0 5px 10px rgba(0,0,0,.2)', padding: '1rem', backgroundColor: "#696969", border: '1px solid black'}}>
  <Card.Header className="text-center" style={{ backgroundColor: 'blueviolet', color: 'white', 
  fontSize: '1.5rem' }}>Create Account</Card.Header>
  <Card.Body>
    <form ref={formRef} onSubmit={handleSubmit}>
          Name<br/>
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={props.name} 
          onChange={e => setName(e.currentTarget.value)} /><br/>
          Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={props.email} 
          onChange={e => setEmail(e.currentTarget.value)}/><br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" 
          value={props.password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-dark mx-auto d-block" bg="darkblue" text="white" 
          >Create Account</button>
          </form>
          {show ? null : (
            <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>

        </>
      )}
    </Card.Body>
  </Card>
</div>
         );
       };

       export const ctx = { users: [] };
            