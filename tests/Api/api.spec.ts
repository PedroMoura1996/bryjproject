import { test, expect } from "@playwright/test";

test.describe.parallel("API Testing", () => {
  const baseUrl = "https://restcountries.com/v3.1/";

  test("Simple API Test - Assert Response Status", async ({ request }) => {
    const response = await request.get(`${baseUrl}all`);
    expect(response.status()).toBe(200);
  });

  test("Simple API Test - Assert Invalid Endpoint", async ({ request }) => {
    const response = await request.get(`${baseUrl}non-existing-endpoint`);
    expect(response.status()).toBe(404);
  });

  test("GET Request - Get User Detail", async ({ request }) => {
    const response = await request.get(`${baseUrl}all`);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody[0].name.common).toBeTruthy();
    expect(responseBody[0].region).toBeTruthy();
    expect(responseBody[0].capital[0]).toBeTruthy();
    expect(responseBody[0].name.common).not.toBe("");
    expect(responseBody[0].region).not.toBe("");
    expect(responseBody[0].capital[0]).not.toBe("");
  });
});
