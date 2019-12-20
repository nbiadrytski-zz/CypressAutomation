/// <reference types="Cypress" />
// test runner: node_modules/.bin/cypress open
// run all tests in headless (electron) from console: npx cypress run
// run one test from console: npx cypress run --spec "cypress/integration/examples/Test1.js"
// run one test from console (not headless electron): npx cypress run --headed --spec "cypress/integration/examples/Test1.js"
// run one test from console in chrome: npx cypress run --browser chrome --spec "cypress/integration/examples/Test1.js"

describe('My Second Test Suite', function() {

    it('My seconds test', function() {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      // cypress automatically confirms alerts (window:alert)
      cy.get('#alertbtn').click()
      cy.get('[value="Confirm"]').click()

      // trigger window:alert
      // cypress can fire browser events; window:alert is a browser event
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })

      cy.on('window:confirm', (str) => {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })

    })
})
