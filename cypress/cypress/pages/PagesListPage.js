class PagesListPage {
    clickNewPageButton() {
        cy.get('[data-test-new-page-button=""]').click()
        cy.url().should('contain', '/editor/page')
    }

    newPageExists(newPageTitle) {
        cy.contains(newPageTitle)
    }

    clickOnPage(title) {
        cy.contains('a', title).click()
    }

    clickEditPageButton() {
        cy.get('a[href*="editor/page/"]:last').click()
    }

    rightClickOnPage(title) {
        cy.contains('a', title).rightclick()
    }

    clickOnDelete() {
        cy.get('.gh-context-menu li:last button').click()
    }

    confirmDeletion() {
        cy.get('.modal-footer button[data-test-button="confirm"]').click()
    }

    doesPageExists(title) {
        cy.contains('a', title).should('exist')
    }

    doesNotExists(title) {
        cy.contains('a', title).should('not.exist')
    }

    isPagePublished(title) {
        cy.contains('a', title).contains('Published')
    }

    filterByPublished() {
        cy.get('[data-test-type-select="true"').click()
        cy.get('#ember-basic-dropdown-wormhole').contains('li', 'Published pages').click()
    }

    filterByScheduled() {
        cy.get('[data-test-type-select="true"').click()
        cy.get('#ember-basic-dropdown-wormhole').contains('li', 'Scheduled pages').click()
    }
}

export const pagesListPage = new PagesListPage();