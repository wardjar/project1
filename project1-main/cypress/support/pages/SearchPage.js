const pageLocators = {

    itemsLocator: ".instock.purchasable",
}


export default class SearchPage {
    /**
   * clicks the first search item in the page, uses itemsLocator from the page locators
   */
    static clickFirstItem() {
        cy.get(pageLocators.itemsLocator).first().click()
    }

    /**
   * clicks the search item according to the index given, uses itemsLocator from the page locators
   * @param index of the item to click
   */
    static clickItemAtIndex(index) {
        cy.get(pageLocators.itemsLocator).then((elements) => {
            cy.wrap(elements[index]).click()
        })
    }

    /**
        * clicks a search item in the page by random, uses itemsLocator from the page locators
        */
    static clickRandomItem() {
        cy.get(pageLocators.itemsLocator).then((elements) => {
            let i = Math.floor(Math.random() * elements.length);
            cy.wrap(elements[i]).click()
        })
    }

    /**
   * clicks the search item according to the text given, uses itemsLocator from the page locators
   * @param text of the item to click
   */
    static clickItemByText(text) {
        cy.contains(pageLocators.itemsLocator, text, { matchCase: false }).click()
    }
}