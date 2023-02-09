import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "../styles/header.css";

export default function YelpNavbar({signOut}){
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'rgb(35, 27, 250)'}}>
            <Navbar.Brand className='justify-content-start' fixed="bottom" style={{color: 'orange', fontWeight: 'bold', marginLeft: '50px'}}>Restaurant</Navbar.Brand>
            <Container >
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <Button className="signout" onClick={signOut} style={{fontWeight:'bold'}}>Sign Out</Button>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}