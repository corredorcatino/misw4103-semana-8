import { sidebar } from "../pages/Sidebar"
import { pagesListPage } from "../pages/PagesListPage"
import { faker } from "@faker-js/faker"
import { pageEditorPage } from "../pages/PageEditorPage"

const ONE_SECOND = 1000

describe('Pages', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email_address'), Cypress.env('password'))
    sidebar.navigateToPages()
  })

  it('1 - Crear borrador de página', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    pagesListPage.clickNewPageButton()
    pageEditorPage.fillTitle(title)
    pageEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    pageEditorPage.returnToPagesList()

    pagesListPage.doesPageExists(title)
  })

  it('2 - Editar borrador de página', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })
    const newTitle = faker.lorem.sentence({ min: 2, max: 4 })

    pagesListPage.clickNewPageButton()
    pageEditorPage.fillTitle(title)
    pageEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    pageEditorPage.returnToPagesList()
    pagesListPage.clickOnPage(title)
    pageEditorPage.fillTitle(newTitle)
    cy.wait(ONE_SECOND)

    pageEditorPage.returnToPagesList()
    pagesListPage.doesPageExists(newTitle)
  })

  it('3 - Publicar borrador de página', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    pagesListPage.clickNewPageButton()
    pageEditorPage.fillTitle(title)
    pageEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    pageEditorPage.returnToPagesList()
    pagesListPage.doesPageExists(title)
    pagesListPage.clickOnPage(title)
    pageEditorPage.clickPublishButton()
    pageEditorPage.clickContinueButton()
    pageEditorPage.clickConfirmPublishButton()
    cy.wait(ONE_SECOND)
    pageEditorPage.returnToEditor()
    pageEditorPage.returnToPagesList()
    pagesListPage.filterByPublished()

    pagesListPage.isPagePublished(title)
  })

  it('4 - Crear página', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    pagesListPage.clickNewPageButton()
    pageEditorPage.fillTitle(title)
    pageEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    pageEditorPage.clickPublishButton()
    pageEditorPage.clickContinueButton()
    pageEditorPage.clickConfirmPublishButton()
    cy.wait(ONE_SECOND)
    pageEditorPage.returnToEditor()
    pageEditorPage.returnToPagesList()
    pagesListPage.filterByPublished()

    pagesListPage.doesPageExists(title)
  })

  it('5 - Editar slug de página', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })
    const slug = faker.lorem.slug()

    pagesListPage.clickNewPageButton()
    pageEditorPage.fillTitle(title)
    pageEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    pageEditorPage.openPageSettings()
    pageEditorPage.fillSlug(slug)
    pageEditorPage.openPageSettings()
    cy.wait(ONE_SECOND)
    pageEditorPage.returnToPagesList()

    pagesListPage.clickOnPage(title)
    pageEditorPage.openPageSettings()
    cy.get('input[name="post-setting-slug"]').should('have.value', slug)
  })
  
  it('6 - Programar la publicación de una página', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    pagesListPage.clickNewPageButton()
    pageEditorPage.fillTitle(title)
    pageEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    pageEditorPage.clickPublishButton()
    pageEditorPage.clickScheduleLater()
    pageEditorPage.clickContinueButton()
    pageEditorPage.clickConfirmPublishButton()
    cy.wait(ONE_SECOND)
    pageEditorPage.returnToEditor()
    pageEditorPage.returnToPagesList()

    pagesListPage.filterByScheduled()

    pagesListPage.doesPageExists(title)
  })

  it('7 - Eliminar borrador de una página', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    pagesListPage.clickNewPageButton()
    pageEditorPage.fillTitle(title)
    pageEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    pageEditorPage.returnToPagesList()

    pagesListPage.doesPageExists(title)
    pagesListPage.rightClickOnPage(title)
    pagesListPage.clickOnDelete()
    pagesListPage.confirmDeletion()

    pagesListPage.doesNotExists(title)
  })

  it('8 - Eliminar página publicada', () => {
    const title = faker.lorem.sentence({ min: 2, max: 4 })
    const content = faker.lorem.paragraphs({ min: 2, max: 4 })

    pagesListPage.clickNewPageButton()
    pageEditorPage.fillTitle(title)
    pageEditorPage.fillContent(content)
    cy.wait(ONE_SECOND)
    pageEditorPage.clickPublishButton()
    pageEditorPage.clickContinueButton()
    pageEditorPage.clickConfirmPublishButton()
    cy.wait(ONE_SECOND)
    pageEditorPage.returnToEditor()
    pageEditorPage.returnToPagesList()
    pagesListPage.filterByPublished()

    pagesListPage.doesPageExists(title)
    pagesListPage.rightClickOnPage(title)
    pagesListPage.clickOnDelete()
    pagesListPage.confirmDeletion()

    pagesListPage.doesNotExists(title)
  })
})