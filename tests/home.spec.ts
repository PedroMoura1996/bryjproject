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
    const meuBotao = page.locator("#dark-mode-switch");
    await meuBotao.click();
    const gridElement = page.locator("#generic-container-header");
    const computedStyle = await gridElement.evaluate((element) => {
      const style = window.getComputedStyle(element);
      return style.backgroundColor;
    });
    await expect(computedStyle).toBe("rgb(255, 0, 0)");
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
