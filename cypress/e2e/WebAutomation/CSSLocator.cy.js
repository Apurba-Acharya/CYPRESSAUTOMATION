//const cypress = required ("cypress")

describe("CSSLocators", () =>{

    it("CSS 1", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");

        //ID: htmltag#id || #id
        cy.get ("input#search_query_top").type("Trouser")
    })

    it("CSS 2", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");

        //CLASS: htmltag.classname || htmltag.c1.c2.c3...cn || .classname || .c1.c2.c3...cn
        cy.get ("input.search_query").type("T-Shirts"); // input.search_query.form-control.ac_input
    })

    it("CSS 3", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");

        //css selector using multiple one tagname and multiple id and value :
        cy.get("input.search_query.form-control.ac_input#search_query_top").type("Shirt")
    })

    it("CSS 4", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");

        //htmltag[id='value']
        cy.get("a[class='login']").click();
    })

    it("CSS 5", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");

        //css locator using multiple attribute :
        cy.get("input[id='search_query_top'][name='search_query']").type("VSCode")
    })

    it("CSS 6", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");

        //cantains in css locators :
        cy.get("input[class*='search']").type("DellTech")
    })

    it("CSS 7", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");

        //starting the text in css locators :
        cy.get("input[class^='sear']").type("HpTechnology")
    })

    it("CSS 8", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");

        //ending the text in css locators :
        cy.get("input[id$='top']").type("LenovoSlim")
    })

    it("CSS 9", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");

        //comma the text in css locators :
        cy.get("input.search_query,input#search_query_top").type("LenovoSlim")
    })


    it("CSS 10", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");

        //nth-of-type in css locators :
        cy.get("div#htmlcontent_home>ul>li:nth-of-type(3)").click();
    })

    it("CSS 10", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");

        //nth-of-type in css locators :
        cy.get("").click();

        //3. parenttag > childtag

        //cy.get ("[name='search_query']").type("T-Shirts") //css selector - attribute

        cy.get ("input.search_query[name='search_query']").type("T-Shirts") //css selector - tag class attribute

        cy.get("button[name='submit_search']").click()

        cy.get (".lighter").contains("T-Shirts")    //Assertion
    })
})