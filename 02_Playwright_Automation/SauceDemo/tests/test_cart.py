from playwright.sync_api import Page, expect


# TC03 - Add Product to Cart
def test_add_product_to_cart(page: Page):
    # Open SauceDemo
    page.goto("https://www.saucedemo.com/")

    # Login
    page.locator("#user-name").fill("standard_user")
    page.locator("#password").fill("secret_sauce")
    page.locator("#login-button").click()

    # Add Sauce Labs Backpack to cart
    page.locator("#add-to-cart-sauce-labs-backpack").click()

    # Verify cart count
    expect(page.locator(".shopping_cart_badge")).to_have_text("1")


# TC04 - Verify Cart Product and Price
def test_verify_cart_product_and_price(page: Page):
    # Open SauceDemo
    page.goto("https://www.saucedemo.com/")

    # Login
    page.locator("#user-name").fill("standard_user")
    page.locator("#password").fill("secret_sauce")
    page.locator("#login-button").click()

    # Add Sauce Labs Backpack
    page.locator("#add-to-cart-sauce-labs-backpack").click()

    # Open cart
    page.locator(".shopping_cart_link").click()

    # Verify Cart page
    expect(page).to_have_url(
        "https://www.saucedemo.com/cart.html"
    )

    # Verify product name
    expect(
        page.locator(".inventory_item_name")
    ).to_have_text("Sauce Labs Backpack")

    # Verify product price
    expect(
        page.locator(".inventory_item_price")
    ).to_have_text("$29.99")

    # TC05 - Remove Product from Cart
def test_remove_product_from_cart(page: Page):
    # Open SauceDemo
    page.goto("https://www.saucedemo.com/")

    # Login
    page.locator("#user-name").fill("standard_user")
    page.locator("#password").fill("secret_sauce")
    page.locator("#login-button").click()

    # Add Sauce Labs Backpack
    page.locator("#add-to-cart-sauce-labs-backpack").click()

    # Open cart
    page.locator(".shopping_cart_link").click()

    # Verify product is in cart
    expect(
        page.locator(".inventory_item_name")
    ).to_have_text("Sauce Labs Backpack")

    # Remove product
    page.locator("#remove-sauce-labs-backpack").click()

    # Verify cart is empty
    expect(
        page.locator(".cart_item")
    ).to_have_count(0)

    # Verify cart badge is not visible
    expect(
        page.locator(".shopping_cart_badge")
    ).not_to_be_visible()