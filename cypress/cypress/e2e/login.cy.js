import { loginPage } from "../pages/LoginPage"
import { faker } from '@faker-js/faker'

describe('Login', () => {
  it('1 - Login exitoso', () => {
    cy.login(Cypress.env('email_adress'), Cypress.env('password'))
  })

  it('2 - Login fallido - formulario vacio', () => {
    cy.visit('/')
    cy.url().should('contain', '/signin')
    cy.getCookie('ghost-admin-api-session').should('not.exist')

    loginPage.submitLogin()

    loginPage.isFormInFailureState()
    loginPage.mainErrorContainesMessage('Please fill out the form to sign in.')
  })

  it('3 - Login fallido - password vacio', () => {
    cy.visit('/')
    cy.url().should('contain', '/signin')
    cy.getCookie('ghost-admin-api-session').should('not.exist')

    const email = faker.internet.email()
    loginPage.fillEmailAddress(email)
    loginPage.submitLogin()

    loginPage.isFormInFailureState()
    loginPage.mainErrorContainesMessage('Please fill out the form to sign in.')
  })

  it('4 - Login fallido - email vacio', () => {
    cy.visit('/')
    cy.url().should('contain', '/signin')
    cy.getCookie('ghost-admin-api-session').should('not.exist')

    const password = faker.internet.password()
    loginPage.fillPassword(password)
    loginPage.submitLogin()

    loginPage.isFormInFailureState()
    loginPage.mainErrorContainesMessage('Please fill out the form to sign in.')
  })

  it('5 - Login fallido - email invalido', () => {
    cy.visit('/')
    cy.url().should('contain', '/signin')
    cy.getCookie('ghost-admin-api-session').should('not.exist')

    const email = faker.string.alphanumeric(10)
    const password = faker.internet.password()
    loginPage.fillEmailAddress(email)
    loginPage.fillPassword(password)
    loginPage.submitLogin()

    loginPage.isFormInFailureState()
    loginPage.mainErrorContainesMessage('Please fill out the form to sign in.')
  })

  it('6 - Login fallido - email incorrecto', () => {
    cy.visit('/')
    cy.url().should('contain', '/signin')
    cy.getCookie('ghost-admin-api-session').should('not.exist')

    const email = faker.internet.email({ provider: 'thesoftwaredesigncompany.com' })
    loginPage.fillEmailAddress(email)
    loginPage.fillPassword(Cypress.env('password'))
    loginPage.submitLogin()

    loginPage.isFormInFailureState()
    loginPage.mainErrorContainesMessage('Incorrect email address or password')
  })

  it('7 - Login fallido - password incorrecto', () => {
    cy.visit('/')
    cy.url().should('contain', '/signin')
    cy.getCookie('ghost-admin-api-session').should('not.exist')

    const password = faker.internet.password()
    loginPage.fillEmailAddress(Cypress.env('email_address'))
    loginPage.fillPassword(password)
    loginPage.submitLogin()

    loginPage.isFormInFailureState()
    loginPage.mainErrorContainesMessage('Incorrect email address or password')
  })
})