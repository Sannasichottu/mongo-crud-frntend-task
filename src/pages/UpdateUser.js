import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function UpdateUser({id}) {
  const navigate = useNavigate();
  const[username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const updateHandler = (id) => {
    Axios.post(`http://localhost:3001/users/update/${id}`,{username:username, password:password})
    .then(() => alert("User Updated"))
    .catch(err => console.log(err))

    setUsername("");
    setPassword("");
    navigate('/')
  }
  return (
    <Container>
    <Form className='pt-5' onSubmit={(e) => {e.preventDefault(); updateHandler(id); }}>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>User Name</Form.Label>
     <Form.Control type="email" placeholder="User Name" onChange={(e) =>setUsername(e.target.value)} value={username}/>

   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" placeholder="Password" onChange={(e) =>setPassword(e.target.value)} value={password} />
   </Form.Group>

   <Button variant="primary" type="submit">
     Submit
   </Button>
 </Form>
 </Container>
  )
}

export default UpdateUser