from playwright.sync_api import Page, expect


def test_valid_login(page: Page):
    # Open SauceDemo
    page.goto("https://www.saucedemo.com/")

    # Enter username
    page.locator("#user-name").fill("standard_user")

    # Enter password
    page.locator("#password").fill("secret_sauce")

    # Click Login
    page.locator("#login-button").click()

    # Verify successful login
    expect(page).to_have_url(
        "https://www.saucedemo.com/inventory.html"
    )

    # Verify Products page
    expect(page.locator(".title")).to_have_text("Products")