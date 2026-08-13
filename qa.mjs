import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const deckDir = resolve(process.cwd(), "decks", "donawa-presentation");
const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Users/sajw1/AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe",
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto(pathToFileURL(resolve(deckDir, "index.html")).href, { waitUntil: "networkidle" });

const report = await page.locator(".slide").evaluateAll((slides) => slides.map((slide, index) => ({
  slide: index + 1,
  overflowX: slide.scrollWidth - slide.clientWidth,
  overflowY: slide.scrollHeight - slide.clientHeight,
})));

console.log(JSON.stringify(report, null, 2));
const failures = report.filter((slide) => slide.overflowX > 0 || slide.overflowY > 0);
await browser.close();
if (failures.length) process.exitCode = 1;
