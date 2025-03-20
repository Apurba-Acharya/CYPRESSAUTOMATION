// *** This file is incomplete ***

describe('Custom commands', ()=>{

    it('Handling links', ()=>{
        cy.visit("https://www.awwwards.com/websites/e-commerce/");
        cy.get("a[aria-label='Soscale']>img").click();

        // direct - without using custom command :
        // cy.get('.c-heading__middle>h1>a').should('have.text', 'Soscale');

        //Using custom commands :
        cy.clickLink("Soscale")

    })

    it('Overwrite existing command', ()=>{
        cy.visit("https://www.awwwards.com/websites/e-commerce/");
        cy.get("a[aria-label='Soscale']>img").click();
        cy.clickLink("SOScale")
    })


//Login app custom commands :
    it.only('Login command', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.loginapp("Admin","admin123");
        cy.get('.oxd-topbar-header-breadcrumb>h6').should('have.text', 'Dashboard')
    })
})