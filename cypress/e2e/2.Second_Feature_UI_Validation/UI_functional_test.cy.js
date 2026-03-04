import UI_Testing from "../Pages/UI_Testing";
import Multicalender_DSO from '../Pages/Multicalender_DSO_page'
import LoginPage from '../Pages/LoginPage'

describe('Multicalender_DSO_E2E_testing', () => {
    const ui_multicalender_dso = new UI_Testing()
    const multicalender_dso = new Multicalender_DSO()
    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.login()
    });
    
    it('Validate the selects Price sync on from quick filter', () => {
        ui_multicalender_dso.url_validation_check()
        ui_multicalender_dso.select_quick_filter()
        ui_multicalender_dso.click_price_sync_on()
    });
    it('Validate the Search Listing functionality', () => {
        ui_multicalender_dso.search_listing_input_text()
        ui_multicalender_dso.search_text_data_visible_check()
    })

    it('Validete the toggle sync price functionality', () => {
        ui_multicalender_dso.toggle_sync_price_button_click()
        ui_multicalender_dso.error_message_div_check()
        cy.wait(6000)
        ui_multicalender_dso.toggle_sync_price_button_click()
        ui_multicalender_dso.success_message_div_check()
    })
})