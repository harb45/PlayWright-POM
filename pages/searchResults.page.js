const BasePage = require('./base.page');

class SearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstProduct = '.s-main-slot .s-result-item h2 a';
  }

  async selectFirstProduct() {
    await this.click(this.firstProduct);
  }
}

module.exports = SearchResultsPage;