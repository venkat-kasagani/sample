var express = require('express')
var app = express()

app.get('/hello', (req, res) => {
	const firstName = req.query.firstName
	const lastName = req.query.lastName
	res.send(`Hello ${firstName} ${lastName}`)
})

var server = app.listen(8080, function () {})