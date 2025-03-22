// In cypress 4 types of Hooks are available : This hooks are comming from Mocha framework
// 1. before 2. after 3. beforeEach 4. afterEach

//In cypress mostly we will use 2 types of tags : 
// 1. skip 2. only

describe ('MyTestSuite', ()=>{

    before(()=>{ // This will execute first time once
        cy.log('*** Launch application ***');
    })

    after(()=>{ // This will execute last time once
        cy.log('*** Closing application ***')
    })
    
    beforeEach(()=>{ // This will execute 3 times before each it block
        cy.log('*** Login ***')
    })

    afterEach(()=>{ // This will execute 3 times after each it block
        cy.log('*** Logout ***')
    })

    it('search', ()=>{
        cy.log("***  searching ***");
    })

    it.skip('advanced search', ()=>{ // Tag : skip
        cy.log("***  advanced searching ***");
    })

    it.only('listing Products', ()=>{ // Tag : only
        cy.log("***  Listing products ***");
    })

})