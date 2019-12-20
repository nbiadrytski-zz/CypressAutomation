/// <reference types="Cypress" />
// test runner: node_modules/.bin/cypress open
// run all tests in headless (electron) from console: npx cypress run
// run one test from console: npx cypress run --spec "cypress/integration/examples/Test1.js"
// run one test from console (not headless electron): npx cypress run --headed --spec "cypress/integration/examples/Test1.js"
// run one test from console in chrome: npx cypress run --browser chrome --spec "cypress/integration/examples/Test1.js"

describe('My Second Test Suite', function() {

    it('My seconds test', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // 'tr td:nth-child(2)'  --> tr is parent, td is child (select 2nd td out of 3)
        cy.get('tr td:nth-child(2)').each(($elem, _index, _$list) => {
            var courseText = $elem.text()
            if(courseText.includes('Python')) {
                
            }
          })
    })
})
