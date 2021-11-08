const express = require("express");
const server = express();
const PORT = process.env.PORT || 8080;
server.set("port", PORT);

const blogposts = require("./modules/blogposts.js");

// middleware ---------------------------
server.use(express.static("public"));
server.use(express.json());

//general error handling---------------
server.use(function(err, req, res, next){
	res.status(500).json({
		error: "Something goes wrong with server!",
		descr: err
	}).end();
});


// start server ------------------------
server.listen(server.get("port"), function () {
	console.log("server running", server.get("port"));
});

