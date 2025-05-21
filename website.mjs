import http from 'http';
const port = process.env.PORT || 3002;
const server = http.createServer((req, res)=>{
  
    
    res.setHeader('Content-Type', 'text/html')
     if(req.url =="/Home")
     {
        res.statusCode = 200;
            res.end("<h1> Home </h1> <p> Hey this is home</p>")
    
     }

     else if(req.url =="/About")
     {
        res.statusCode = 200;
            res.end("<h1> About </h1> <p> Hey this is about</p>")
    
     }
     else {
        // res.haseeb();
        res.statusCode = 404;
        res.end("Sorry, Server not Found")
     }
})

server.listen(port , ()=>{
    console.log(`Server is listening on Port ${port} `);
});
