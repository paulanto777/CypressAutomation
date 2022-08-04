describe('API testing suite', ()=>{
    it('API test case', ()=>{
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
                "book_name": "Learn Appium Automation with Java",
                "isbn": "sdf",
                "aisle": "23011",
                "author": "John Foe"
        }).then(function(response){
            expect(response.status).to.eq(200)
         //    expect(response.body).to.have.property('Msg', 'successfully added')
         })
    })
})