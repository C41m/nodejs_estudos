const UserControllers = require('./controllers/UserControllers')

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: UserControllers.listUsers
    },
]