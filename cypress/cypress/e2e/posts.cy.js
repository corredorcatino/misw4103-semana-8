import { sidebar } from "../pages/Sidebar"
import { postsListPage } from "../pages/PostsListPage"
import { postEditorPage } from "../pages/PostEditorPage"
import { faker } from "@faker-js/faker"

const ONE_SECOND = 1000

describe('Posts', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email_address'), Cypress.env('password'))
    sidebar.navigateToPosts()
  })

  it('1 - Crear borrador de post', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    postsListPage.clickNewPostButton()
    postEditorPage.fillTitle(title)
    postEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    postEditorPage.returnToPostsList()

    postsListPage.doesPostExist(title)
  })

  it('2 - Editar borrador de post', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })
    const newTitle = faker.lorem.sentence({ min: 2, max: 4 })

    postsListPage.clickNewPostButton()
    postEditorPage.fillTitle(title)
    postEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    postEditorPage.returnToPostsList()
    postsListPage.clickOnPost(title)
    postEditorPage.fillTitle(newTitle)
    cy.wait(ONE_SECOND)

    postEditorPage.returnToPostsList()
    postsListPage.doesPostExist(newTitle)
  })

  it('3 - Publicar borrador de post', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    postsListPage.clickNewPostButton()
    postEditorPage.fillTitle(title)
    postEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    postEditorPage.returnToPostsList()
    postsListPage.doesPostExist(title)
    postsListPage.clickOnPost(title)
    postEditorPage.clickPublishButton()
    postEditorPage.clickContinueButton()
    postEditorPage.clickConfirmPublishButton()
    cy.wait(ONE_SECOND)
    postEditorPage.returnToEditor()
    postEditorPage.returnToPostsList()
    postsListPage.filterByPublished()

    postsListPage.isPostPublished(title)
  })

  it('4 - Crear post', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    postsListPage.clickNewPostButton()
    postEditorPage.fillTitle(title)
    postEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    postEditorPage.clickPublishButton()
    postEditorPage.clickContinueButton()
    postEditorPage.clickConfirmPublishButton()
    cy.wait(ONE_SECOND)
    postEditorPage.returnToEditor()
    postEditorPage.returnToPostsList()
    postsListPage.filterByPublished()

    postsListPage.doesPostExist(title)
  })

  it('5 - Editar slug de post', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })
    const slug = faker.lorem.slug()

    postsListPage.clickNewPostButton()
    postEditorPage.fillTitle(title)
    postEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    postEditorPage.togglePostSettings()
    postEditorPage.fillSlug(slug)
    postEditorPage.togglePostSettings()
    cy.wait(ONE_SECOND)
    postEditorPage.returnToPostsList()

    postsListPage.clickOnPost(title)
    postEditorPage.togglePostSettings()
    cy.get('input[name="post-setting-slug"]').should('have.value', slug)
  })

  it('6 - Programar la publicación de un post', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    postsListPage.clickNewPostButton()
    postEditorPage.fillTitle(title)
    postEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    postEditorPage.clickPublishButton()
    postEditorPage.clickScheduleLater()
    postEditorPage.clickContinueButton()
    postEditorPage.clickConfirmPublishButton()
    cy.wait(ONE_SECOND)
    postEditorPage.returnToEditor()
    postEditorPage.returnToPostsList()

    postsListPage.filterByScheduled()

    postsListPage.doesPostExist(title)
  })

  it('7 - Eliminar borrador de un post', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    postsListPage.clickNewPostButton()
    postEditorPage.fillTitle(title)
    postEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    postEditorPage.returnToPostsList()

    postsListPage.doesPostExist(title)
    postsListPage.rightClickOnPost(title)
    postsListPage.clickOnDelete()
    postsListPage.confirmDeletion()

    postsListPage.doesNotExist(title)
  })

  it('8 - Eliminar post publicado', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    postsListPage.clickNewPostButton()
    postEditorPage.fillTitle(title)
    postEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    postEditorPage.clickPublishButton()
    postEditorPage.clickContinueButton()
    postEditorPage.clickConfirmPublishButton()
    cy.wait(ONE_SECOND)
    postEditorPage.returnToEditor()
    postEditorPage.returnToPostsList()
    postsListPage.filterByPublished()

    postsListPage.doesPostExist(title)
    postsListPage.rightClickOnPost(title)
    postsListPage.clickOnDelete()
    postsListPage.confirmDeletion()

    postsListPage.doesNotExist(title)
  })
})