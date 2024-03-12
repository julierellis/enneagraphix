//set up an express http server on the local machine, on port 8000.
const express = require('express');
const host = 'localhost';
const port = 8000;
const app = express();

app.get('/',(req,res)=>{
	console.log(req.method);
	// res.set('Content-Type', 'application/json')
	res.json([{name: "Julie", age: 66}, {name: "Raya", age: 12}]);
	// res.end();
})

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
