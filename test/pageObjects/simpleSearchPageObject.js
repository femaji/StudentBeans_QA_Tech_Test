const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }
  handleCookie() {
    const cookieBtn = $("#onetrust-accept-btn-handler");
    cookieBtn.waitForClickable();
    cookieBtn.click();
  }

  openSearchBar() {
    const input = $('[name="query"]');
    input.waitForClickable();
    input.click();
  }

  searchForBrand(brandName) {
    const input = $("._1g5dvk1");
    input.waitForClickable();
    input.setValue(brandName);
    expect(input.getValue()).to.equal(brandName);
  }

  validateSearchResults(brandName) {
    browser.pause(3000);
    const firstResult = $("._63p46ei");
    expect(firstResult.getText()).to.equal(brandName);
  }
}

module.exports = simpleSearchPageObject
