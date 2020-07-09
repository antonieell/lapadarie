"use strict";

const User = use("App/Models/User");
class AuthenticatedController {
  async register({ request, response, auth }) {
    const allRequests = request.all();
    const user = await User.create(allRequests);
    await auth.generate(user);
    await auth.login(user);
    console.log(allRequests);
    response.redirect("/");
  }

  async login({ auth, request, response }) {
    const { email, password } = request.all();
    await auth.attempt(email, password);
    return response.redirect("/");
  }
}

module.exports = AuthenticatedController;
