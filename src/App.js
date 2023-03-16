import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  AnsattCreateForm 
 } from './ui-components';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App" >            
        
      <AnsattCreateForm/>                                                 
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
