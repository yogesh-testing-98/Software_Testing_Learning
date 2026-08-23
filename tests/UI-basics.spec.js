const { test, expect } = require('@playwright/test');

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


test('LOGIN TEST', async ({ page }) => {

    // STEP 1 - OPEN WEBSITE
    await page.goto('https://rahulshettyacademy.com/locatorspractice/');

    // STEP 2 - ENTER USERNAME
    await page.locator('#inputUsername').fill('rahul');

    // STEP 3 - ENTER PASSWORD
    await page.locator('input[type="password"]').fill('rahulshettyacademy');

    // STEP 4 - CLICK SIGN IN
    await page.getByRole('button', { name: 'Sign In' }).click();

    // STEP 5 - VERIFY SUCCESSFUL LOGIN
    await expect(
        page.getByText('You are successfully logged in.')
    ).toBeVisible();

});


test('INVALID USERNAME INVALID PASSWORD', async ({ page }) => {

    // STEP 1 - OPEN WEBSITE
    await page.goto('https://rahulshettyacademy.com/locatorspractice/');

    // STEP 2 - ENTER INVALID USERNAME
    await page.locator('#inputUsername').fill('invalid_user');

    // STEP 3 - ENTER INVALID PASSWORD
    await page.locator('input[type="password"]').fill('invalid_password');

    // STEP 4 - CLICK SIGN IN
    await page.getByRole('button', { name: 'Sign In' }).click();

    // STEP 5 - PRINT ACTUAL PAGE TEXT
    console.log(await page.locator('body').innerText());

});