const pageLocators = {

    colorElement: "#pa_color",

    sizeElement: "#pa_size",

    addToCartButton: ".single_add_to_cart_button.button.alt",

    viewCartButton: ".button.wc-forward",

    noSelectionWarningMessage:".woocommerce-error > li"
}

export default class SearchPage {

    /**
 * selects the first color option for the item, uses colorElement from the page locators
 */
    static selectFirstColorOption() {
        cy.get(pageLocators.colorElement).select(1)
    }

    /**
 * selects the color option for the item by the text given, uses colorElement from the page locators
 * @param text the item color to choose
 */
    static selectColorOptionByValue(text) {
        cy.get(pageLocators.colorElement).select(text)
    }

    /**
 * selects the first size option for the item, uses sizeElement from the page locators
 */
    static selectFirstSizeOption() {
        cy.get(pageLocators.sizeElement).select(1)
    }

    /**
* selects the size option for the item by the text given, uses sizeElement from the page locators
* @param text the item size to choose
*/
    static selectSizeOptionByValue(text) {
        cy.get(pageLocators.sizeElement).select(text)
    }

    /**
 * clicks on the add to cart button, uses addToCartButton from the page locators
 */
    static clickAddToCartButton() {
        cy.get(pageLocators.addToCartButton).click()
    }

    /**
* clicks on the view cart button, uses viewCartButton from the page locators
*/
    static clickViewCartButton() {
        cy.get(pageLocators.viewCartButton).click()
    }


     /**
    * verifies if the order was rejected seuccessfuly by checking the value of a certain text, uses orderVerifyElement from the page locators,
    * and "itemSelectionWarningMessage" from the env variables
    * 
    */
    static verifyOrderRejectionNoItemSelected() {
        cy.on('window:alert', (text) => {
            expect(text).to.contains(Cypress.env("itemSelectionWarningMessage"));
          });
      
    }

    
}