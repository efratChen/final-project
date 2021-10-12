import React from 'react'
import SignUp from './SignUp';
import { Link, Route } from 'react-router-dom';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm2 = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
      {/* TODO put img icon here */}
        {/* <Image src='' />  */}
        Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='user name' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? 
        {/* ?TODO go to  SignUp} */}
        <a href='/SignUp'>Sign Up</a>
        {/* <Route path="/login/SignUp">  */}
                 <SignUp /> 
            {/* </Route> */}
      </Message>
    </Grid.Column>
  </Grid>
)
export default LoginForm2