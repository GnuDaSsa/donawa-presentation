import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const deckDir = resolve(process.cwd(), "decks", "donawa-presentation");
const outputDir = resolve(deckDir, "rendered");
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Users/sajw1/AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe",
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(resolve(deckDir, "index.html")).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => document.body.classList.add("render-mode"));

const slides = page.locator(".slide");
const count = await slides.count();
for (let i = 0; i < count; i += 1) {
  await slides.nth(i).screenshot({ path: resolve(outputDir, `slide-${String(i + 1).padStart(2, "0")}.png`) });
}

await page.pdf({
  path: resolve(deckDir, "도나와_발표자료.pdf"),
  width: "16in",
  height: "9in",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
  preferCSSPageSize: false,
});

console.log(`Rendered ${count} slides to ${outputDir}`);
await browser.close();
