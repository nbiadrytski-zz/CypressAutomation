/// <reference types="Cypress" />
// test runner: node_modules/.bin/cypress open
// run all tests in headless (electron) from console: npx cypress run
// run one test from console: npx cypress run --spec "cypress/integration/examples/Test1.js"
// run one test from console (not headless electron): npx cypress run --headed --spec "cypress/integration/examples/Test1.js"
// run one test from console in chrome: npx cypress run --browser chrome --spec "cypress/integration/examples/Test1.js"

describe('My Second Test Suite', function() {

    it('My seconds test', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // to avoid unstable behavior cypress doesn't open pages in new tab
        // you can workaround this by removing 'target' attribute which opens pafe in new tab
        // call jquery 'removeAttr' function
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'qaclickacademy.com')
        cy.url().should('eq', 'http://www.qaclickacademy.com/')

        // go back
        cy.go('back')

    })
})
