class SearchResultsPage {
    constructor(page) {
      this.page = page;
      this.firstProduct = '.s-main-slot .s-result-item[data-component-type="s-search-result"]';
    }
  
    async selectFirstProduct() {
      await this.page.click(this.firstProduct);
    }
  }
  
  module.exports = SearchResultsPage;