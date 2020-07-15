"use strict";

const User = use("App/Models/User");

class LoginController {
  async login({ request, response, auth }) {
    const { email, password } = request.all();
    try {
      const a = await auth.attempt(email, password);
     return response.redirect("/");
    } catch (error) {
      return error
    }
  }
}

module.exports = LoginController;
