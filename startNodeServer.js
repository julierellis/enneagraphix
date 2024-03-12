//set up a http server on the local machine, on port 8000.
const http = require("http");
const host = 'localhost';
const port = 8000;
const requestListener = function (req, res) {
	// console.log(req);
	// NOTICE THIS WRITES TO THE TERMINAL, not to the browser console!!!
 	// "It prints to stdout with newline."
    res.writeHead(200);
    res.end("WELCOME to our very first nodejs server. Stephanie and I made this start.  Maybe.  I hope");
};	
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
