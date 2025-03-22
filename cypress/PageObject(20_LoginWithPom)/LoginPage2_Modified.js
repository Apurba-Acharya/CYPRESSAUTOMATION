class login{

    txtUserName="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSumbmit="button[type='submit']";
    lblmsg='.oxd-topbar-header-breadcrumb > .oxd-text';


    setUserName(Username){
        cy.get(this.txtUserName).type(Username);
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }

    clckSubmit(){
        cy.get(this.btnSumbmit).click();
    }

    verifyLogin(){
        cy.get(this.lblmsg).should('have.text', 'Dashboard');
    }
}


export default login; // to export a class in javascript