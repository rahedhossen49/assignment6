//1.It should use the http module to create an HTTP server.


/*
var http= require('http');


var server = http.createServer(function (req,res){

    if(req.url=='/'){


        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("this is http createserver");
        res.end()
    }
})

server.listen(8980);
console.log("server running");

*/





//2.It should listen on port 3000.


/*
var http = require('http');


var server = http.createServer(function (req,res){

    res.writeHead(200,{"Content-Type":"tex/html"});
    res.end('this is your server response');
})

server.listen(3000);
console.log("Server Running")
*/





//3.It should log a message to the console when it starts listening on port 3000.

/*
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello world ');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
*/






//4.If you request this url “/” then the response is  “This is Home Page  ”..


/*

var http = require('http');


var server = http.createServer(function (req,res){


    //4.If you request this url “/” then the response is  “This is Home Page”.


    if(req.url=='/'){

        res.writeHead(200,{"Content-Type":'text/html'})
        res.write("<h2> This Is Home Page </h2>");
        res.end()

    }


// 5 If you request this url “/about” then the response is  “This is About Page”.


    if(req.url=='/about'){

        res.writeHead(200,{"Content-Type":'text/html'})
        res.write("<h2> This Is About Page </h2>");
        res.end()

    }



// 6 .If you request this url “/contact” then the response  is “This is Contact Page”.


    if(req.url=='/contact'){

        res.writeHead(200,{"Content-Type":'text/html'})
        res.write("<h2> This Is Contact Page </h2>");
        res.end()

    }


})

server.listen(8080);
console.log("Server Running");
*/



//7.If you request this url “/file-write” then fs.writeFile() method will create a file
// “demo.txt” and write the text “hello world” in this file.

/*
var  http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    if (req.url === '/file-write') {
        fs.writeFile('demo.txt', "hello world",(err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('Error writing file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('File written successfully');
            }
        });
    } 
});


server.listen(8090)
console.log("Server Running");

*/



//8.And of course you need to end the server response using res.end()

/*

var http = require('http');


var server = http.createServer(function (req,res){

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("Hello World")
    res.end()
})


server.listen(8000);
console.log("Server Success");


 */