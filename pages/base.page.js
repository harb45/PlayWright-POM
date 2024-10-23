class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate(url) {
      await this.page.goto(url);
    }
  
    async acceptCookies() {
      const refuseCookiesButton = await this.page.getByRole('button', { name: 'Refuser' });
      if (refuseCookiesButton) {
        await refuseCookiesButton.click();
      }
    }
  
    // async waitForElement(selector) {
    //   await this.page.waitForSelector(selector);
    // }
  
    // async getElementText(selector) {
    //   return await this.page.textContent(selector);
    // }
  
    async click(selector) {
      await this.page.click(selector);
    }
  
    async fill(selector, value) {
      await this.page.fill(selector, value);
    }
  }
  
  module.exports = BasePage;