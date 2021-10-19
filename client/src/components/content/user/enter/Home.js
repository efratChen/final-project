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
  import logo from '../../../content/logo.png'
const Home = () => {
    return (  
    <>
       <Container text style={{ marginTop: '7em' }}>
      <div class="ui items">
        <div class="item">  <a class="ui fluid image">   
           <Image src={logo} />
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
           <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
    </Container>
    </>
    );
}
 
export default Home;