const users = require('../mocks/users')

module.exports = {
    listUsers(request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(JSON.stringify(users))
    }
}