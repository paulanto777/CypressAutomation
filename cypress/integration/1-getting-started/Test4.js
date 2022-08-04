describe('Fourth suite', () => {
    it('Fourth test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        /* Triggering an event - open alert box to capture the text */
        cy.on('window:alert', (str)=>{
            expect(str).equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>{
            expect(str).equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')
    })
})