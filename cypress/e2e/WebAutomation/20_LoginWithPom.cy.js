import Login from "../PageObject(20_LoginWithPom)/LoginPage2_Modified.js" //import before using loginPage class

describe('pom', () => {

    // General approach
    it('LoginTest', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.get("input[placeholder='Username']").type("Admin")
      cy.get("input[placeholder='Password']").type("admin123")
      cy.get("button[type='submit']").click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    })

        // using POM :
    it('LoginTest', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")

      const ln=new Login();
      ln.setUserName("Admin");
      ln.setPassword("admin123");
      ln.clckSubmit();
      ln.verifyLogin();
    })
      

      // using pom with fixture :
    it.only('LoginTest', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")

      cy.fixture('orangehrm').then((data)=>{
        const ln=new Login();
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.clckSubmit();
        ln.verifyLogin();
      })
    })
  
  })
  