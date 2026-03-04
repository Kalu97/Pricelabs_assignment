import UI_Testing from "../Pages/UI_Testing";
import Multicalender_DSO from '../Pages/Multicalender_DSO_page'
import LoginPage from '../Pages/LoginPage'

describe('Multicalender_Negative_testing', () => {
    const ui_multicalender_dso = new UI_Testing()
    const multicalender_dso = new Multicalender_DSO()
    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.login()
 });
    
    it('Validate Average nightly rate cannot be greater than Maximum nightly rate', () => {
        multicalender_dso.search_listing_input_text()
        ui_multicalender_dso.Search_price_input_Average_nightly_rate_exceed_text()
        ui_multicalender_dso.Average_nightly_rate_exceed_text_check()

    })
    it('Validete the Base value should not be greater than 999999', () => {
        multicalender_dso.search_listing_input_text()
        ui_multicalender_dso.search_price_input_exceed_text()
        ui_multicalender_dso.error_check_for_greater_value_text()
    })

})