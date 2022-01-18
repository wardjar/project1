const pageLocators = {

    checkoutButton: ".checkout-button.button.alt.wc-forward",
}

export default class CartPage {

    /**
  * clicks on the checkout button, uses checkoutButton from the page locators
  */
    static clickCheckoutButton() {
        cy.get(pageLocators.checkoutButton).click()
    }
}