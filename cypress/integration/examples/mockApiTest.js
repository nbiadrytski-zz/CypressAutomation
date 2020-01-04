// node_modules/.bin/cypress run --record --key 0af473c5-849c-4ab0-aad9-f315e03a4482
// node_modules/.bin/cypress run --reporter mochawesome
/// <reference types="Cypress" />

describe('Test API suite', function() {

    it('Fake comment test', function() {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.server()

        // listen to and mock PUT request which has comments/* in path with 404
        cy.route(
            {
                method: 'PUT',
                url: 'comments/*',
                status: 404,
                response: {error: 'Hey comment does not exist.'},
                delay: 2000
            }
        ).as('UpdateComment')

        cy.get('.network-put').click()

        cy.get('.network-put-comment').should('contain', 'Hey comment does not exist.')

    })
})