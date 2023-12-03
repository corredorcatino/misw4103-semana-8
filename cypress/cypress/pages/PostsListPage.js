class PostsListPage {
    clickNewPostButton() {
        cy.get('[data-test-new-post-button=""]').click()
        cy.url().should('contain', '/editor/post')
    }

    clickOnPost(title) {
        cy.contains('a', title).click()
    }

    rightClickOnPost(title) {
        cy.contains('a', title).rightclick()
    }

    clickOnDelete() {
        cy.get('.gh-context-menu li:last button').click()
    }

    confirmDeletion() {
        cy.get('.modal-footer button[data-test-button="confirm"]').click()
    }

    doesPostExist(title) {
        cy.contains('a', title).should('exist')
    }

    doesNotExist(title) {
        cy.contains('a', title).should('not.exist')
    }

    isPostPublished(title) {
        cy.contains('a', title).contains('Published')
    }

    filterByPublished() {
        cy.get('[data-test-type-select="true"').click()
        cy.get('#ember-basic-dropdown-wormhole').contains('li', 'Published posts').click()
    }

    filterByScheduled() {
        cy.get('[data-test-type-select="true"').click()
        cy.get('#ember-basic-dropdown-wormhole').contains('li', 'Scheduled posts').click()
    }
}

export const postsListPage = new PostsListPage();