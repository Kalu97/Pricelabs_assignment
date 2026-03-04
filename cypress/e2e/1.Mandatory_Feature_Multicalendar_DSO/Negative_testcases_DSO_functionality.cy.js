import LoginPage from '../Pages/LoginPage'
import Multicalender_DSO from '../Pages/Multicalender_DSO_page'

describe('Negative testcases for DSO Functionality', () => {
  const multicalender_dso = new Multicalender_DSO()
  const loginPage = new LoginPage()


  beforeEach(() => {
 loginPage.login()
  });
  it('Validate the DSO page Add functionality without entering date', () => {
    multicalender_dso.Select_checkbox()
    multicalender_dso.Click_apply_override()
    multicalender_dso.final_price_input_text()
    multicalender_dso.click_DSO_add_button()
    cy.contains('Please enter dates').should('be.visible')
  })
  it('Validate the Validate the DSO page Add functionality without entering price', () => {
    multicalender_dso.Select_checkbox()
    multicalender_dso.Click_apply_override()
    multicalender_dso.Validate_start_date_text()
    multicalender_dso.Select_start_date()
    multicalender_dso.Select_end_date()
    multicalender_dso.click_DSO_add_button()
    cy.contains('You need to set at least one custom pricing setting before you add.').should('be.visible')
  })

})