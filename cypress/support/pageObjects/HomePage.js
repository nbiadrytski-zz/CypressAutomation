class HomePage {

    getEditBox() {  // name field
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding() {
        // 'Two-way Data Binding example:' field has 'Bob' value
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender() {
        return cy.get('select')
    }

    getEnterprener() {  // radio button
        return cy.get('#inlineRadio3')
    }

    getShopTab() {  // shop button
        return cy.get(':nth-child(2) > .nav-link')
    }

}

// export will make available HomePage to all other files
export default HomePage;
