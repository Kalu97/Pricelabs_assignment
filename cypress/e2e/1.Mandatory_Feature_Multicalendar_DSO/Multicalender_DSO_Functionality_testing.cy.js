import LoginPage from '../Pages/LoginPage'
import Multicalender_DSO from '../Pages/Multicalender_DSO_page'

describe('Multicalender_DSO_Functionality_testing.cy', () => {
  const multicalender_dso = new Multicalender_DSO()
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.login()
  });
  it('Validate the apply override and DSO Price setting page is visible', () => {
    cy.wait(6000)
    multicalender_dso.Select_checkbox()
    multicalender_dso.Click_apply_override()
    multicalender_dso.Validate_DSO_tittle()

  })
  it('Validate the start date and end date correctly', () => {
    multicalender_dso.Select_checkbox()
    multicalender_dso.Click_apply_override()
    multicalender_dso.Validate_start_date_text()
    multicalender_dso.Select_start_date()
    multicalender_dso.Select_end_date()
  })

})