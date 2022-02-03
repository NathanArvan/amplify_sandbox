import React, { useEffect } from "react";
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Campaign } from './models';
import Amplify, {  Predicates } from "aws-amplify";
//Use next two lines only if syncing with the cloud
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);



function App() {
  // const models = await DataStore.query(Campaign);
  // console.log("Campaigns", models);
  useEffect(() => {
    const models = DataStore.query(Campaign);
    console.log("Campaigns", models);

    return () => {};
  }, []);
  return (
    
    <div className="App">
      <span>Test</span>
    </div>
  );
}

export default App;
