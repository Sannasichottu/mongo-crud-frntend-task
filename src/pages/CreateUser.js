import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const navigate = useNavigate();

  const[username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/users/add',{username:username,password:password})
    .then(() => alert("User Created"))
    .catch(e => console.log(e))
    setUsername("");
    setPassword("");
    navigate("/")
  }

  return (
    <Container>
       <Form className='pt-5' onSubmit={submitHandler}>
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

export default CreateUser