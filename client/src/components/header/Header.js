import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import About from '../content/About'
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
import logo from './logo.png'
import Category from '../content/Category';

const FixedMenuLayout = () => (
  <div>
    <Router>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini'  src={logo}  style={{ marginRight: '1.5em' }} />
            <div>new</div>
          TO DO LIST PROJECT
        </Menu.Item>
          <Link to="/">
            <Menu.Item as='a'>Home</Menu.Item>
          </Link>
          <Route exact path="/" component={Header} />
          {/* </Route> */}

          <Link to="/about">
            <Menu.Item as='a'>About</Menu.Item>
          </Link>
          <Route path="/about" component={About}>
            {/* <About /> */}
          </Route>

          <Dropdown item simple text='Categories'>
            <Dropdown.Menu>
              <Category />
              <Dropdown.Item>שבת</Dropdown.Item>
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
    <Container text style={{ marginTop: '7em' }}>
      <div class="ui items">
        <div class="item">  <a class="ui fluid image">      <Image size='mini' src={logo} />
        </a>
          <div class="content">
            <a class="header">Cute Dog</a>
            <div class="description">
              <p>should get
                stuff done.</p>
              <p>Many people also have their own barometers for what makes a cute dog.</p>
            </div>
          </div>
        </div>
      </div>
      <Header as='h1'>Semantic UI React Fixed Template</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for single column layouts.
      </p>
      <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
    </Container>
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
        <Image centered size='mini'  src={logo} />
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