/// <reference types="Cypress" />
// test runner: node_modules/.bin/cypress open
// run all tests in headless (electron) from console: npx cypress run
// run one test from console: npx cypress run --spec "cypress/integration/examples/Test1.js"
// run one test from console (not headless electron): npx cypress run --headed --spec "cypress/integration/examples/Test1.js"
// run one test from console in chrome: npx cypress run --browser chrome --spec "cypress/integration/examples/Test1.js"

describe('My Second Test Suite', function() {

    it('My seconds test', function() {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      // check/uncheck checkbox (same for radio buttons)
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

      // check 2 checkboxes out of 3
      // input[type="checkbox"] is parent css selector for the 3 checkboxes
      cy.get('input[type="checkbox"]').check(['option2', 'option3'])

      // static dropdown
      cy.get('select').select('option2').should('have.value', 'option2')

      // dynamic dropdown
      cy.get('#autocomplete').type('ind')

      // iterate over list of countries and click 'India'
      // '.ui-menu-item div' is parent css selector for all dropdown options
      cy.get('.ui-menu-item div').each(($elem, _index, _$list) => {
        if($elem.text()==='India') {
          $elem.click()  
        }
      })
      cy.get('#autocomplete').should('have.value', 'India')

      // hidden elements
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()

      // radio button
      cy.get('[value="radio2"]').check().should('be.checked')

    })
})
