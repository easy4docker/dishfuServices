import React , { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import BarcodeScannerComponent from "./BarcodeScannerComponent.js";

function MobileScanner(props) {
  const [ data, setData ] = React.useState('');
  const [ scanStatus, setScanStatus ] = React.useState(false);
  useEffect(() => {
  }, []);

  useEffect(() => {
    if (data) {
      statusSwitch();
    }
  }, [data]);

  const usedata = () =>{
    alert(data);
  };

  const statusSwitch = ()=>{
    setScanStatus(scanStatus ? false : true);
  }
  return (<Container fluid={true} className="p-1 text-center">
      <Container fluid={true} className="p-1">
      {!scanStatus ? '' : (<BarcodeScannerComponent
        width={'400'}
        height={'400'}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
          else setData('')
        }}
      />)}
      </Container>
      <p>{data}</p>
      {!scanStatus ? (<Button onClick={statusSwitch} className="m-1">Start Scan</Button>) :
      (<Button onClick={statusSwitch} className="m-1">Stop Scan</Button>)}

      <Button onClick={usedata} className="m-1">Use Data</Button>
      <Button onClick={()=> { setData('') }} className="m-1">Skip Data</Button>
    </Container>
   
  );
}

export { MobileScanner };
