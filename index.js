require('http').createServer((req,res) => res.end('hello ' + req.method + ' ' + req.url)).listen(process.env.PORT)
