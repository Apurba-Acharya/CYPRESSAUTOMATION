class login{
    setUserName(Username){
        cy.get("input[placeholder='Username']").type(Username);
    }

    setPassword(password){
        cy.get("input[placeholder='Password']").type(password);
    }

    clckSubmit(){
        cy.get("button[type='submit']").click();
    }

    verifyLogin(){
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    }
}

export default login; // to export a class in javascript