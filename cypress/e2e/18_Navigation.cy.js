describe('mysuite', ()=>{

    it('NavigationTest', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.get("button[type='submit']").click();
        cy.title().should('eq', "OrangeHRM");
        cy.get("a[href='/web/index.php/pim/viewMyDetails']>span").click();
        cy.get(".orangehrm-edit-employee-name>h6").should('have.text', 'Giang Nguyen');

        cy.go('back'); //go back to homepage // another one : cy.go(-1)
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)").should('have.text', 'Time at Work')

        cy.go('forward'); //forward // another one : cy.go(1)
        cy.get(".orangehrm-edit-employee-name>h6").should('have.text', 'Giang Nguyen');

        cy.reload();
    })
})