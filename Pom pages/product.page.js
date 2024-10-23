class ProductPage {
    constructor(page) {
      this.page = page;
      this.addToCartButton = '#add-to-cart-button';
      this.sizeDropdown = '#native_dropdown_selected_size_name';
      this.sizeOption = '#native_dropdown_selected_size_name option';
      this.cartConfirmation = '#huc-v2-order-row-confirm-text';
    }
  
    async selectSizeIfAvailable() {
      if (await this.page.$(this.sizeDropdown)) {
        await this.page.selectOption(this.sizeDropdown, { index: 1 });
      }
    }
  
    async addToCart() {
      await this.page.click(this.addToCartButton);
    }
  
    async verifyProductAddedToCart() {
      return await this.page.isVisible(this.cartConfirmation);
    }
  }
  
  module.exports = ProductPage;