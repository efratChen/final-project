import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
const LogIn = () => {
// create user obj:
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const base_url = 'http://localhost:5000/user/login';
    const handleFormSubmit = () => {
        const user = {
            'firstName':firstName,
            'lastName':lastName,
            'email':email,
            'pass':pass,
        }
       axios.post(base_url,user)
       .then(res=>console.log(res))
       .catch(err=>console.log(err))
    }
    const handleFName = (event) => {
        setFirstName(event.target.value);
    }
    const handleLName = (event) => {
        setLastName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePass = (event) => {
        setPass(event.target.value);
    }
    return (

        <Form onSubmit={handleFormSubmit}>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={handleFName} />'
                <p>{firstName}</p>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={handleLName} />
                <p>{lastName}</p>
            </Form.Field>
       
            <Form.Field>
                <label>email</label>
                <input placeholder='Email' onChange={handleEmail} />'
                <p>{email}</p>
            </Form.Field>
            <Form.Field>
                <label>password</label>
                <input placeholder='Password' onChange={handlePass} />'
                <p>{pass}</p>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit' >Submit</Button>
        </Form>
    );
}

export default LogIn;
