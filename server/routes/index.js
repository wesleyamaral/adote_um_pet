const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('Api adote um pet!');
});

module.exports = router;
