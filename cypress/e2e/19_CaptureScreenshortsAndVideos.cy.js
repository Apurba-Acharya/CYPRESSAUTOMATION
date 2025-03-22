describe('mysuite',()=>{

//npx cypress run --spec cypress\e2e\19_CaptureScreenshortsAndVideos.cy.js >> Only needs to run in va code terminal

    it('Capture screenshorts & videos', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.get("button[type='submit']").click();

        // cy.screenshot("homepage"); //screenshot of entaire page
        // cy.get('.oxd-brand-banner > img').screenshot("logo"); //screenshot of a targeted element


        // Automatically capture screenshort & video on failure - only when execue through CLI
        cy.get("a[href='/web/index.php/pim/viewMyDetails']>span").click();
        cy.get(".orangehrm-edit-employee-name>h6").should('have.text', 'Giang Nguyen');
        
    })
})