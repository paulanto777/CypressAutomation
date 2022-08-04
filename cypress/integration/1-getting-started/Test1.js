/// <reference types="Cypress" />

describe('Test suite', function(){
      it('Test case One', function(){
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            cy.get('.search-keyword').type('ca')
            cy.wait(2000)
            cy.get('.product:visible').should('have.length', 4)
            /* parent child binding - will look only within the parent*/
            cy.get('.products').as('productLocator') /* alias to cy.get('.products') is cy.get('@productLocator') */
            cy.get('@productLocator').find('.product').should('have.length', 4)
            /* choose one element from the list */
            cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
                console.log("Printing inside log")
            })

            /* iteration - cy.get('ul>li').each(($el, index, $list) */
            cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
                const textVeg = $e1.find('h4.product-name').text()
                if(textVeg.includes('Cashews')){
                    cy.wrap($e1).find('button').click()
                }
            })

            cy.get('.brand').should('have.text', "GREENKART")
            cy.get('.brand').then((logoElement)=>{
                cy.log(logoElement.text())
            })
      })
  })