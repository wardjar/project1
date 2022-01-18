/// <reference types="cypress"/>
import HomePage from '../../../support/pages/HomePage.js'
import SearchPage from '../../../support/pages/SearchPage.js'
import ItemPage from '../../../support/pages/ItemPage.js'
import CartPage from '../../../support/pages/CartPage.js'
import CheckOutPage from '../../../support/pages/CheckoutPage.js'
import OrderPage from '../../../support/pages/OrderPage.js'
// import faker from 'faker';

describe('Regretion test Demoqa cart function', () => {
  beforeEach(() => {

    HomePage.navigateToHome()

    HomePage.clickSearchIcon()

  })

  it('shouldReturnOrderNumber', () => {

    // HomePage.writeDefaultSearch()

    HomePage.writeSearch('shirt')

    // SearchPage.clickFirstItem()

    SearchPage.clickItemAtIndex(2)

    // SearchPage.clickRandomItem()

    // SearchPage.clickItemByText("Frill ribbed")

    ItemPage.selectFirstColorOption()

    // ItemPage.selectColorOptionByValue("mustard")

    ItemPage.selectFirstSizeOption()

    // ItemPage.selectSizeOptionByValue("Medium")

    ItemPage.clickAddToCartButton()

    ItemPage.clickViewCartButton()

    CartPage.clickCheckoutButton()

    CheckOutPage.writeRandomFirstName()

    // CheckOutPage.writeFirstName('mike')

    CheckOutPage.writeRandomLastName()

    // CheckOutPage.writeLastName('law')

    CheckOutPage.selectDefaultCountry()

    // CheckOutPage.selectCountry('Yemen')

    CheckOutPage.writeRandomAddress()

    // CheckOutPage.writeAddress('21 jump street')

    CheckOutPage.writeCity('New York')

    // CheckOutPage.writeDefaultCity()

    // CheckOutPage.selectDefaultState()

    CheckOutPage.selectState('New York')

    // CheckOutPage.writeDefaultZipCode()

    CheckOutPage.writeZipCode('10001')

    CheckOutPage.writeRandomPhoneNumber()

    // CheckOutPage.writePhoneNumber('0123456789')

    CheckOutPage.writeRandomEmail()

    // CheckOutPage.writeEmail('sample@gmail.com')

    CheckOutPage.clickAgreeToTerms()

    CheckOutPage.clickPleaceOrderButton()

    OrderPage.verifyOrderSuccessful()

    OrderPage.logOrdernNumber()
  })


})

