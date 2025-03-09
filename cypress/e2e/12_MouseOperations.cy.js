import 'cypress-iframe' //for iframe
require ('@4tw/cypress-drag-drop') //for drag and drop

describe("Mouse Operations", ()=>{

    it("MouseHover", ()=>{
        cy.visit("https://demo.opencart.com.gr/");
        cy.get("a[href='https://demo.opencart.com.gr/index.php?route=product/category&path=20_27']").should('not.be.visible');
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mouseover').click();
        cy.get("a[href='https://demo.opencart.com.gr/index.php?route=product/category&path=20_27']").should('be.visible');

    })

    it("Right Click", ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        // //Approach 1:
        // cy.get(".context-menu-one.btn.btn-neutral") //find this css selctor from inspect
        // .trigger('contextmenu');
        // cy.get(".context-menu-icon-copy").should('be.visible');

        //Approach 2:
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get(".context-menu-icon-copy").should('be.visible');
    })

    it("double click", ()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.get("#runbtn").click();
        cy.frameLoaded('#iframeResult');
        
        // //Approach 1: using trigger('dblclick')
        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        // cy.iframe('#iframeResult').find("input[type='text']:nth-of-type(2)").should('have.value', 'Hello World!');

        //Approach 2: using dblclick()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find("input[type='text']:nth-of-type(2)").should('have.value', 'Hello World!'); //text validation

    })

    it("drag and drop", ()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.wait(3000)
        cy.get("#box6").drag("#box106", {force:true});
        
    })

    it.only("scrolling page", ()=>{
        cy.visit('https://www.awwwards.com/websites/scrolling/');

        cy.wait(5000)
        cy.get("img[alt='Refuseniks & Activists']").scrollIntoView({duration:2000});
        cy.get("img[alt='Refuseniks & Activists']").should('be.visible')

        cy.wait(5000)
        cy.get("img[alt='Diorama']").scrollIntoView({duration:2000});
        cy.get("img[alt='Diorama']").should('be.visible')

        cy.wait(5000)
        cy.get("img[alt='Cyd Stumpel | Portfolio 2025']").scrollIntoView({duration:2000});
        cy.get("img[alt='Cyd Stumpel | Portfolio 2025']").should('be.visible')

        
        cy.wait(5000)
        cy.get("#footer").scrollIntoView({duration:2000});
        cy.get("#footer").should('be.visible')
    })
})