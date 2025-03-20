describe('Custom commands', ()=>{

    it('Handling links', ()=>{
        cy.visit("https://www.awwwards.com/websites/e-commerce/");
        cy.get("a[title='Show details for Apple MacBook Pro']").click();
        cy.get('.product-name>h1').should('have.text', 'Apple MacBook Pro');

    })

    it('Overwrite existing command', ()=>{


    })

    it('Login command', ()=>{


    })
})