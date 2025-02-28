describe('Handle Tables', (()=>{

    beforeEach('Login', ()=>{
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
        // cy.get('#input-username').type('demo');
        // cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();
        cy.wait(7000)
        //cy.get(".btn-close").click()

        cy.get("#menu-customer>a").click(); //customers main menu
        cy.get("#collapse-5>li:nth-of-type(1)>a").click()
        
    })


    it('Check Number Rows & Columns', ()=>{
        cy.get(".table-hover>tbody>tr").should('have.length', '10')
        cy.get(".table-hover>thead>tr>td").should('have.length', '6')

    })


    it('Check cell data from specific row & Column', ()=>{
        cy.get(".table-hover>tbody>tr:nth-of-type(5)>td:nth-of-type(3)").contains("leduyquan25741244@gmail.com")
    })


    it('Read all the rows & columns data in the first page', ()=>{

        cy.get(".table-hover>tbody>tr").each(($row, index, $rows)=>{ // row: current row || index: index of the row || rows: all the rows 
            
            cy.wrap($row).within(()=>{

                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })

            })
        })
    })
   

    it.only('Pagination', ()=>{

        // //find the total number of pages
        // let totalPages;
        // cy.get(".col-sm-6.text-end").then((e)=>{ // e= element
        //     let mytext = e.text(); //Showing 1 to 10 of 18879 (1888 Pages)
        //     totalPages = mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("Pages")-1)
        //     cy.log("Total number of pages in a table ==>"+totalPages)
        // })

        //get the data from the table :

        let totalPages=5;
        for(let p=1; p<=totalPages; p++){
                if (totalPages>1){
                    cy.log("Active page is ==> "+p);

                    cy.get("div[class='col-sm-6 text-start']>ul>li:nth-of-type("+p+")").click();
                    cy.wait(3000)
                    cy.get(".table-hover>tbody>tr").each(($row, index, $rows)=>{ // row: current row || index: index of the row || rows: all the rows 
                        cy.wrap($row).within(()=>{
                            cy.get('td:nth-of-type(3)').then((e)=>{
                                cy.log(e.text()); // Only email
                            })
                        })
                    })    
                }
        }
    })

}))