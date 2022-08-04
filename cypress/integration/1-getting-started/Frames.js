/* for auto suggestion to be available */
/// <reference types="Cypress" />

/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Frames suite', ()=>{
    it('Frames test case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        /* to navigate to a frame */
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
    })
})