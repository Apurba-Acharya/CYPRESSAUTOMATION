//const cypress = required ("cypress")

describe("CSSLocators", () =>{

    it("CSS 1 : ID: htmltag#id || #id", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get ("input#search_query_top").type("Trouser")
    })


    it("CSS 2: CLASS: htmltag.classname || htmltag.c1.c2.c3...cn || .classname || .c1.c2.c3...cn", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get ("input.search_query").type("T-Shirts"); // input.search_query.form-control.ac_input
    })


    it("CSS 3: css selector using multiple one tagname and multiple id and value", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get("input.search_query.form-control.ac_input#search_query_top").type("Shirt")
    })


    it("CSS 4: htmltag[id='value']", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get("a[class='login']").click();
    })


    it("CSS 5: css locator using multiple attribute", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get("input[id='search_query_top'][name='search_query']").type("VSCode")
    })


    it("CSS 6: cantains in css locators", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get("input[class*='search']").type("DellTech")
    })


    it("CSS 7: starting the text in css locators", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get("input[class^='sear']").type("HpTechnology")
    })


    it("CSS 8: ending the text in css locators", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get("input[id$='top']").type("LenovoSlim")
    })


    it("CSS 9: comma the text in css locators", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get("input.search_query,input#search_query_top").type("LenovoSlim")
    })


    it("CSS 10: nth-of-type in css locators", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get("div#htmlcontent_home>ul>li:nth-of-type(3)").click();
    })

    it("CSS 11: Sibling in css locators", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get("div.block_content>ul>li:nth-of-type(1)+li+li").click();
    })

    it("CSS 12: contains() in css locators", () =>{
        cy.visit ("http://www.automationpractice.pl/index.php");
        cy.get("a[title*='Wom']").click();
    })

})