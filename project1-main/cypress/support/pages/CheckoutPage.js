const pageLocators = {

    firstNameElement: "#billing_first_name",

    lastNameElement: "#billing_last_name",

    countryElement: "#billing_country",

    addressElement: "#billing_address_1",

    cityElement: "#billing_city",

    stateElement: "#billing_state",

    stateOptionsElement: ".select2-results__option",

    zipCodeElement: "#billing_postcode",

    phoneElement: "#billing_phone",

    emailElement: "#billing_email",

    termsElement: "#terms",

    placeOrderButton: "#place_order"
}

import faker from 'faker';
export default class CheckoutPage {


    /**
    * writes the first name with a randomly generated string, uses firstNameElement from the page locators
    */
    static writeRandomFirstName() {
        cy.get(pageLocators.firstNameElement).type(faker.name.firstName())

    }

    /**
    * writes the first name by the given value, uses firstNameElement from the page locators
    * @param firstName the first name to write
    */
    static writeFirstName(firstName) {
        cy.get(pageLocators.firstNameElement).type(firstName)
    }

    /**
    * writes the last name with a randomly generated string, uses lastNameElement from the page locators
    */
    static writeRandomLastName() {
        cy.get(pageLocators.lastNameElement).type(faker.name.lastName())
    }

    /**
    * writes the last name by the given value, uses firstNameElement from the page locators
    * @param lastName the last name to write
    */
    static writeLastName(lastName) {
        cy.get(pageLocators.lastNameElement).type(lastName)
    }

    /**
    * selects the default country option, uses countryElement from the page locators,
    * and "country" vaiables from the env variables
    */
    static selectDefaultCountry() {
        cy.get(pageLocators.countryElement).select(Cypress.env("country"), { force: true })
    }

    /**
    * selects the country option by the given value, uses countryElement from the page locators
    * @param country the country to choose
    */
    static selectCountry(country) {
        cy.get(pageLocators.countryElement).select(country, { force: true })
    }

    /**
    * writes the address with a randomly generated string, uses addressElement from the page locators
    */
    static writeRandomAddress() {
        cy.get(pageLocators.addressElement).type(faker.address.streetAddress())
    }

    /**
    * writes the address by the given value, uses addressElement from the page locators
    * @param address the address to write
    */
    static writeAddress(address) {
        cy.get(pageLocators.addressElement).type(address)
    }

    /**
    * writes the default city, uses cityElement from the page locators, 
    * and the "city" from env variables
    */
    static writeDefaultCity() {
        cy.get(pageLocators.cityElement).type(Cypress.env("city"))
    }

    /**
    * writes the city by the given value, uses cityElement from the page locators
    * @param city the city to write
    */
    static writeCity(city) {
        cy.get(pageLocators.cityElement).type(city)
    }

    /**
    * selects the state option by the text given, uses stateElement from the page locators
    * @param state the item size to choose
    */
    static selectState(state) {
        cy.get(pageLocators.stateElement).select(state, { force: true })
    }

    /**
    * selects the default state option, uses stateElement from the page locators,
    * and the "state" from the env variables
    */
    static selectDefaultState() {
        cy.get(pageLocators.stateElement).select(Cypress.env("state"), { force: true })
    }

    /**
    * writes the default zip code, uses zipCodeElement from the page locators, and the "zip" from the env variables
    */
    static writeDefaultZipCode() {
        cy.get(pageLocators.zipCodeElement).type(Cypress.env("zip"))
    }

    /**
    * writes the zip code by the value given, uses zipCodeElement from the page locators
    * @param zipCode the zip Code to write
    */
    static writeZipCode(zipCode) {
        cy.get(pageLocators.zipCodeElement).type(zipCode)
    }

    /**
    * writes the phone number with a randomly generated string, uses phoneElement from the page locators
    */
    static writeRandomPhoneNumber() {
        cy.get(pageLocators.phoneElement).type(faker.phone.phoneNumber('##########'))
    }

    /**
    * writes the first name with a randomly generated string, uses firstNameElement from the page locators
    * @param firstName the first name to write
    */
    static writePhoneNumber(text) {
        cy.get(pageLocators.phoneElement).type(text)
    }

    /**
    * writes the email with a randomly generated string with the extension gmail, uses emailElement from the page locators
    */
    static writeRandomEmail() {
        cy.get(pageLocators.emailElement).type(faker.internet.email())
    }

    /**
    * writes the email by the given value, uses emailElement from the page locators
    * @param email the email to write
    */
    static writeEmail(email) {
        cy.get(pageLocators.emailElement).type(email)
    }

    /**
    * clicks on the agree to terms box, uses termsElement from the page locators
    */
    static clickAgreeToTerms() {
        cy.get(pageLocators.termsElement).click()
    }

    /**
    * clicks on the place order button, uses placeOrderButton from the page locators
    */
    static clickPleaceOrderButton() {
        cy.get(pageLocators.placeOrderButton).click()
    }
}

