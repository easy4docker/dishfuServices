import React , { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BarcodeScannerComponent from "./mobileComps/BarcodeScannerComponent.js";

function Body(props) {
  const [ data, setData ] = React.useState('Not Found');

  useEffect(() => {
  }, []);

  return (
    <Container fluid={true} className="m-0 p-0">
      <span>yyy
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
          else setData('Not Found')
        }}
      />
      <p>{data}</p>
    </span>
    </Container>
   
  );
}

export default Body;
