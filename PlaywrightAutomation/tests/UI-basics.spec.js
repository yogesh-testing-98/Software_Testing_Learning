const { test } = require('@playwright/test');

test('FIRST PLAYWRIGHT TEST', async ({ page }) => {

    // STEP 1 - OPEN BROWSER
    await page.goto('https://www.saucedemo.com/');

    // STEP 2 - ENTER USERNAME
    await page.locator('#user-name').type('standard_user');

    // STEP 3 - ENTER PASSWORD
    await page.locator('#password').type('secret_sauce');

    // STEP 4 - CLICK LOGIN BUTTON
    await page.locator('#login-button').click();

    // STEP 5 - VERIFY THAT USER IS LOGGED IN
    await page.waitForSelector('.inventory_list');

});