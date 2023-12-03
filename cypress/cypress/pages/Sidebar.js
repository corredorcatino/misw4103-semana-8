class Sidebar {
    navigateToPages() {
        cy.get('[data-test-nav="pages"]').click()
        cy.url().should('contain', '/pages')
        cy.get('.gh-canvas-title > a[href*="#/pages"]').should('contain', 'Pages')
    }

    navigateToPosts() {
        cy.get('[data-test-nav="posts"]').click()
        cy.url().should('contain', '/posts')
        cy.get('.gh-canvas-title > a[href*="#/posts"]').should('contain', 'Posts')
    }
}

export const sidebar = new Sidebar();