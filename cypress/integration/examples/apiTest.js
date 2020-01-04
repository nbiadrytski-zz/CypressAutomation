// node_modules/.bin/cypress run --record --key 0af473c5-849c-4ab0-aad9-f315e03a4482
// node_modules/.bin/cypress run --reporter mochawesome
/// <reference types="Cypress" />

describe('Test API suite', function() {

    it('Simple POST request test', function() {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "Some name",
            "isbn": "avdwrt",
            "aisle": "44v6",
            "author": "Mikalai Bn"
            }
        ).then(function(response) {
        expect(response.body).to.have.property("Msg", "successfully added")
        })
    })
})