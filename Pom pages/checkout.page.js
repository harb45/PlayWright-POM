class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.addressSelection = '#address-book-entry-0';
      this.paymentSelection = '#pp-Z0Gzmx-99';
      this.confirmOrderButton = 'input.place-your-order-button';
      this.paymentErrorMessage = '.payment-error-message';
    }
  
    async selectAddress() {
      await this.page.click(this.addressSelection);
    }
  
    async selectPaymentMethod() {
      await this.page.click(this.paymentSelection);
    }
  
    async confirmOrder() {
      await this.page.click(this.confirmOrderButton);
    }
  
    async verifyPaymentError() {
      return await this.page.isVisible(this.paymentErrorMessage);
    }
  }
  
  module.exports = CheckoutPage;