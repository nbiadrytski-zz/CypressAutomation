/// <reference types="Cypress" />
// test runner: node_modules/.bin/cypress open
// run all tests in headless (electron) from console: npx cypress run
// run one test from console: npx cypress run --spec "cypress/integration/examples/Test1.js"
// run one test from console (not headless electron): npx cypress run --headed --spec "cypress/integration/examples/Test1.js"
// run one test from console in chrome: npx cypress run --browser chrome --spec "cypress/integration/examples/Test1.js"

describe('My First Test', function() {

    it('Open url in browser', function() {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

      cy.get('.search-keyword').type('ca')
      cy.wait(2000)

      // make sure you get only visible items
      cy.get('.product:visible').should('have.length', 4)

      // kind of storing .products in a var
      cy.get('.products').as('productsLocator')
      // find() --> get child elements of parent '.products'
      cy.get('@productsLocator').find('.product').should('have.length', 4)

      // eq() --> get 2nd product which contains 'ADD TO CART' and click it
      cy.get('@productsLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function() {
        console.log('HELLO WORLD!!! Promise resolved') // use then() to console log in particular order
      })

      // iterate through products via each() loop, find Cashews and click it
      cy.get('@productsLocator').find('.product').each(($elem, index, $list) => {
        var productText = $elem.find('h4.product-name').text()
          if(productText.includes('Cashews')) {
            $elem.find('button').click()  
        }
      })

      // assert if logo text is correct
      cy.get('.brand').should('have.text', 'GREENKART')
      
      // print logo text
      cy.get('.brand').then(function(logoElement) {
        cy.log(logoElement.text()) // logs to test runner 
      })

      // will be printed first thing in browser console
      // as it's not Cypress, but JavaScript
      console.log('HELLO WORLD!!!')

    })
})
