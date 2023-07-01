const express = require('express');
// const cors = require('cors');
const app = express();

// app.use(cors());

app.get('/api', (req, res) => {
	res.json({ users: ['Ash', 'Joe', 'Bob'] });
	console.log('ding');
});

app.listen(3001, () => {
	console.log('Express server listening on port 3001');
});
