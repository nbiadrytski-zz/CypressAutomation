/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductsPage from '../pageObjects/ProductsPage'

describe('Test Suite: Test Home Page', function() {

    before(function(){  //runs once before all tests
        cy.fixture('example').then(function(data) {
            // scope of data is now entire class
            this.data = data
        })
    })

    it('Test Home Page', function() {
        const homePage = new HomePage()
        const productsPage = new ProductsPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterprener().should('be.disabled')

        homePage.getShopTab().click()

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })

        productsPage.checkOutButton().click()
    })
})