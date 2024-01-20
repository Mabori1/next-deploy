import { test, expect } from "@playwright/test";

test("create delete course list", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("Test Course");
  await page.getByPlaceholder("название").press("Tab");
  await page.getByPlaceholder("описание").fill("Test description");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(
    page.getByText("Test CourseTest descriptionУдалить"),
  ).toBeVisible();
  await page
    .locator("div")
    .filter({ hasText: /^Test CourseTest descriptionУдалить$/ })
    .getByRole("button")
    .click();
  await expect(
    page.getByText("Test CourseTest descriptionУдалить"),
  ).not.toBeVisible();
});
