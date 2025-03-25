describe ("Check UI ELements", ()=>{

    it.only("Checking Radio Buttons", ()=>{

        cy.visit ("https://testautomationpractice.blogspot.com/")

        // Visibility of radio buttons :
        cy.get("[id='female']").should('be.visible') //assertions
        cy.get("[id='male']").should('be.visible') //assertions

        // Selecting radio buttons :
        cy.get("[id='male']").check().should ('be.checked') //assertions
        cy.get("[id='female']").should('not.be.checked') //assertions

        cy.get("[id='female']").check().should ('be.checked') //assertions
        cy.get("[id='male']").should('not.be.checked') //assertions
    })


    it ("Checking Check boxes", ()=>{

        cy.visit ("https://testautomationpractice.blogspot.com/")

        // Visibility of checkboxes :
        cy.get("[id='sunday']").should('be.visible')
        cy.xpath("//input[@id='monday']").should('be.visible')
        cy.xpath("//input[@id='tuesday']").should('be.visible')
        cy.xpath("//input[@id='wednesday']").should('be.visible')
        cy.xpath("//input[@id='thursday']").should('be.visible')
        cy.xpath("//input[@id='friday']").should('be.visible')
        cy.xpath("//input[@id='saturday']").should('be.visible')

        // Selecting single checkbox : Monday
        cy.xpath("//input[@id='monday']").check().should('be.checked')

        // Unselecting the checkbox :
        cy.xpath("//input[@id='monday']").uncheck().should('not.be.checked')

        // Selecting all the checkboxes :
        // In cypress we don't have seperate findElements and findElement
        //cy.get("input.form-check-input[type='checkbox']").check().should('be.checked') // Using CSS Selector
        cy.xpath("//div[@class='form-group'][4]//input[@type='checkbox']").check().should('be.checked') // Using xpath

        //Uncheck all checkboxes :
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //Checked first and last checkbox :
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

        //Check a specific checkbox :
        cy.get("input.form-check-input[type='checkbox']").eq(3).check().should('be.checked')
    })
})