/// <reference types="cypress" />

describe('Testando a agenda de contatos', () => {
    beforeEach( () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    // Adiciona um contato
    it('Deve adicionar um contato', () => {
        cy.get('input[placeholder="Nome"]').type('Thays Oliveira')
        cy.get('input[placeholder="E-mail"]').type('thays@teste.com')
        cy.get('input[placeholder="Telefone"]').type('62999999232')
        cy.get('.adicionar').click()
    })

    // Altera um contato
    it('Deve alterar um contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Telefone"]').clear().type('62 91234-5678')
        cy.get('.alterar').click()
    })

    // Remove um contato
    it('Deve remover um contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
    })
})