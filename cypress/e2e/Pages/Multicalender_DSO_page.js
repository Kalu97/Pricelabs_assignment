class Multicalender_DSO{
    checkbox_selectection='input[class="chakra-checkbox__input"]'
    apply_override_button='#apply-override-mc-bulk'
    DSO_tittle='p[qa-id="dso-modal-title"]'
    start_date_element=':nth-child(3) > .css-0 > .css-1m1860y > .react-datepicker-wrapper > .react-datepicker__input-container > .css-70qvj9 > #date-picker-calendar-start > .chakra-text'
    start_date='div[class="css-1ww8f2s"]'
    end_date='.react-datepicker__day--031 > .css-1bpef4y > .chakra-text'
    final_price_input='input[qa-id="dso-price"]'
    min_price_input='input[qa-id="dso-min-price"]'
    max_price_input='input[qa-id="dso-max-price"]'  
    base_price_input='input[qa-id="dso-base-price"]'
    Minimum_stay_restruction_input='input[id="dso-min-stay--mc"]'
    DSO_add_button='p[qa-id="add-dso"]'
    update_button='button[title="Update"]'
    search_listing_input='#mc-search-listing'
    search_price_input='#base-price-VRMREALTY___219___vrm'
    Save_and_refresh_button='button[class="chakra-button mc-save-and-refresh-v2 css-x7ba09"]'
    search_text_data_visible='td[class="pricing-cell css-16smrjn"]'
    
    
    Select_checkbox(){
        cy.get(this.checkbox_selectection).eq(2).check({force:true})
    }
    Click_apply_override(){
        cy.get(this.apply_override_button).should('be.visible').click({force:true})
    }
    Validate_DSO_tittle(){
        cy.get(this.DSO_tittle).should('be.visible').and('contain.text','Date Specific Overrides')
    }
    Validate_start_date_text(){
        cy.get(this.start_date_element).should('be.visible').click({force:true})
    }
    Select_start_date(){
        cy.get(this.start_date).eq(5).click({force:true})
    }
    Select_end_date(){
        cy.get(this.end_date).click({force:true})
    }
    final_price_input_text(){
        cy.get(this.final_price_input).type('100')
    }
    min_price_input_column(){
        cy.get(this.min_price_input).type('50')
    }
    max_price_input_column(){
        cy.get(this.max_price_input).type('150')
    }
    base_price_input_column(){
        cy.get(this.base_price_input).type('200')
    }
    minimum_stay_restriction_input_column(){    
        cy.get(this.Minimum_stay_restruction_input).type('2',{force:true})
    }
    click_DSO_add_button(){
        cy.get(this.DSO_add_button).should('be.visible').click()
    }
    click_DSO_update_button(){
        cy.get(this.update_button).click()
    }
    search_listing_input_text(){    
        cy.get(this.search_listing_input).type('property')
        cy.wait(6000)
    }
    search_price_input_text(){
        cy.get(this.search_price_input).click().type('50', { force: true })
    }       
    Save_and_refresh_button_click(){
        cy.get(this.Save_and_refresh_button).first().click()
    }
    search_text_data_visible_check(){
        cy.get(this.search_text_data_visible).should('be.visible').and('not.be.disabled')
    }


    

}
export default Multicalender_DSO