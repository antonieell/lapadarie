'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('name', 80).notNullable().unique()
      table.string('lastname', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('contact', 20).notNullable()
      table.string('password', 60).notNullable()
      table.integer('pedidos', 80)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
