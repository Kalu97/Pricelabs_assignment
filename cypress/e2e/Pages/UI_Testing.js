class UI_Testing {
    quick_filter_button = 'button[class="chakra-button chakra-menu__menu-button css-u8glrw"]'
    price_sync_on_button = '#qf-listing-sync-on-button'
    search_listing_input = '#mc-search-listing'
    search_listing_text = 'p[class="chakra-text css-1kh6bo9"]'
    toggle_sync_price_button = 'span[class="chakra-switch__track css-1crfbbr"]'
    error_message_div = 'div[data-status="error"]'
    success_message_div = 'div[data-status="success"]'
    url_validation= '/multicalendar'
    toggle_off_sync_price_button = 'span[class="chakra-switch__track css-1crfbbr"]'
    toggle_off_pop_up_message_div = 'div[class="chakra-popover__body css-1t9l3c8"]'
    toggle_on_sync_price_button = 'span[class="chakra-switch__track css-1crfbbr"]'
    toggle_on_pop_up_message_div = 'div[data-status="success"]'
    Date_wisedata='div[class="css-olinm0"]'
    Base_price_text='p[qa-id="BASE PRICE (Listing)-value"]'
    toggle_sync_error_message_div = 'div[data-status="error"]'
    toggle_sync_valid_message_div = 'div[data-status="success"]'
    search_price_input_exceed='#base-price-VRMREALTY___219___vrm'
    error_check_for_greater_value='Value cannot be greater than 99,999,999!'
    Average_nightly_rate_exceed_text='Average nightly rate cannot be greater than Maximum nightly rate'

    Average_nightly_rate_exceed_text_check() {
        cy.contains(this.Average_nightly_rate_exceed_text)
    }
    error_check_for_greater_value_text() {  
        cy.contains(this.error_check_for_greater_value)
    }
    
    Search_price_input_Average_nightly_rate_exceed_text() {
        cy.get(this.search_price_input_exceed).click().type('50000{enter}', { force: true }).click({Force:true})
        cy.get('.css-158vu5l > .css-pqo6z3 > .css-1tfixk5 > .chakra-button > .chakra-text').click()
    }
    search_price_input_exceed_text() {
        cy.get(this.search_price_input_exceed).click().type('500000000000{enter}', { force: true }).click({Force:true})
    }
    toggle_sync_error_message_div_check() {
        cy.get(this.toggle_sync_error_message_div).last().should('be.visible').and('contain.text', 'Your prices will no longer be updated. If you wish to sync your prices immediately, please use the ')
    }   
    toggle_sync_valid_message_div_check() {
        cy.get(this.toggle_sync_valid_message_div).last().should('be.visible').and('contain.text', 'Your prices are scheduled to be updated overnight. If you wish to sync your prices immediately, please use the ')
    }
    Date_wisedata_mouseover() {
        cy.get(this.Date_wisedata).first().trigger('mouseover')
    }
    Base_price_text_visible_check() {
        cy.get(this.Base_price_text).should('be.visible')
    }
    url_validation_check() {
        cy.url().should('include', this.url_validation);
    }
    select_quick_filter() {
        cy.get(this.quick_filter_button).click({ force: true });
    }
    click_price_sync_on() {
        cy.get(this.price_sync_on_button).click({ force: true })
    }
    search_listing_input_text() {
        cy.get(this.search_listing_input).type('property');
    }
    search_text_data_visible_check() {
        cy.get(this.search_listing_text).first().contains('property');
    }
    error_message_div_check() {
        cy.get(this.error_message_div).last().should('be.visible').and('contain.text', 'We have stopped updating your prices. ')
    }
    success_message_div_check() {
        cy.get(this.success_message_div).last().should('be.visible').and('contain.text', 'Your prices are scheduled to be updated overnight. If you wish to sync your prices immediately, please use the ')
    }  
    toggle_off_pop_up_message_div_check() {
        cy.get(this.toggle_off_pop_up_message_div).should('be.visible').and('contain.text', 'Your prices will no longer be updated. If you wish to sync your prices immediately, please use the ')
    }   
    toggle_on_pop_up_message_div_check() {
        cy.get(this.toggle_on_pop_up_message_div).should('be.visible').and('contain.text', 'Your prices are scheduled to be updated overnight. If you wish to sync your prices immediately, please use the ')
    }
    toggle_sync_price_button_click() {
        cy.get(this.toggle_sync_price_button).first().click({ force: true })
    }
    toggle_off_sync_price_button_click() {
        cy.get(this.toggle_off_sync_price_button).first().click({ force: true })
    }
}
export default UI_Testing