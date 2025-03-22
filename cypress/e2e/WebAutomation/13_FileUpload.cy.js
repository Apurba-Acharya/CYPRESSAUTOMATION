import 'cypress-file-upload';

describe('Single File Upload', ()=>{

    it('Single File Upload', ()=>{
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get ('#file-upload').attachFile('HTTP_Status_Codes.webp');
    cy.get('.button').click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

    it('Single File Upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get ('#file-upload').attachFile({filePath:'HTTP_Status_Codes.webp', fileName:'myfile.pdf'});
        cy.get('.button').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

    it('Single File Upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get ('#drag-drop-upload').attachFile("TBBvQ3F_6pE9XJPeBRowf.png", {subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get('.dz-filename>span').contains("TBBvQ3F_6pE9XJPeBRowf.png");
    })

    it('Multiple Files Upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get ('#filesToUpload').attachFile(["TBBvQ3F_6pE9XJPeBRowf.png","HTTP_Status_Codes.webp"]);
        cy.wait(5000);
        cy.get(":nth-child(6)>strong").should('contain.text','Files You Selected:')
    })

    it.only('File upload - Shadow Dom', ()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');

        //Inside the button we needs to find out input
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("HTTP_Status_Codes.webp")
        cy.wait(5000);

        cy.get('.smart-item-name', {includeShadowDom:true}).contains('HTTP_Status_Codes.webp')
    })
})