"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */

const User = use("App/Models/User");
const Database = use("Database");
class UserController {
  /**
   * GET /users/
   * Retorna os usuários do banco
   */
  async index({ request, response, view }) {
    console.log("Post bateu aqui");
    return await Database.table("users");
  }

  /**
   * Método POST
   * Cria um novo usuário no banco de dados
   */
  async store({ request, response }) {
    const allRequests = request.all();
    await User.create(allRequests);
    console.log(allRequests);
    response.redirect("/");

    // (user.username = "admin1"),
    //   (user.password = "admin1"),
    //   (user.name = "Adminsol1"),
    //   (user.sobrenome = "de1 Root"),
    //   (user.contact = "70701-7070"),
    //   (user.email = "admin1@admin.admin"),
    //   await user.save();
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const query = await User.find(params.id);
    query.merge({ email: "antoniel2210@gmail.com" });
    return query;
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const requisicao = request.all();
    const query = await User.find(params.id);
    query.merge({ ...requisicao });
    await query.save();
    return query;
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    const user = await User.find(id);
    await user.delete();
    return user;
  }
}

module.exports = UserController;
