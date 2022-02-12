import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation, Storage } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore';
import { Campaign } from './models';
import { listCampaigns, listTokens } from './graphql/queries'
import { createToken } from './graphql/mutations'
import { Rectangle266 } from './ui-components';

//Use next two lines only if syncing with the cloud
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);


function App() {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    // fetchCampaigns(),
    listTokensWithImages()
  }, [])

  async function fetchCampaigns() {
    try {
      const campaignData = await API.graphql(graphqlOperation(listCampaigns, {items: "Name"}))
      const campaigns = campaignData.data.listCampaigns.items
      setCampaigns(campaigns)
      console.log(campaigns)
    } 
    catch (err) { console.log('error fetching campaigns') }
  }

  async function saveToken() {
    const fileName = "product-image-1";
    await Storage.put(fileName, 'test');
    const token = { name: "Product 1", description: "Black dress", boardId: '1', image: fileName };
    await API.graphql({ query: createToken, variables: { input: token }});
  }

  
  // async function getProductById () {
  //   const product = await API.graphql({ query: getProduct, variables: { id: "12345" }});
  //   const s3Image = await Storage.get(product.data.getProduct.image);
  //   product.data.getProduct.s3Image = s3Image;
  //   console.log('product:', product);
  // }

  async function listTokensWithImages () {
    try {
      const tokenData = await API.graphql({ query: listTokens });
      const tokens = await Promise.all(tokenData.data.listTokens.items.map(async token => {
        const image = await Storage.get(token.image)
        token.s3Image = image
        return token
      }))
      console.log('tokens: ', tokens)
    }
    catch {
      console.log('error fetching tokens')
    }
  }

  return (
    <div className="App">
      {/* <Rectangle266
        onClick={saveToken()}
      /> */}
      <button onClick={() => saveToken()}>Upload</button>
    </div>
  );
}

export default App;
