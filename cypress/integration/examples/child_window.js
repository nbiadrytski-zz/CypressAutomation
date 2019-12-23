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

        // <a id="opentab" class="btn-style class1 class2" href="http://www.qaclickacademy.com/" target="_blank">Open Tab</a>
        // Jqery prop() method to get attribute value
        // This is how you can open a child window:
        // technically there is no difference if it opens in a new or the same window
        cy.get('#opentab').then(function(elem) {
            var hrefAttributeUrl = elem.prop('href')
            cy.log(hrefAttributeUrl)

            cy.visit(hrefAttributeUrl)

        })
    })
})
