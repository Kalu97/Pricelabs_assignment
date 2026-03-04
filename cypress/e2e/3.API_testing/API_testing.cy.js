
describe('Multicalender_Negative_testing', () => {
    const URL = 'https://pricelabs.co/signin';
    const USER = 'qa.pricelabs@gmail.com';
    const PASS = 'qg33N$yxJP';

    beforeEach(() => {
        cy.visit(URL);
        cy.get('#user_email').type(USER);
        cy.get('#password-field').type(PASS);
        cy.get('input[type="submit"]').contains(/sign\s*in/i).click();

    })
    it('GET - fetch_filter_values should return 200 and valid structure', () => {
        cy.request({
            method: 'GET',
            url: 'https://app.pricelabs.co/api/fetch_filter_values'
        }).then((res) => {
            expect(res.status).to.eq(200)
            cy.log(res)
            expect(res.body.response).to.have.property('cities')
        })
    });
    it('Invalid page_size should fallback to default value', () => {

        cy.request('/api/fetch_filter_values?page_size=invalid')
            .its('body.response.listings')
            .then((listings) => {

                expect(listings.length).to.eq(229) // default size
            })
    })

})

