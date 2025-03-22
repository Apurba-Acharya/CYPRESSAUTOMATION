describe("API Testing", () => {
    it("Approach 1 - Hardcoded JSON Object", () => {
        const requestBody = {
            firstname: "Chutki",
            lastname: "Jaggu",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
        };
        
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: requestBody,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {

            // Generate Response log :
            cy.log(JSON.stringify(response.body));

            // Ensure response status is correct :
            expect(response.status).to.eq(200);

            // Extract the actual booking details from response :
            const booking = response.body.booking;  

            expect(booking.firstname).to.eq("Chutki");
            expect(booking.lastname).to.eq("Jaggu");
            expect(booking.totalprice).to.eq(111);
        });
    });



    it("Approach 2 - Dynamically generating JSON Object", () => {
        const requestBody = {
            firstname: Math.random().toString(5).substring(2),
            lastname: Math.random().toString(5).substring(2)+"@gmail.com",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
        };
        
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: requestBody,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {

            // Generate Response log :
            cy.log(JSON.stringify(response.body));

            // Ensure response status is correct :
            expect(response.status).to.eq(200);

            // Extract the actual booking details from response :
            const booking = response.body.booking;  

            expect(booking.firstname).to.eq(requestBody.firstname);
            expect(booking.lastname).to.eq(requestBody.lastname);
            expect(booking.totalprice).to.eq(requestBody.totalprice);
        });
    });



    it.only("Approach 3 - using Fixture", () => {

        cy.fixture('tourist').then((data)=>{
            const requestBody=data;

            cy.request({
                method: 'POST',
                url: 'https://restful-booker.herokuapp.com/booking',
                body: requestBody,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
    
                // Generate Response log :
                cy.log(JSON.stringify(response.body));
    
                // Ensure response status is correct :
                expect(response.status).to.eq(200);
    
                // Extract the actual booking details from response :
                const booking = response.body.booking;  
    
                expect(booking.firstname).to.eq(requestBody.firstname);
                expect(booking.lastname).to.eq(requestBody.lastname);
                expect(booking.totalprice).to.eq(requestBody.totalprice);

                expect(response.body).has.property('lastname',requestBody.lastname)
            });

        })
           
    });

});
