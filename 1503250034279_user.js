"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("username", 80).notNullable().unique();
      table.string("password", 60).notNullable();
      table.string("name", 20).notNullable();
      table.string("sobrenome", 20).notNullable();
      table.string("contact", 20).notNullable();
      table.string("email", 254).notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
