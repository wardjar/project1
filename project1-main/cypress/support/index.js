// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration

// Import commands.js using ES2015 syntax:
import './BasicFunctions'
import './pages/HomePage'
import './pages/SearchPage'
import './pages/ItemPage'
import './pages/CartPage'
import './pages/CheckoutPage'
import './pages/OrderPage'
import 'cypress-mochawesome-reporter/register';
cy.faker = require('faker');
// Alternatively you can use CommonJS syntax:
// require('./commands')
// var Faker = require('Faker')

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: true
  })

  