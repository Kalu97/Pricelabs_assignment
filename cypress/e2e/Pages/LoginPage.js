class LoginPage {

  constructor() {
    this.email = 'qa.pricelabs@gmail.com'
    this.password = 'qg33N$yxJP'
    this.url = 'https://pricelabs.co/signin'
  }

  login() {

    cy.visit(this.url)

      cy.get('#user_email').type(this.email)
      cy.get('#password-field').type(this.password)

      cy.get('input[type="submit"]')
        .contains(/sign\s*in/i)
        .click()

      cy.url().should('include', '/multicalendar')
    
  }
}

export default LoginPage