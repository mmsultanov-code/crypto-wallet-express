class UserController {
    constructor() {}

    async login(req, res) {
        res.send('login')
    }

    async logout(req, res) {
        res.send('logout')
    }

    async register(req, res) {
        res.send('register')
    }
}

export default new UserController()
