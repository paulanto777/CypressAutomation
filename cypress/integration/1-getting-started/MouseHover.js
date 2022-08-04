describe('Mouse hover suite', ()=>{
    it('Mouse hover testcase', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        /* using jquery to open the mousehover since cypress does not have any functions */
        // cy.get('.mouse-hover-content').invoke('show')

        /* searches for the top value in the mouse hover and clicks on it */
        // cy.contains('Top').click()

        /* force clicking on the hidden element without using show from jquery */
        cy.contains('Top').click({force: true})

        /* ensure the url contains the word top */
        cy.url().should('include', 'top')

    })
})