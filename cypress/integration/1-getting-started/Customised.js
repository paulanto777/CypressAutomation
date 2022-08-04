describe('Customised suite', ()=>{
    var value;

    before(function(){
        cy.fixture('data').then(function(data){
            value = data
        })
    })

    it('Customised testcase', ()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()

        /* Calling the customised method from command.js in support folder */
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')

        /* Calling an array from data json */
        value.product.forEach((element) => {
            console.log(element)
            cy.selectProduct(element)
        });

    })
})