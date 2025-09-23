import { test, expect } from './fixtures'

test.beforeEach(async ({ page }) => {
    try {
        await page.goto('https://demoqa.com/text-box', { timeout: 60000 });
        await page.waitForLoadState('load');
    } catch (error) {
        console.error('Error loading page:', error);
    }
});

test('textbox', async ({ texboxPage }) => {
    await texboxPage.fillUsername("sample")
})