beforeEach(function(){
    cy.fixture('data').then(function(data){
        this.data = data
    })
})