/// <reference types="Cypress" />

describe('Second test suite', function(){
      it('Test case One', function(){
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            cy.get('.search-keyword').type('ca')
            cy.wait(2000)
            /* parent child binding - will look only within the parent*/
            cy.get('.products').as('productLocator') /* alias to cy.get('.products') is cy.get('@productLocator') */
            /* iteration - cy.get('ul>li').each(($el, index, $list) */
            cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
                const textVeg = $e1.find('h4.product-name').text()
                if(textVeg.includes('Cashews')){
                    cy.wrap($e1).find('button').click()
                }
            })

            cy.get('.cart-icon > img').click()
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.contains('Place Order').click()
      })
  })