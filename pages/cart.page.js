const BasePage = require('./base.page');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartItems = 'div.sc-list-body';
  }

  async verifyProductInCart() {
    // await this.waitForElement(this.cartItems);
    // Logique additionnelle pour vérifier les produits dans le panier
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
  }
}

module.exports = CartPage;