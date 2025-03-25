describe('assertions d', ()=>{

    it('assertion it', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("[id='female']").should("be.visible")
        cy.get("").should("be.visible")
        cy.get("").check().should("be.checked")
        cy.get("").should("not.be.checked")
        cy.get("").uncheck().should("not.be.visible")
        cy.get("").eq(4).check().should("be.checked")

    })
})