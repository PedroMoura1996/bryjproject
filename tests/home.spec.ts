import { test, expect, Page } from "@playwright/test";

test.describe("Home", () => {
  test("Open homepage and check title", async ({ page }) => {
    // open url
    await page.goto("http://localhost:3000/bryj/homepage");
    // verify title
    await expect(page).toHaveTitle("Around The World - Bryj");
  });
});

test.describe("HomePage Header", () => {
  test("open homepage and test header", async ({ page }) => {
    // open url
    await page.goto("http://localhost:3000/bryj/homepage");
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
  test("open homepage and click navbar links", async ({ page }) => {
    // open url
    await page.goto("http://localhost:3000/bryj/homepage");
    // find and click all countries link;
    await page.locator("#allcountries").click();
    await expect(page).toHaveURL("http://localhost:3000/bryj/allcountries");
    await page.locator("#filterregion").click();
    await expect(page).toHaveURL("http://localhost:3000/bryj/filterregion");
  });
});
