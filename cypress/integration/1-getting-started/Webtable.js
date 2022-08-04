describe('Webtable suite', ()=>{
    it('Webtable test case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr td:nth-child(2)').each(($e1, index, list)=>{
            const text = $e1.text()
            if(text.includes('Python')){

                /* text() is not cypress we can't directly use text() on cypress and have to resolve the promise */
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})