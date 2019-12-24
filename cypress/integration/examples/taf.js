/// <reference types="Cypress" />
// test runner: node_modules/.bin/cypress open
// run all tests in headless (electron) from console: npx cypress run
// run one test from console: npx cypress run --spec "cypress/integration/examples/Test1.js"
// run one test from console (not headless electron): npx cypress run --headed --spec "cypress/integration/examples/Test1.js"
// run one test from console in chrome: npx cypress run --browser chrome --spec "cypress/integration/examples/Test1.js"

// https://www.udemy.com/course/cypress-tutorial/learn/lecture/15647522#content

describe('Test Suite: new window', function() {

    before(function(){  //runs once before all tests
        cy.fixture('example').then(function(data) {
            // scope of data is now entire class
            this.data = data
        })
    })

    it('Child window test suite', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)

        // 'Two-way Data Binding example:' field has 'Bob' value
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)

        // <input class="form-control ng-dirty ng-valid ng-touched" minlength="2" name="name" required="" type="text">
        // check that minlength="2" which means at least 2 chars need to be entered into field
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')

        // radio button disabled
        cy.get('#inlineRadio3').should('be.disabled')

        // click shop button
        cy.get(':nth-child(2) > .nav-link').click()

        // at shop page add Blackberry and Nokia to cart
        // see support/commands.js for selectProduct() and fixtures/example.json for data
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })
    })
})