import { expect, test } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';
import { locators } from '../Helpers/Locators';
import { positiveTxt } from '../Helpers/PositiveConsts';

test.beforeEach(async ({ page }) => {
    const open = new BasePage(page);
    await open.OpenUrl('/');
});
test.describe('positive tests', async () => {
    test('testPositive', async ({ page }) => {
        const search = new BasePage(page);
        await search.findElement(locators.searchField);
        await search.typeText(locators.searchField, 'samsung');
        await search.frameClick(locators.switchFrame, locators.searchClose);
        const pageSearch = await page.locator(locators.searchField);
        await expect(pageSearch).toBeVisible();
    });

    test('testPositive2', async ({ page }) => {
        const addPhone = new BasePage(page);
        await addPhone.findElement(locators.searchField);
        await addPhone.typeText(locators.searchField, 'samsung');
        await addPhone.frameClick(locators.switchFrame, locators.samsung);
        const phone = await page.locator(locators.samsung);
        await expect(phone).toBeVisible({ timeout: 5000 });
        await addPhone.findElClick(locators.addBucket1);
    });

    test('testPositive3', async ({ page }) => {
        const weather = new BasePage(page);
        await weather.findElClick(locators.weather1);
        const info = await page.locator(locators.weather1);
        await expect(info).toBeVisible({ timeout: 5000 });
        await weather.findElClick(locators.city);
        await weather.findElClick(locators.city1);
    });

    test('testPositive4', async ({ page }) => {
        const authorization = new BasePage(page);
        await authorization.findElClick(locators.autor);
        await authorization.findElClick(locators.login);
        await authorization.typeText(locators.login, positiveTxt.log);
        await authorization.findElClick(locators.password);
        await authorization.typeText(locators.password, positiveTxt.pass);
        await authorization.findElClick(locators.authForm);
        const auth = await authorization.getText(locators.authForm);
        await expect(auth).toBe(positiveTxt.enterButton);
    });

    test('testPositive5', async ({ page }) => {
        const findOil = new BasePage(page);
        await findOil.findElClick(locators.oil);
        await findOil.findElement(locators.oil2);
        const oil = await findOil.getText(locators.oil2);
        await expect(oil).toBe(positiveTxt.oiltxt);
    });

    test('testPositive6', async ({ page }) => {
        const cur = new BasePage(page);
        await cur.findElClick(locators.currency);
        const cur2 = await cur.getText(locators.result);
        await expect(cur2).toHaveLength(21);
    });

    test('testPositive7', async ({ page }) => {
        const card = new BasePage(page);
        await card.findElClick(locators.clever);
        await card.findElement(locators.addCart);
        const card2 = await card.getText(locators.addCart);
        await expect(card2).toBe(positiveTxt.onlinerIntro);
    });
});
