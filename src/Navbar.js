import img from './222_white.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavApp() {
  return (
    //the navbar is a component from react-bootstrap the bg is black and the expand is lg and text is white
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="text-white"> <img src={img} alt="logo" width="69.1" height="17.9" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <form class="d-flex">
                <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            //profile icon on the right side
            //The user image in a circle
            <Nav.Link href="#link" className="text-white"><img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar" width='30' height='30'/></Nav.Link>
            <NavDropdown title="Ahmed" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Report a problem</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavApp;