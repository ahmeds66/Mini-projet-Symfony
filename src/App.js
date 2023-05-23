import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Added for Bootstrap
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavApp from './Navbar';
import Main from './Main';
import AddPost from './addPost';
import Posts from './Posts';

function App() {
  return (
    <div className="App justify-content-center">
      <NavApp />
      <br />
      <Container className='justify-content-md-center'>
      <AddPost />
      <br />
      <Main />
      <Posts />
      </Container>
    </div>
  );
}

export default App;
