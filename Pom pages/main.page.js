class MainPage {
    constructor(page) {
      this.page = page;
      this.searchInput = 'input#twotabsearchtextbox';
      this.searchButton = 'input#nav-search-submit-button';
      this.cookiesAcceptButton = '#sp-cc-accept';
    }
  
    async navigate(url) {
      await this.page.goto(url);
    }
  
    async acceptCookies() {
      if (await this.page.$(this.cookiesAcceptButton)) {
        await this.page.click(this.cookiesAcceptButton);
      }
    }
  
    async searchProduct(productName) {
      await this.page.fill(this.searchInput, productName);
      await this.page.click(this.searchButton);
    }
  }
  
  module.exports = MainPage;