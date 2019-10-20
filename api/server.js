const express = require("express");
const helmet = require("helmet");
const cors = require('cors');

//Initializing Server
const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());


//Api Test
server.get('/', (req, res) => {
	res.json({ api: 'my boy is alive' });
});

module.exports = server;