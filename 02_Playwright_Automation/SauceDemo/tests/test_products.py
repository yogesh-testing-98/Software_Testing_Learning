from playwright.sync_api import Page, expect


def test_products_are_displayed(page: Page):
    # Open SauceDemo
    page.goto("https://www.saucedemo.com/")

    # Login
    page.locator("#user-name").fill("standard_user")
    page.locator("#password").fill("secret_sauce")
    page.locator("#login-button").click()

    # Verify Products page
    expect(page.locator(".title")).to_have_text("Products")

    # Verify products are displayed
    products = page.locator(".inventory_item")

    expect(products.first).to_be_visible()

    # Verify at least one product exists
    assert products.count() > 0