import {expect, test} from "@playwright/test";

test('basic test', async ({page}) => {
    await page.goto('/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('gh')
});