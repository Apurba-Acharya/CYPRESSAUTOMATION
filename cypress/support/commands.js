// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// <reference types = "Cypress" /> 

//For XPath
/// <reference types="cypress-xpath"/> 

// Customize commands : Reusable purpose
Cypress.Commands.add('getIframe', (iframe)=>{
return cy.get("#mce_0_ifr") //iframe part
.its('0.contentDocument.body') //document part
.should('be.visible') //assertions part
.then(cy.wrap);
})



// Custom commands for clicking on link using label
Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click();
})

//Over write contains()
Cypress.Commands.overwriteQuery('contains',(originalFn, subject, filter, text, options = {})=>{
    if(typeof text === 'object'){
        options=text
        text=filter
        filter=undefined 
    }
    options.matchCase=false
    return originalFn(subject, filter, text, options)
})


//Custom commands for login page: 
Cypress.Commands.add("loginapp", (username,password)=>{
        cy.get("input[name='username']").type(username);
        cy.get("input[name='password']").type(password);
        cy.get(".oxd-button.oxd-button--medium").click();
})