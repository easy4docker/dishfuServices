import React , { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BarcodeScannerComponent from "./mobileComps/BarcodeScannerComponent.js";

function Body(props) {
  const [ data, setData ] = React.useState('--');

  useEffect(() => {
  }, []);

  return (
    <Container fluid={true} className="m-0 p-0">
      <BarcodeScannerComponent
        width={'100%'}
        height={'100%'}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
          else setData('Not Found')
        }}
      />
      <p>{data}</p>
    </Container>
   
  );
}

export default Body;
