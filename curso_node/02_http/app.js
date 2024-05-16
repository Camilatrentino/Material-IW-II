//selecionar o modulo http no node
var http = require('http')

//abrir um servidor
http.createServer(function(req,res){
    res.end('2C /CAMPEAO ')
}).listen(8081)

console.log('Servidor rodando....')