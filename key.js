

const express = require('express');
const BoxSDK = require('box-node-sdk');

// Initialize Express app
const app = express();
const port = 3000;

// Initialize Box SDK with client ID and client secret
const sdk = new BoxSDK({
  clientID: 'nflhrcs4n3fu21h3nvfitsel3t1plhuj',
  clientSecret: '3iXkYOzDjip5vz4mFWijAAUawK4VYw7k'
});

// Create client instance
const client = sdk.getBasicClient('fOgRySYyGwDRWiOqgJYnFJeR0esbB99e');

// Example: Route to list items in a folder
app.get('/listItems', (req, res) => {
  const folderId = '248679565247'; // Replace with your folder ID

  client.folders.getItems(folderId, null, (err, data) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).send('Error fetching folder contents');
      return;
    }
    console.log(data)
    res.json(data);
  });
});

app.get('/', (req, res) => {
  console.log('Serving index.html');
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
