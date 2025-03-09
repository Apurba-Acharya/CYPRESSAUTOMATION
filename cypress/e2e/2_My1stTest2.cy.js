describe ('my_firsttest_1', () => // "() =>" or function () both are equal
{
    it ('verify_title - positive', () =>
    {
        cy.visit ("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM')
    })


    it ('verify_title - negative', () =>
        {
            cy.visit ("https://opensource-demo.orangehrmlive.com/")
            cy.title().should('eq', 'ORangeHRM')
    })
})
