import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header () {
    return(
        <header>
            <Navbar expand="md">
                <Container fluid>
                    <Navbar.Brand href="#home">Voleybol Oyna</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Anasayfa</Nav.Link>
                            <Nav.Link href="#about-us">Hakkımızda</Nav.Link>
                            <Nav.Link href="#find-team">Takım Bul</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    ) 
}

export default Header