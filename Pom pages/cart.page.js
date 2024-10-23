class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItem = '.sc-list-item-content';
      this.checkoutButton = '.sc-buy-box-ptc-button';
    }
  
    async verifyProductInCart() {
      return await this.page.isVisible(this.cartItem);
    }
  
    async proceedToCheckout() {
      await this.page.click(this.checkoutButton);
    }
  }
  
  module.exports = CartPage;