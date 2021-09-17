import React , { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import  Header  from './modules/Header';
import  Footer  from './modules/Footer';
import  Body from './modules/Body';
import './App.css';
// import { useMediaQuery } from 'react-responsive';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {

  useEffect(() => {
  }, []);
  // localStorage.clear();
  console.log('called localStorage.clear()');

    return (
      <Router className="p-0 m-0">
        <Switch>
          <Route>
            <Header/>
            <Body/>
            <Footer/>
          </Route>
        </Switch>
      </Router>);
}


export default App;