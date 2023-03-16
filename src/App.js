import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { DataStore, SortDirection } from "aws-amplify";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Auth } from 'aws-amplify';
import {
  AnsattUpdateForm
 } from './ui-components';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import { Ansatt } from "./models";

import React from 'react';


const App = () => {
  const { id } = useParams();
  const [ansatt, setAnsatt] = useState(null);

 
  useEffect(() => {

    console.log(id);
    async function queryAnsatt(id) {
      const ansattFromBackend = await DataStore.query(Ansatt, id);            
      setAnsatt(ansattFromBackend);
      console.log("Ansatt "+ansatt)
    }  

  if (id) {
    queryAnsatt(id);
  }
}, [id]);


  return (
    

    <AnsattUpdateForm ansatt={ansatt}  width={"40%"}/>
    

  )  
}

export default withAuthenticator(App);
