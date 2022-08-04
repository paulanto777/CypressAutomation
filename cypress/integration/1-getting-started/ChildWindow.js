describe('Child window test suite', ()=>{
    it('Child window test case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        /*prop is jquery function and we have to resolve the promise */
        cy.get('#opentab').then((e1)=>{
           const url = e1.prop('href')
           cy.visit(url)
        })
    })
})