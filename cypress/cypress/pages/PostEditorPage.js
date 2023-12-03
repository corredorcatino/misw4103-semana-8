class PostEditorPage {

    fillTitle(title) {
        cy.get('textarea[data-test-editor-title-input]').type(title)
    }

    fillContent(content) {
        cy.get('.kg-prose').type(content, {force: true})
    }

    clickPublishButton() {
        cy.get('[data-test-button="publish-flow"]').click()
    }

    clickContinueButton() {
        cy.get('[data-test-button="continue"]').click()
    }

    clickConfirmPublishButton() {
        cy.get('[data-test-button="confirm-publish"]').click()
    }

    clickScheduleLater() {
        cy.get('[data-test-setting="publish-at"]').click()
        cy.get('[data-test-radio="schedule"]').parent().click()
    }

    returnToPostsList() {
        cy.get('a[data-test-link="posts"]').click()
    }

    returnToEditor() {
        cy.get('button[data-test-button="close-publish-flow"]').click()
    }

    togglePostSettings() {
        cy.get('button[data-test-psm-trigger]').click()
    }

    fillSlug(slug) {
        cy.get('input[name="post-setting-slug"]').clear()
        cy.get('input[name="post-setting-slug"]').type(slug, {force: true})
    }
}

export const postEditorPage = new PostEditorPage();