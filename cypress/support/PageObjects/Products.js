class Products{
    getCheckoutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    getConfirmCheckoutButton(){
        return cy.get(':nth-child(5) > .btn')
    }

    getCheckbox(){
        return cy.get('#checkbox2')
    }

    getTermsConditions(){
        return cy.get('.nsm-dialog-animation-fade > .btn')
    }

    getCountryTextbox(){
        return cy.get('#country')
    }

    getValueFromDropdown(){
        return cy.get('.suggestions > ul > li > a')
    }

    getPurchaseButton(){
        return cy.get('input[type="submit"]')
    }

    getAlertMessage(){
        return cy.get('.alert')
    }

    getProductSum(){
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotal(){
        return cy.get('h3 strong')
    }
}

export default Products