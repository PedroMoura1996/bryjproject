import { test, expect } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";

test.describe("Home", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    // Centrelize the logic that it is used sevveral times
    await homePage.visit();
  });
  test("Open homepage and check title", async ({ page }) => {
    // verify title
    await expect(page).toHaveTitle("Around The World - Bryj");
  });
});

test.describe("HomePage Header", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    // Centrelize the logic that it is used sevveral times
    await homePage.visit();
  });
  test("open homepage and test header", async ({ page }) => {
    // locate title
    const title = page.locator("#header-title");
    const text = await title.innerText();
    expect(text).toBe("Around the World");
  });

  test("open homepage and check dark mode", async ({ page }) => {
    // open url
    await page.goto("http://localhost:3000/bryj/homepage");
    // locate dark mode switch
    const switchSpan = page.locator("#switch-text");
    const switchSpanText = await switchSpan.innerText();
    expect(switchSpanText).toBe("Dark Mode OFF");
    const mySwitchButton = page.locator("#dark-mode-switch");
    await mySwitchButton.click();
    const switchSpanTextNew = await switchSpan.innerText();
    expect(switchSpanTextNew).toBe("Dark Mode ON");
  });
});

test.describe("Homepage navbar", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    // Centrelize the logic that it is used sevveral times
    await homePage.visit();
  });
  test("open homepage and click navbar links", async ({ page }) => {
    // find and click all countries link;
    await page.locator("#allcountries").click();
    await expect(page).toHaveURL("http://localhost:3000/bryj/allcountries");
    await page.locator("#filterregion").click();
    await expect(page).toHaveURL("http://localhost:3000/bryj/filterregion");
  });
});

test.describe("HomePage footer", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    // Centrelize the logic that it is used sevveral times
    await homePage.visit();
  });
  test("open homepage and validate footer icons", async ({ page }) => {
    const footerInsta = page.locator('[data-test-id="instagram-profile"]');
    const footerGithub = page.locator('[data-test-id="github-profile"]');
    const footerLinkedin = page.locator('[data-test-id="linkedin-profile"]');
    await expect(footerInsta).toHaveCount(1);
    await expect(footerGithub).toHaveCount(1);
    await expect(footerLinkedin).toHaveCount(1);
  });
  test("open homepage and validate footer achor tags", async ({ page }) => {
    const phoneAnchor = page.locator('[data-test-id="phone-info"]');
    const emailAnchor = page.locator('[data-test-id="mail-info"]');
    await expect(phoneAnchor).toHaveCount(1);
    await expect(emailAnchor).toHaveCount(1);

    // Check the href attribute
    const hrefPhoneValue = await phoneAnchor.getAttribute("href");
    const hrefEmailValue = await emailAnchor.getAttribute("href");
    await expect(hrefPhoneValue).toBe("tel:+351912095645");
    await expect(hrefEmailValue).toBe(
      "mailto:pedro.alexandre.moura1996@gmail.com"
    );
  });
});
