
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Header() {
 const location = useLocation(); 
  return (
    <>
    {location.pathname !== "/login" && (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">QUẢN LÝ KHÁCH SẠN</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/don-hang">Đơn hàng</Nav.Link>
                <Nav.Link as={Link} to="/gio-hang">Giỏ hàng</Nav.Link>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                
                </Nav>
            </Container>
            </Navbar>
        </>
    )};
    </>
  );
}
