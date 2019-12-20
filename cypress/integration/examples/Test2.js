/// <reference types="Cypress" />
// test runner: node_modules/.bin/cypress open
// run all tests in headless (electron) from console: npx cypress run
// run one test from console: npx cypress run --spec "cypress/integration/examples/Test1.js"
// run one test from console (not headless electron): npx cypress run --headed --spec "cypress/integration/examples/Test1.js"
// run one test from console in chrome: npx cypress run --browser chrome --spec "cypress/integration/examples/Test1.js"

describe('My Second Test Suite', function() {

    it('My seconds test', function() {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      cy.get('.search-keyword').type('ca')
      cy.wait(2000)

      // kind of storing .products in a var
      cy.get('.products').as('productsLocator')

      // iterate through products via each() loop, find Cashews and click it
      cy.get('@productsLocator').find('.product').each(($elem, index, $list) => {
        var productText = $elem.find('h4.product-name').text()
          if(productText.includes('Cashews')) {
            $elem.find('button').click()  
        }
      })

      // assert if logo text is correct
      cy.get('.brand').should('have.text', 'GREENKART')

      // click cart
      cy.get('.cart-icon > img').click()

      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()
      
    })
})
