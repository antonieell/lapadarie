"use strict";

const User = use("App/Models/User");

class RegistroController {
  //username
  //name
  //lastname
  //email
  //contact
  //password
  //pedidos
  async registro({ request, response, auth }) {
    let user = await User.create(request.all());
    await auth.login(user);
    return response.redirect("/");
  }
}

module.exports = RegistroController;
