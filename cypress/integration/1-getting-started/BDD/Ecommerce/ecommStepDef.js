/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/PageObjects/HomePage'
import Products from '../../../../support/PageObjects/Products'

const homePage = new HomePage()
const productPage = new Products()
let name;

Given('I open ecommerce page', ()=>{
    cy.visit(Cypress.env('url')+'/angularpractice/')
})

When('I add items to cart', function(){
    homePage.getShopTab().click()

        this.data.product.forEach((element) => {
            cy.selectProduct(element)
        });

        productPage.getCheckoutButton().click()
})

And('validate the total prices', ()=>{
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
})

Then('select the country submit and verify thank you', ()=>{
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

When('I fill the form details', function(dataTable){
    // homePage.getEditBox().type(this.data.name)
    // homePage.getGender().select(this.data.gender)
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('validate the form behavior', function(){
    homePage.getTwoWayDataBinding().should('have.value', name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntreprenuer().should('be.disabled')
})

And('select the shop page', ()=>{
    homePage.getShopTab().click()
})