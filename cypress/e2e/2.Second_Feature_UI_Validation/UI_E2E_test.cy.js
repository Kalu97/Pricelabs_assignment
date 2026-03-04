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
    it('Validate the demand of Markeing occupency functionality', () => {
        const expectedTexts = ['Low Demand', 'Good Demand', 'Normal Demand', 'High Demand'];
        ui_multicalender_dso.Date_wisedata_mouseover()
        cy.wait(5000)
        ui_multicalender_dso.Base_price_text_visible_check()
        cy.contains(new RegExp(expectedTexts.join('|')))
            .should('exist')
    })
    it('Validete the toggle sync price functionality', () => {
        ui_multicalender_dso.toggle_sync_price_button_click()
        ui_multicalender_dso.error_message_div_check()
        ui_multicalender_dso.toggle_sync_price_button_click()
        ui_multicalender_dso.success_message_div_check()
    })

})