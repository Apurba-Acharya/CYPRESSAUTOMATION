//const cypress = required ("cypress")



describe("CSSLocators", () =>{

    it("CSS", () =>{

        cy.visit ("http://www.automationpractice.pl/index.php");

        //cy.get ("#search_query_top").type("T-Shirts") //css selector - id
        //cy.get (".search_query").type("T-Shirts") //css selector - class
        //cy.get ("[name='search_query']").type("T-Shirts") //css selector - attribute

        cy.get ("input.search_query[name='search_query']").type("T-Shirts") //css selector - tag class attribute


        cy.get("button[name='submit_search']").click()

        cy.get (".lighter").contains("T-Shirts")    //Assertion


    })
})