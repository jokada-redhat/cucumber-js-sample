const { Given, When, Then, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const assert = require('assert').strict;

let browser;
let page;

Given('I am on the index page', async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:8080'); // Vueアプリケーションが実行されているURLに変更してください。
});

When('I click on the {string} button', async function (buttonText) {
  await page.click(`text=${buttonText}`);
});

Then('I should see {string} text', async function (text) {
  const pageText = await page.textContent('body');
  assert(pageText.includes(text), `Expected text "${text}" not found.`);
});

// テストが終了したらブラウザを閉じる
After(async function () {
  if (browser) {
    await browser.close();
  }
});