describe('MyTestSuite', ()=>{

    it('DataDrivenTest', ()=>{
        cy.fixture('orangehrm2').then((data)=>{

        cy.visit ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        data.forEach((userdata)=>{
            cy.get("input[name='username']").type(userdata.username);
            cy.get("input[name='password']").type(userdata.password);
            cy.get("button[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should ('have.text',userdata.expected); //for successfull login

            cy.wait(7000);
            
            if(userdata.username=='Admin' && userdata.password=='admin123'){
                cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should ('have.text',userdata.expected); //for successfull login

                //logout :
                cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
                cy.get("a[href='/web/index.php/auth/logout']").click();
        
            }else{
                cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").should('have.text', userdata.expected)
            }

        })
        })
    })
})
