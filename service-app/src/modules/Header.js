
import React, {useEffect} from 'react';
import { Navbar, Container} from 'react-bootstrap';
import { Link  } from "react-router-dom";
import { Logo } from './common';

function Header(props) {

  useEffect(() => {
  }, []);

  return (
    <Container className="bg-primary" fluid={true}>
      <Container>
        <Navbar expand="lg" className="p-1" >
            <Navbar.Brand as={Link} to="/" className="menu_color"><Logo/></Navbar.Brand>
            <Navbar.Brand as={Link} to="/auth" className="text-left menu-color">
                Service
            </Navbar.Brand>
        </Navbar>
      </Container>
    </Container>
  );
}

export default Header;
