/// <reference types="Cypress" />

describe('Http reponse suite', ()=>{
    it('Http response test case', ()=>{
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        /* modifying the request url */
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
        (req) => {
        req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
            req.continue((res)=>{
                expect(res.statusCode).to.equal(403)
            })
        }).as('dummyUrl')

        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')
    })
})