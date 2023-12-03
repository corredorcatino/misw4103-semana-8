class LoginPage {

    fillEmailAddress(email) {
        cy.get('input[type="email"]').type(email)

        cy.screenshot(Cypress.currentTest.title + ' - login-input-email')
    }

    fillPassword(password) {
        cy.get('input[type="password"]').type(password);

        cy.screenshot(Cypress.currentTest.title + ' - login-input-password')
    }

    submitLogin() {
        cy.get('button[type="submit"]').click();

        cy.screenshot(Cypress.currentTest.title + ' - login-submit')
    }

    isFormInFailureState() {
        cy.get('[data-test-task-button-state="failure"]').should('exist')
    }

    mainErrorContainesMessage(message) {
        cy.get('p[class="main-error"]').should('contain', message)
    }
}

export const loginPage = new LoginPage();