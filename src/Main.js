import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator  
} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import React from 'react';
import App from './App';
import VisAnsatt from './VisAnsatt';
import {
  MyNavBar,RobTableHead,RobTableRowCollection,AnsattCreateForm, AmpligramCollection, TableBottom
 } from './ui-components';


const Main = () => {
  return (
    

    <Router>
            <Routes>
            <Route path='/' element={[<MyNavBar width={"100%"}/>,<RobTableHead width={"100%"}/>,<RobTableRowCollection width={"100%"}/>,<TableBottom/>]} />      
            <Route path='/oppdaterAnsatt/:id' element={[<MyNavBar width={"100%"}/>,<App/>]} />   
            <Route path='/nyAnsatt' element={[<MyNavBar width={"100%"}/>,<AnsattCreateForm width={"40%"}/>]} />   
            <Route path='/visAnsatt/:id' element={[<MyNavBar width={"100%"}/>,<VisAnsatt width={"40%"}/>]} />   
            <Route path='/ampligram' element={[<MyNavBar width={"100%"}/>,<AmpligramCollection width={"40%"}/>]} />   
       </Routes>
    </Router>
    

  )  
}

export default withAuthenticator(Main);
