
describe ('Alerts', ()=>{

    //Cypress automatically closed alert window by using ok button : default behaviour

    //1. Javascript alerts : It will have some text and an 'OK' button
    it('JS alerts', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("[onclick='jsAlert()']").click();

        //Assertions 1 :
        cy.on ('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert');

        })

        //Assertions 2 :
        // Alert window automatically closed by cypress
        cy.get("#result").should('have.text', 'You successfully clicked an alert')

    })

    //2. Javascript confirmation alert : It will have some text with a text box for user input along with 'OK' and 'cancel' button
    it('JS confirm alerts - Ok button', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("[onclick='jsConfirm()']").click();

        cy.on ('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })
        cy.get("#result").should('have.text', 'You clicked: Ok')
    })

    it('JS confirm alerts - Cancel button', ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("[onclick='jsConfirm()']").click();

        cy.on ('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })

        cy.on('window:confirm', ()=> false); //Cancel button
        cy.get("#result").should('have.text', 'You clicked: Cancel')
    })

   // 3. Javascript input box alert : It will have some text with a text box for user input along with Ok and Cancel button
   it('JS promt alerts - Ok button', ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win)=>{
        cy.stub(win, 'prompt').returns('welcome');
    })
    cy.get("[onclick='jsPrompt()']").click();

    //cupress will close utomatically promted alert - by using Ok button - by default

    cy.get("#result").should ('have.text', 'You entered: welcome')
    
})

    // 4. Authenticated Alert :
    it.only('Authenticated Alert', ()=>{

    //Approach 1 :
    cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth: {username: "admin", password: "admin"}});
    cy.get("div[class='example']>p").should ('have.contain', "Congratulations")

    //Approach 2 :
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("div[class='example']>p").should ('have.contain', "Congratulations")
})

})