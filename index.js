// import express from 'express'; // es modules
const express = require('express'); // CommonJS modules

const port = 3000;

const server = express();

server.get('/', (req, res) => {
   res.send('Hello Node 23!');
});

server.listen(port, () => console.log(`\n=== API on port ${port} ===`));