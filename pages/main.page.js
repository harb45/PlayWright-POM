const BasePage = require('./base.page');

class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchBar = 'input[name="field-keywords"]';
    this.searchButton = 'input#nav-search-submit-button';
  }

  async searchProduct(productName) {
    await this.fill(this.searchBar, productName);
    await this.click(this.searchButton);
  }
}

module.exports = MainPage;