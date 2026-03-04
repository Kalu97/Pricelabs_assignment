  import Multicalender_DSO from '../Pages/Multicalender_DSO_page'
import LoginPage from '../Pages/LoginPage'

describe('Multicalender_DSO_E2E_testing', () => {
  const multicalender_dso = new Multicalender_DSO()
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.login()
  });
  it('E2E Validate the price setting is visible and can be editable', () => {
    multicalender_dso.Select_checkbox()
    multicalender_dso.Click_apply_override()
    multicalender_dso.Validate_start_date_text()
    multicalender_dso.Select_start_date()
    multicalender_dso.Select_end_date()
    multicalender_dso.final_price_input_text()
    multicalender_dso.min_price_input_column()
    multicalender_dso.max_price_input_column()
    multicalender_dso.base_price_input_column()
    multicalender_dso.minimum_stay_restriction_input_column()
    multicalender_dso.click_DSO_add_button()
    multicalender_dso.click_DSO_update_button()

  })
    it('Validate the editing of Base and check save and refresh functionality', () => {

      multicalender_dso.search_listing_input_text() 
      multicalender_dso.search_price_input_text()
      multicalender_dso.Save_and_refresh_button_click() 
      multicalender_dso.search_text_data_visible_check()
    });
})