const pageLocators = {

    searchIconElement: ".noo-search",

    searchBarElement: ".form-control"
}

export default class HomePage {

    /**
     * navigates to home page, uses the default baseurl from the jason file
     */
    static navigateToHome() {
        cy.visit('/')
    }

    /**
     * opens the search tab, uses searchIconElement from the page locators
     */
    static clickSearchIcon() {
        cy.get(pageLocators.searchIconElement).click()
    }

    /**
    * writes the search term in the search bar, uses searchBarElement from the page locators
    * @param text the search term to enter
    */
    static writeSearch(text) {
        cy.get(pageLocators.searchBarElement).type(text + '{enter}')
    }

    /**
   * writes the default search term in the search bar, uses searchBarElement from the page locators,
   * and "shopSearch" from the env variables
   * @param text the search term to enter
   */
    static writeDefaultSearch() {
        cy.get(pageLocators.searchBarElement).type(Cypress.env("shopSearch") + '{enter}')
    }

};


