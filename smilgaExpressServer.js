const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
	res.set('Content-Type', 'application/json')
	console.log(res.headers);
  	res.json(products)
})

app.listen(8000, () => {
  console.log('Server is listening on port 8000....')
})