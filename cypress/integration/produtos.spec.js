/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {


    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da Lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() //seleciona o primeiro item da lista
            //.last() //seleciona o último item da lista
            .eq(3) // seleciona o 4 item da lista
            //.contains('Ariel Roll Sleeve Sweatshirt') // Seleciona um item da lista com esse nome
            .click()
    });

    it('Deve Adicionar um produto ao carrinho', () => {
        var quantidade = 3 // essa variável vai guardar o valor 3
        cy.get('.product-block grid"]')
            .eq(3).click() // Seleciona um item da lista com esse nome
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.') // sinal de + vai concatenar a variável com a mensagem

    });

    //Maneira mais simples de executar um teste
    // vai rodar usando o comands vai adicionar o produto com QTD 1, todos esse paramentros foram passados no arquivo commands
    it.only('Deve adicionar produtos ao carrinho - Usando o comando customizado', () => {
        cy.addProdutos('Argus All-Weather Tank', 'M', 'Gray', 1)

    });

    it('Deve adicionar produtos ao carrinho - Usando o comando customizado', () => {
        cy.addProdutos('Aether Gym Pant', '36', 'Blue', 2)


    });

    it('Deve adicionar produtos ao carrinho - Usando o comando customizado', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'XS', 'Green', 4)


    });
    // aqui você pode validar o teste com vários cenarios

});