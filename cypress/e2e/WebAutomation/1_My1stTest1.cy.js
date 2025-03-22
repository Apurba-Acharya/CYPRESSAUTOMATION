const { expect } = require("chai");
const { describe } = require("mocha");

describe ('my_firsttest_1', () => // "() =>" or function () both are equal
{
    it ('test1', () =>
    {
        
        expect(true).to.equal(true)
    })

    it ('test2', () =>
        {
            expect(true).to.equal(true)
    })

    it ('test2', () =>
        {
            expect(true).to.equal(true)
    })

})

describe ('my_firsttest_2', function()
{
    it ('test1', () =>
    {
        expect(true).to.equal(true)
    })
})