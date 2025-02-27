describe('Handle Tables', (()=>{

    beforeEach('Login', ()=>{
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
        // cy.get('#input-username').type('demo');
        // cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();
        cy.wait(7000)
        //cy.get(".btn-close").click()

        cy.get("#menu-customer>a").click(); //customers main menu
        cy.get("#collapse-5>li:nth-of-type(1)>a").click()
        
    })

    it.skip('Check Number Rows & Columns', ()=>{
        cy.get(".table-hover>tbody>tr").should('have.length', '10')
        cy.get(".table-hover>thead>tr>td").should('have.length', '6')

    })

    it('Check cell data from specific row & Column', ()=>{
        cy.get(".table-hover>tbody>tr:nth-of-type(5)>td:nth-of-type(3)").contains("leduyquan25741244@gmail.com")
    })

}))