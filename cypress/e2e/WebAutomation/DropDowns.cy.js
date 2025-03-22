describe("handle dropdowns", ()=>{

    it.skip("Dropdown with select", ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country").select('Morocco').should('have.value', 'Morocco')
    })


    it.skip("Dropdown without select", ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()

        cy.get("input[role='combobox']").type("Saint Kitts and Nevis").type('{enter}')

        cy.get("#select2-billing_country-container").should('have.text', 'Saint Kitts and Nevis') //Assertions

    })


    it.skip("Auto suggest Dropdown", ()=>{

        cy.visit("https://www.wikipedia.org/")

        cy.get("#searchInput").type("Delhi")
        
        cy.wait (5000)

        cy.get(".suggestion-title").contains("Delhi University").click()  //Assertions

    })


    it("Dynamic dropdown", ()=>{

        cy.visit("https://www.google.com/")

        cy.get("#APjFqb").type("cypress automation")

        cy.wait(3000)
        
        cy.get('div.wM6W7d>span').should('have.length', 13)

        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text() == 'cypress automation example'){
                cy.wrap($el).click()
            }
        })

        cy.get("[aria-controls='Alh6id']").should('have.value', "cypress automation example")

    })
})