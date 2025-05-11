import http from 'http';
const port = process.env.PORT || 3001;
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is Haseeb </h1> <p> Hey today is 10 May 2025. Today Pakistan Destroy India : - )</p>')
})

server.listen(port , ()=>{
    console.log(`Server is listening on Port ${port} `);
});