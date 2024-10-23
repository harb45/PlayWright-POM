const { test, expect } = require('@playwright/test');
const MainPage = require('../Pom pages/main.page');
const SearchResultsPage = require('../Pom pages/searchResults.page');
const ProductPage = require('../Pom pages/product.page');
const CartPage = require('../Pom pages/cart.page');
const CheckoutPage = require('../Pom pages/checkout.page');

test.describe('Amazon tests', () => {

  test('Rechercher un produit avec succès', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://www.amazon.fr/');
    await mainPage.acceptCookies();
    await mainPage.searchProduct('baskets homme');
    
    const searchResultsPage = new SearchResultsPage(page);
    await searchResultsPage.selectFirstProduct();
    
    // Vous pouvez ajouter des assertions pour vérifier que les résultats de recherche sont corrects
  });

  test('Ajouter un produit au panier', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://www.amazon.fr/');
    await mainPage.acceptCookies();
    await mainPage.searchProduct('baskets homme');
    
    const searchResultsPage = new SearchResultsPage(page);
    await searchResultsPage.selectFirstProduct();
    
    const productPage = new ProductPage(page);
    await productPage.selectSizeIfAvailable();
    await productPage.addToCart();
    
    expect(await productPage.verifyProductAddedToCart()).toBeTruthy();
  });

  test('Effectuer une commande avec succès', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://www.amazon.fr/');
    await mainPage.acceptCookies();
    await mainPage.searchProduct('baskets homme');
    
    const searchResultsPage = new SearchResultsPage(page);
    await searchResultsPage.selectFirstProduct();
    
    const productPage = new ProductPage(page);
    await productPage.selectSizeIfAvailable();
    await productPage.addToCart();
    expect(await productPage.verifyProductAddedToCart()).toBeTruthy();
    
    const cartPage = new CartPage(page);
    await cartPage.verifyProductInCart();
    await cartPage.proceedToCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.selectAddress();
    await checkoutPage.selectPaymentMethod();
    await checkoutPage.confirmOrder();
  });

  test('Tentative de commande avec une carte non valide', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://www.amazon.fr/');
    await mainPage.acceptCookies();
    await mainPage.searchProduct('baskets homme');
    
    const searchResultsPage = new SearchResultsPage(page);
    await searchResultsPage.selectFirstProduct();
    
    const productPage = new ProductPage(page);
    await productPage.selectSizeIfAvailable();
    await productPage.addToCart();
    expect(await productPage.verifyProductAddedToCart()).toBeTruthy();
    
    const cartPage = new CartPage(page);
    await cartPage.proceedToCheckout();
    
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.selectAddress();
    await checkoutPage.confirmOrder();

    expect(await checkoutPage.verifyPaymentError()).toBeTruthy();
  });

});