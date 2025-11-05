// import { Link } from "react-router-dom";
import "../css/Navbar.css"

// function NavBar() {
//     return <nav className="navbar">
//         <div className="navbar-brand">
//             <Link to="/">Movie App</Link>
//         </div>
//         <div className="navbar-links">
//             <Link to="/" className="nav-link">Home</Link>
//         </div>
//     </nav>
// }

// export default NavBar

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" >
        <Container id="nav-container">
          <Navbar.Brand href="/" id="nav-main">MovieSearch</Navbar.Brand>
             <Nav className="me-auto"  >
            <Nav.Link href="/" id='nav-name'>Home</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <br />
 </>
  );
}

export default ColorSchemesExample;