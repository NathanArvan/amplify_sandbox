import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore';
import { Campaign } from './models';
import { listCampaigns } from './graphql/queries'

//Use next two lines only if syncing with the cloud
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);


function App() {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    fetchCampaigns()
  }, [])

  async function fetchCampaigns() {
    try {
      const campaignData = await API.graphql(graphqlOperation(listCampaigns))
      const campaigns = campaignData.data.listCampaigns.items
      setCampaigns(campaigns)
      console.log(campaigns)
    } catch (err) { console.log('error fetching campaigns') }
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
