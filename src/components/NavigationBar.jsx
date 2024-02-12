import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png';
import Lock from '../assets/lock.png';
import Help from '../assets/help.png'; 

export default function NavigationBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#pricing"><span><img className="icon" src={Lock} alt="lock" /></span>Checkout</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='help' href="#deets">
             <img className='icon' src={Help} alt="help" />  Help
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="topbar bg-black py-2">
      <Container className='text-center'>
        <p className='text-white mb-0'>Holding your tickets for 30:00</p>
      </Container>
    </div>
    </>
  );
}