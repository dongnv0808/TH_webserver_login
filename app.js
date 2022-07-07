const http = require('http');

let server = http.createServer((req, res) => {
    let txt = "";
    if(req.url == "/login"){
        txt = "login succes";
    }else{
        txt = "login fail";
    }
    res.end(txt);
})
server.listen(8001, 'localhost');