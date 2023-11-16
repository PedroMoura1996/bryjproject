import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly homePageLink: Locator;
  readonly allCountriesLink: Locator;
  readonly asearchByRegionLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homePageLink = page.locator("#homepage");
    this.allCountriesLink = page.locator("#allcountries");
    this.asearchByRegionLink = page.locator("#filterregion");
  }

  async visit() {
    await this.page.goto("http://localhost:3000/bryj/homepage");
  }

  async navigateToHome() {
    await this.homePageLink.click();
  }

  async navigateToAllCountries() {
    await this.allCountriesLink.click();
  }

  async navigateToSearchByRegion() {
    await this.asearchByRegionLink.click();
  }
}
