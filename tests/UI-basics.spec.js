const { test } = require('@playwright/test');

test('FIRST PLAYWRIGHT TEST', async ({ page }) => {

    // STEP 1 - OPEN BROWSER
    await page.goto('https://www.saucedemo.com/');

    // STEP 2 - ENTER USERNAME
    await page.locator('#user-name').fill('standard_user');

    // STEP 3 - ENTER PASSWORD
    await page.locator('#password').fill('secret_sauce');

    // STEP 4 - CLICK LOGIN BUTTON
    await page.locator('#login-button').click();

    // STEP 5 - VERIFY THAT USER IS LOGGED IN
    await page.waitForSelector('.inventory_list');

});
// 2. INVALID USERNAME + INVALID PASSWORD
test('INVALID USERNAME INVALID PASSWORD', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('invalid_user');
    await page.locator('#password').fill('invalid_password');
    await page.locator('#login-button').click();

    await page.locator('[data-test="error"]').waitFor();

    console.log(await page.locator('[data-test="error"]').innerText());
});


// 3. VALID USERNAME + INVALID PASSWORD
test('VALID USERNAME INVALID PASSWORD', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('invalid_password');
    await page.locator('#login-button').click();

    await page.locator('[data-test="error"]').waitFor();

    console.log(await page.locator('[data-test="error"]').innerText());
});


// 4. INVALID USERNAME + VALID PASSWORD
test('INVALID USERNAME VALID PASSWORD', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('invalid_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await page.locator('[data-test="error"]').waitFor();

    console.log(await page.locator('[data-test="error"]').innerText());
});


// 5. BLANK USERNAME + VALID PASSWORD
test('BLANK USERNAME VALID PASSWORD', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await page.locator('[data-test="error"]').waitFor();

    console.log(await page.locator('[data-test="error"]').innerText());
});


// 6. VALID USERNAME + BLANK PASSWORD
test('VALID USERNAME BLANK PASSWORD', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#login-button').click();

    await page.locator('[data-test="error"]').waitFor();

    console.log(await page.locator('[data-test="error"]').innerText());
});


// 7. BLANK USERNAME + BLANK PASSWORD
test('BLANK USERNAME BLANK PASSWORD', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#login-button').click();

    await page.locator('[data-test="error"]').waitFor();

    console.log(await page.locator('[data-test="error"]').innerText());
});


// 8. PASSWORD MASKING
test('PASSWORD MASKING', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#password').fill('secret_sauce');

    const passwordType = await page.locator('#password').getAttribute('type');

    console.log('Password field type:', passwordType);

    if (passwordType !== 'password') {
        throw new Error('Password is not masked');
    }
});


// 9. LOGIN BUTTON FUNCTIONALITY
test('LOGIN BUTTON FUNCTIONALITY', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await page.waitForSelector('.inventory_list');

    console.log('Login button functionality is working');
});


// 10. ERROR MESSAGE FOR INVALID CREDENTIALS
test('ERROR MESSAGE FOR INVALID CREDENTIALS', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('wrong_user');
    await page.locator('#password').fill('wrong_password');

    await page.locator('#login-button').click();

    const errorMessage = page.locator('[data-test="error"]');

    await errorMessage.waitFor();

    console.log('Error message:', await errorMessage.innerText());
});