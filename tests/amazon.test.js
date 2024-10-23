const { test, expect } = require('@playwright/test');
const MainPage = require('../pages/main.page');
const SearchResultsPage = require('../pages/searchResults.page');
const ProductPage = require('../pages/product.page');
const CartPage = require('../pages/cart.page');

test('Commander des baskets sur Amazon', async ({ page }) => {
  // Pages
  const mainPage = new MainPage(page);
  const searchResultsPage = new SearchResultsPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  // Étape 1: Aller sur Amazon.fr et accepter les cookies
  await mainPage.navigate('https://www.amazon.fr/');
  await mainPage.acceptCookies();

  // Étape 2: Rechercher des baskets
  await mainPage.searchProduct('baskets homme');

  // Étape 3: Sélectionner le premier produit dans les résultats de recherche
  await searchResultsPage.selectFirstProduct();

  // Étape 4: Sélectionner la taille (si applicable) et ajouter au panier
  await productPage.selectSizeIfAvailable();
  await productPage.addToCart();

  // Étape 5: Vérifier que le produit a bien été ajouté au panier
  const isAddedToCart = await productPage.verifyProductAddedToCart();
  expect(isAddedToCart).toBeTruthy();

  // Étape 6: Vérifier les articles dans le panier
  await cartPage.verifyProductInCart();
});


// const { test, expect } = require('@playwright/test');
// const MainPage = require('../pages/main.page');
// const SearchResultsPage = require('../pages/searchResults.page');
// const ProductPage = require('../pages/product.page');
// const CartPage = require('../pages/cart.page');

// test('Commander des baskets sur Amazon avec enregistrement vidéo', async ({ browser }) => {
//   // Créer un contexte de navigateur avec l'enregistrement vidéo activé
//   const context = await browser.newContext({
//     recordVideo: { dir: 'videos/', size: { width: 1280, height: 720 } } // Le dossier où les vidéos seront stockées
//   });

//   // Ouvrir une nouvelle page avec ce contexte
//   const page = await context.newPage();

//   // Instancier les différentes pages du site
//   const mainPage = new MainPage(page);
//   const searchResultsPage = new SearchResultsPage(page);
//   const productPage = new ProductPage(page);
//   const cartPage = new CartPage(page);

//   try {
//     // Étape 1: Aller sur Amazon.fr et accepter les cookies
//     await mainPage.navigate('https://www.amazon.fr/');
//     await mainPage.acceptCookies();

//     // Étape 2: Rechercher des baskets
//     await mainPage.searchProduct('baskets homme');

//     // Étape 3: Sélectionner le premier produit dans les résultats de recherche
//     await searchResultsPage.selectFirstProduct();

//     // Étape 4: Sélectionner la taille (si applicable) et ajouter au panier
//     await productPage.selectSizeIfAvailable();
//     await productPage.addToCart();

//     // Étape 5: Vérifier que le produit a bien été ajouté au panier
//     const isAddedToCart = await productPage.verifyProductAddedToCart();
//     expect(isAddedToCart).toBeTruthy();

//     // Étape 6: Vérifier les articles dans le panier
//     await cartPage.verifyProductInCart();
//   } finally {
//     // Fermer la page et le contexte pour arrêter l'enregistrement vidéo
//     await page.close();
//     await context.close();
//   }
// });