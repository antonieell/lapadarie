'use strict'

const User = use('App/Models/User')

class LoginController {
	async login({request, response, auth}){
		const {email, password} = request.all()
            if (await auth.attempt(email, password)) {
              let user = await User.findBy('email', email)
              let token = await auth.generate(user)

              Object.assign(user, token)
	    response.header('Authorization', `Bearer ${user.token}`)
	    response.redirect('/')
          }
	}
}

module.exports = LoginController
