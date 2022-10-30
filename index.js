const path = require('path')
const fs = require('fs')
const http = require('http')

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        let filepath = path.join(__dirname, 'Public', 'home.html')
        fs.readFile(filepath, 'utf8', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    }

     if(request.url === '/about.html'){
        let filepath = path.join(__dirname, 'Public', 'about.html')
        fs.readFile(filepath, 'utf8', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    }

     if(request.url === '/contact.html'){
        let filepath = path.join(__dirname, 'Public', 'contact.html')
        fs.readFile(filepath, 'utf8', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    }

})

const port = 3000

server.listen(port, () => {
    console.log('server is running on port ${port}') 
})