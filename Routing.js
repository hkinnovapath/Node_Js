const http=require('http')

const server=http.createServer((req,res)=>{

//     // console.log(req.url);
    if(req.url === '/'){
        
        res.end('Home server');
    }
    else if(req.url === '/user'){
        res.end('from user');
    }
    else if(req.url === '/about'){
        res.end('from about');
    }
    else{
        res.end('ERROR:404');
    }
})

server.listen(8000,()=>{
    console.log('server running at port 8000');                                                     
})