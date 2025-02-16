import { test, expect } from '@playwright/test';

test('can add a product in the cart', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByText(/Tênis Futurista/).click();

  await expect(page.getByText(/Descrição/)).toBeVisible();

  await page.getByRole('button', { name: 'Adicionar ao carrinho' }).click();

  await page.getByRole('link', { name: /Carrinho/, exact: true }).click();
  await expect(page.getByText(/Tênis Futurista/)).toBeVisible();
});
