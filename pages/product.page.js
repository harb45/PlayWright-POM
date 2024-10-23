const BasePage = require('./base.page');

class ProductPage extends BasePage {
  constructor(page) {
    super(page);
    this.addToCartButton = 'input#add-to-cart-button';
    this.cartConfirmationText = '#huc-v2-order-row-confirm-text';
    this.sizeDropdown = 'select#native_dropdown_selected_size_name';
  }

  async selectSizeIfAvailable() {
    const sizeSelector = await this.page.$(this.sizeDropdown);
    if (sizeSelector) {
      await this.page.selectOption(this.sizeDropdown, {
        index: 1, // Sélectionne la première taille disponible
      });
    }
  }

  async addToCart() {
    await this.click(this.addToCartButton);
    // await this.waitForElement(this.cartConfirmationText); // Attendre la confirmation
  }

  async verifyProductAddedToCart() {
    // const confirmationText = await this.getElementText(this.cartConfirmationText);
    // return confirmationText.includes('Ajouté au panier');
  }
}

module.exports = ProductPage;