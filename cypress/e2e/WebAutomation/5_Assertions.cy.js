
describe ('Assertions demo', ()=>{

    it('Imlicit assertions', ()=>{
        cy.visit ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        //should || and

        cy.url().should('include', 'orangehrmlive.com')

        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // eq = exactly equal to
        // cy.url().should('contain', 'orangehrm')

        // //Instead of use "cy.url()" multiple time we can write like :
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orangehrm')

        //Instead of use ".should()" multiple time we can write like :
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
  
        .and('not.eq', 'https://opensource-demo.greenhrmlive.com/web/index.php/auth/login')
        .and('not.contain', 'greenhrm')


        cy.title().should('include', 'Orange').and('eq', 'OrangeHRM').and('contain', "HRM")


        // Logo validation :
        cy.get('.orangehrm-login-branding > img').should('be.visible') // logo visible
        .and('exist') // or : cy.get('.orangehrm-login-branding > img').should('exist') // logo exists

        // capture number pf links from the web page :
        cy.xpath("//a").should('have.length', '5')

        //Provide value into inputbox
        cy.xpath("//input[@placeholder='Username']").type("Admin")
        cy.xpath("//input[@placeholder='Username']").should('have.value', 'Admin')

    })

    it('Explicit assertions', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
    
        let expName = "mandaTest 70Test 69 user"; 
        let invaName = "70Test";

        cy.get(".oxd-userdropdown-name").then((x) => {

            let actName = x.text().trim(); // Ensure no extra spaces
        
            //BDD style :
            expect(actName).to.equal(expName); // This will fail if values don't match
            expect(actName).to.not.equal(invaName); // This contradicts the above

            //TDD style :
            assert.equal(actName, expName)
            assert.notEqual (actName, invaName)

        });
    });

})