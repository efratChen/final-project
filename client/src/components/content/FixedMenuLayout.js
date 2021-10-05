import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import About from './About'
import Home from './user/enter/Home';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import logo from '../content/logo.png'
import Category from './Category';
const FixedMenuLayout = () => (
  <div>
    <Router>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
            TO DO LIST PROJECT
          </Menu.Item>
          <Link to="/">
            <Menu.Item as='a'>Home</Menu.Item>
          </Link>
          <Route path="/" component={Header} />
          {/* </Route> */}
          <Link to="/about">
            <Menu.Item as='a'>About</Menu.Item>
          </Link>
          <Route path="/about" component={About}>
          </Route>
          <Dropdown item simple text='Categories'>
            <Dropdown.Menu>
              <Dropdown.Item> <Category /> </Dropdown.Item>
              <Dropdown.Item>קניות</Dropdown.Item>
              <Dropdown.Item>משימות</Dropdown.Item>
              <Dropdown.Divider />
              {/* <Dropdown.Header>Header Item</Dropdown.Header> */}
              {/* 1תת רשימה */}
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>חגים</span>
                <Dropdown.Menu>
                  <Dropdown.Item>ראש השנה</Dropdown.Item>
                  <Dropdown.Item>סוכות</Dropdown.Item>
                  <Dropdown.Item>חנוכה</Dropdown.Item>
                  <Dropdown.Item>פורים</Dropdown.Item>
                  <Dropdown.Item>פסח</Dropdown.Item>
                  <Dropdown.Item>שבועות</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              {/* 2תת רשימה */}
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>אירועים</span>
                <Dropdown.Menu>
                  <Dropdown.Item>חתונה</Dropdown.Item>
                  <Dropdown.Item>חינה</Dropdown.Item>
                  <Dropdown.Item>אירוסין</Dropdown.Item>
                  <Dropdown.Item>ברית</Dropdown.Item>
                  <Dropdown.Item>יום הולדת</Dropdown.Item>
                  <Dropdown.Item>בר-מצווה</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              {/* <Dropdown.Item>List Item</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </Router>
    {/* תוכן משתנה - באמצע */}
    <Home />
    {/* FOOTER */}
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src={logo} />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>

  </div>
)

export default FixedMenuLayout