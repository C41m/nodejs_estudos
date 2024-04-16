const http = require('http')

const routes = require('./routes')

const listUsers = require('./controllers/UserControllers')
const server = http.createServer((request, response) => {
    console.log(`Requests method: ${request.method} | Endpoint: ${request.url}`)

    const route = routes.find((routeObj) => (
        routeObj.endpoint === request.url && routeObj.method === request.method
    ))

    if (route) {
        route.handler(request, response)
    } else { 
        response.writeHead(404, { 'Content-Type': 'text/html' })
        response.end(`Cannot ${request.method}: ${request.url}`)
    }
})

server.listen(3000, () => console.log('Server Started at http://localhost:3000'))