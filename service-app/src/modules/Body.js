import React , { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import  { MobileScanner }  from './mobileComps/';

function Body(props) {
  useEffect(() => {
  }, []);
  return (<Container fluid={true} className="m-1 p-1">
      <MobileScanner/>
    </Container>
  );
}

export default Body;
