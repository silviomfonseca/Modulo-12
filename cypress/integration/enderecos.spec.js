/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page' // para usar o metodo é preciso importar
const dadosEndereco = require('../fixtures/endereco.json') // pode usar também o comando import no lugar da const
describe('Funcionalidade Endereços -  Faturamento e Entregas', () => {

    // Quando visitar minha conta, sistema faz o login só para depois iniciar os testes
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });
    // Nesse parametro não estou usando dados faker, estou passando todos os parametros.
    it('Deve fazer cadastro de faturamento com sucesso na página', () => {
        EnderecoPage.editarEnderecoFaturamento('Luigi', 'Nintendo', 'Microsfot', 'Brasil', 'Rua jão silva', '345', 'Xbox', 'São Paulo', '05678-909', '98359090')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    })

    // Lembre que quando for lista começa pelo 0, nesse caso[0], ou escolhe a lista [2], [1]
    it.only('Deve fazer cadastro de faturamento com sucesso na página -  Usando arquivos de dados -faker', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    })

    //vai usar o arquivo endereco.page
    it('Deve fazer o cadastro de faturamento com sucesso', () => {


    });

})