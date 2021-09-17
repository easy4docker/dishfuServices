import React , { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function Body(props) {
  useEffect(() => {
  }, []);

  return (
    <Container fluid={true} className="m-0 p-0">
       body
    </Container>
   
  );
}

export default Body;
