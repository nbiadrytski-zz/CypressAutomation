/// <reference types="Cypress" />
// test runner: node_modules/.bin/cypress open
// run all tests in headless (electron) from console: npx cypress run
// run one test from console: npx cypress run --spec "cypress/integration/examples/Test1.js"
// run one test from console (not headless electron): npx cypress run --headed --spec "cypress/integration/examples/Test1.js"
// run one test from console in chrome: npx cypress run --browser chrome --spec "cypress/integration/examples/Test1.js"

// https://www.udemy.com/course/cypress-tutorial/learn/lecture/15647522#content

describe('My Second Test Suite', function() {

    it('My seconds test', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // no direct support of mouse hover in Cypress, but
        // show() will show all hidden child elems
        cy.get('.mouse-hover-content').invoke('show')
        // use cy.contains('Top').click(force: true) without invoking show()
        cy.contains('Top').click()
        cy.url().should('include', '/#top')
    })
})
