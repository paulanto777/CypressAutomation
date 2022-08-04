/* for auto suggestion to be available */
/// <reference types="Cypress" />

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
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1) > .form-control').type(value.name)
        cy.get('select').select(value.gender)
        
        /*Verifying text - another way. Other way is $e1.text() */
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', value.name)

        /* verify the minlength attribute value */
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')

        /* if the radio button is disabled */
        cy.get('#inlineRadio3').should('be.disabled')
    })
})