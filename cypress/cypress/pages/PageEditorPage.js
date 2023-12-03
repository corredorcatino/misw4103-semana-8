class PageEditorPage {

    fillTitle(title) {
        cy.get('textarea[data-test-editor-title-input]').type(title)

        cy.screenshot(Cypress.currentTest.title + ' - page-editor-textarea-title')
    }

    fillContent(content) {
        cy.get('.kg-prose').type(content, {force: true})

        cy.screenshot(Cypress.currentTest.title + ' - page-editor-textarea-content')
    }

    clickPublishButton() {
        cy.get('[data-test-button="publish-flow"]').click()

        cy.screenshot(Cypress.currentTest.title + ' - page-editor-submit-publish')
    }

    clickContinueButton() {
        cy.get('[data-test-button="continue"]').click()

        cy.screenshot(Cypress.currentTest.title + ' - page-editor-submit-continue')
    }

    clickConfirmPublishButton() {
        cy.get('[data-test-button="confirm-publish"]').click()

        cy.screenshot(Cypress.currentTest.title + ' - page-editor-submit-confirm')
    }

    clickUpdatePageButton() {
        cy.get('[data-test-button="publish-save"]').click()

        cy.screenshot(Cypress.currentTest.title + ' - page-editor-submit-update')
    }

    clickScheduleLater() {
        cy.get('[data-test-setting="publish-at"]').click()
        cy.get('[data-test-radio="schedule"]').parent().click()

        cy.screenshot(Cypress.currentTest.title + ' - page-editor-schedule-later')
    }

    returnToPagesList() {
        cy.get('a[data-test-link="pages"]').click()

        cy.screenshot(Cypress.currentTest.title + ' - page-editor-submit-return-page-list')
    }

    returnToEditor() {
        cy.get('button[data-test-button="close-publish-flow"]').click()

        cy.screenshot(Cypress.currentTest.title + ' - page-editor-submit-return-editor')
    }

    openPageSettings() {
        cy.get('button[data-test-psm-trigger]').click()

        cy.screenshot(Cypress.currentTest.title + ' - page-editor-submit-open-settings')
    }

    fillSlug(slug) {
        cy.get('input[name="post-setting-slug"]').clear()
        cy.get('input[name="post-setting-slug"]').type(slug, {force: true})

        cy.screenshot(Cypress.currentTest.title + ' - page-editor-input-slug')
    }
}

export const pageEditorPage = new PageEditorPage();