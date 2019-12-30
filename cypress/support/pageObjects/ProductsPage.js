class ProductsPage {

    checkOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
}

// export will make available HomePage to all other files
export default ProductsPage;
