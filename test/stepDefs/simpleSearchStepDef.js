const { Given, When, Then } = require('cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given("I am on the studentbeans homepage", function () {
  simpleSearchPageObject.goToHomePage();
  simpleSearchPageObject.verifyHomePage();
});

Given("I open the search bar", function () {
  simpleSearchPageObject.handleCookie();
  simpleSearchPageObject.openSearchBar();
});

When("I enter {string}", function (brandName) {
  simpleSearchPageObject.searchForBrand(brandName);
});

Then("I should be shown a search listing for {string}", function (brandName) {
  simpleSearchPageObject.validateSearchResults(brandName);
});
