// node_modules/.bin/cypress run --record --key 0af473c5-849c-4ab0-aad9-f315e03a4482
// node_modules/.bin/cypress run --reporter mochawesome
/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'

describe('Test Suite: Test Home Page', function() {

    before(function(){  //runs once before all tests
        cy.fixture('example').then(function(data) {
            // scope of data is now entire class
            this.data = data
        })
    })

    it('Test Home Page', function() {
        const homePage = new HomePage()
        const productsPage = new ProductsPage()

        cy.visit(Cypress.env('baseUrl'))  // see cypress.json for baseUrl

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterprener().should('be.disabled')

        homePage.getShopTab().click()

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })

        productsPage.checkOutButton().click()
        // overwrites cypress.json; works only for the current file
        // starting from this line timeout will be 9 sec
        Cypress.config('defaultCommandTimeout', 9000)

        // sum product prices
        var productsSum = 0
        cy.get('tr td:nth-child(4) strong').each((elem, _index, _list) => {
            const amountText = elem.text()
            var result = amountText.split(' ') // split by space so that get only int without $ sign
            var amount = result[1].trim()  // remove spaces if any
            productsSum = Number(productsSum) + Number(amount)
        }).then(function() {
            cy.log(productsSum)
        })
        // get total amount number in right bottom corner
        cy.get('h3 strong').then(function(elem) {
            const amountText = elem.text()
            var result = amountText.split(' ')
            var totalAmount = result[1].trim()
            expect(Number(totalAmount)).to.equal(productsSum)
        })

        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()  // click India suggestion
        // {force: true} if element is not clickable because covered by another elem
        cy.get('#checkbox2').click({force: true})  // select terms&conditions checkbox
        cy.get('input[type="submit"]').click() // click Purchase button

        // 'Success! Thank you! Your order will be delivered in next few weeks :-).'
        cy.get('.alert').then(function(elem) {
            var actualText = elem.text()
            expect(actualText.includes('Success')).to.be.true
        })
    })
})