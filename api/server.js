const express = require("express");
const helmet = require("helmet");
const cors = require('cors');
const MembersRouter = require('../Routers/Members')
const authRouter = require('../auth/auth-router');


//Initializing Server
const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);


//Api Test
server.get('/', (req, res) => {
	res.json({ api: 'my boy is alive' });
});

//=========Routers==================//
server.use('/api/members', MembersRouter);
server.use('/api/auth', authRouter);
module.exports = server;