describe('Handle tab', ()=> {

    it.skip('approach-1', ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        
        cy.get('.example>a').invoke('removeAttr', 'target').click(); // clicking on link

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') //Assertion
        cy.wait(5000)

        //back to parent tab :
        cy.go('back');
    }) 

    it('approach-2', ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example>a').then((e)=>{

            let url = e.prop('href');

            cy.visit(url);
        })
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') //Assertion
        cy.wait(5000)

        //back to parent tab :
        cy.go('back');
    })
})