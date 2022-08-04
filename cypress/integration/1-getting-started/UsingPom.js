/* for auto suggestion to be available */
/// <reference types="Cypress" />

import HomePage from '../../support/PageObjects/HomePage'
import Products from '../../support/PageObjects/Products'

describe('Hooks suite', ()=>{
    var value;

    before(function(){
        cy.fixture('data').then(function(data){
            value = data
        })
    })

    after(function(){

    })

    it('Hooks test case', ()=>{
        /* Creating object for homepage */
        const homePage = new HomePage()
        const productPage = new Products()

        cy.visit(Cypress.env('url')+'/angularpractice/')

        homePage.getEditBox().type(value.name) /* cy.get(':nth-child(1) > .form-control').type(value.name) */
        homePage.getGender().select(value.gender) /* cy.get('select').select(value.gender) */
        homePage.getTwoWayDataBinding().should('have.value', value.name) /* cy.get(':nth-child(4) > .ng-untouched').should('have.value', value.name) */
        homePage.getEditBox().should('have.attr', 'minlength', '2') /* cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2') */
        homePage.getEntreprenuer().should('be.disabled') /*cy.get('#inlineRadio3').should('be.disabled') */
        homePage.getShopTab().click()

        value.product.forEach((element) => {
            cy.selectProduct(element)
        });

        productPage.getCheckoutButton().click()

        var sum=0;
        productPage.getProductSum().each(($el, index, $list)=>{
            const currencyText = $el.text()
            var res = currencyText.split(" ")
            res = res[1].trim()
            sum=Number(sum)+Number(res)
        }).then(()=>{
            cy.log(sum)
        })

        productPage.getTotal().then((element)=>{
            const totalSum = element.text()
            var total = totalSum.split(" ")
            total = total[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        productPage.getConfirmCheckoutButton().click({ multiple: true })
        /* for a specific test case timeout can be defined */
        Cypress.config('defaultCommandTimeout', 20000)
        productPage.getCountryTextbox().type('India')
        productPage.getValueFromDropdown().click()
        Cypress.config('defaultCommandTimeout', 8000)
        productPage.getCheckbox().click({force: true})
        // productPage.getTermsConditions().click()
        productPage.getPurchaseButton().click()
        // productPage.getAlertMessage().should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        productPage.getAlertMessage().then((element)=>{
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })
    })
})