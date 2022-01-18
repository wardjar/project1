/// <reference types="cypress"/>
import HomePage from '../../../support/pages/HomePage.js'
import SearchPage from '../../../support/pages/SearchPage.js'
import ItemPage from '../../../support/pages/ItemPage.js'



describe('Negative regretion tests Demoqa cart function', () => {
    beforeEach(() => {

        HomePage.navigateToHome()

        HomePage.clickSearchIcon()

    })

    it('shouldRefuseAddToCartWithoutColorSelected', () => {

        HomePage.writeDefaultSearch()

        SearchPage.clickRandomItem()

        ItemPage.selectFirstSizeOption()

        ItemPage.clickAddToCartButton()

        ItemPage.verifyOrderRejectionNoItemSelected()
    })

    it('shouldRefuseAddToCartWithoutSizeSelected', () => {

        HomePage.writeDefaultSearch()

        SearchPage.clickRandomItem()

        ItemPage.selectFirstSizeOption()

        ItemPage.clickAddToCartButton()

        ItemPage.verifyOrderRejectionNoItemSelected()
    })

})