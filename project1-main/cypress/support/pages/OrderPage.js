const pageLocators = {

    orderVerifyElement: ".woocommerce-thankyou-order-received",

    orderNumberElement: ".order"
}

export default class OrderPage {


    /**
    * verifies if the order was completed seuccessfuly by checking the value of a certain text, uses orderVerifyElement from the page locators,
    * and "orderConfirmationMessage" from the env variables
    * 
    */
    static verifyOrderSuccessful() {
        cy.get(pageLocators.orderVerifyElement).should('have.text', Cypress.env("orderConfirmationMessage"))
    }

    /**
    * logs the number of the order if the purchase was successful
    */
    static logOrdernNumber() {
        cy.get(pageLocators.orderNumberElement).invoke('text').then((text) => {
            cy.log(text)
        })
    }
}