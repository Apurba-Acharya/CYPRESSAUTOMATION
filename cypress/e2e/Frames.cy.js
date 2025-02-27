import 'cypress-iframe' // > for approach-3 : Using cypress iframe plugin

describe('handling frames', ()=>{

    it('approach-1', ()=>{ //frame is changing but existing text is not geeting clear and new text also not enter.
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get("div[aria-label='Close'] svg").click()

        const iframe=cy.get("#mce_0_ifr") //iframe part
        .its('0.contentDocument.body') //document part
        .should('be.visible') //assertions part
        .then(cy.wrap);

        iframe.clear().type("welcome {ctrl+a}");
        cy.get("button[title='Bold']").click();
    })


    it('approach-2 : Using custom commands', ()=>{ //frame is changing but existing text is not geeting clear and new text also not enter.
        cy.visit("https://the-internet.herokuapp.com/iframe")

        //getIframe : this is comming from commands.js custom commands file
        cy.getIframe('#mce_0_ifr').clear().type("welcome {ctrl+a}");
        cy.get("button[title='Bold']").click();
    })


    it.only('approach-3 : Using cypress iframe plugin', ()=>{ //frame is changing but existing text is not geeting clear and new text also not enter.
        cy.visit("https://the-internet.herokuapp.com/iframe")
        
        cy.frameLoaded ('#mce_0_ifr'); // Load the frame
        cy.iframe('#mce_0_ifr').clear().type("welcome") // Intracting the frame
    })
    
})
