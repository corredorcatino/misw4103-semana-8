// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { loginPage } from "../pages/LoginPage"

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/')
    cy.url().should('contain', '/signin')
    cy.getCookie('ghost-admin-api-session').should('not.exist')

    loginPage.fillEmailAddress(Cypress.env('email_address'))
    loginPage.fillPassword(Cypress.env('password'))
    loginPage.submitLogin()

    cy.url().should('contain', '/dashboard')
    cy.getCookie('ghost-admin-api-session').should('exist')
})