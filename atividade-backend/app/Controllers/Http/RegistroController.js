'use strict'

const User = use("App/Models/User");

class RegistroController {
  	//username
	//name
	//lastname
	//email
	//contact
	//password
	//pedidos
  async registro({request, response, auth}){
	  let user = await User.create(request.all())
	  let token = await auth.generate(user)
	  Object.assign(user,token)
	  return response.json(user)
  }
}

module.exports = RegistroController
