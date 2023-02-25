/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta') // No arquivo cypress.json, já possui a URL completa

    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')       
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.oage-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', "Olá, aluno_ebac")

    });

    // Vai usar o arquivo da pasta Fixture . arquivo perfil.json
    it('Deve fazer login com sucesso - Usando a base de dados ', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')

    });
//Outra maneira de usar os dados da pasta Fixtures, cria uma variável DADOS
    it.only('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false}) // Log: false, quando rodar o teste ele não vai exibir senha
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
            cy.get('.page-title')

        })

    });

    it('Deve exiibir mensagem de usuário inválido', () => {
        cy.get('#username').type('alu_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')

    });


    it('Deve exiibir mensagem de senha inválido', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('tee@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha')


    });

});