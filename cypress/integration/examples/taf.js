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

    })
})