/**
 * 元火语C推文 HTML → 截图工具
 * =============================
 * 用 Puppeteer 渲染 HTML 并输出全页截图，方便预览推文在手机端的效果。
 *
 * 依赖：项目根 package.json 中的 puppeteer（Chrome 已缓存于 ~/.cache/puppeteer/）
 * 用法：node screenshot.js <html文件路径> [输出png路径] [宽度]
 * 示例：node screenshot.js example.html preview.png 400
 */
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function screenshot(htmlPath, outputPath, width = 400) {
  if (!fs.existsSync(htmlPath)) {
    console.error(`文件不存在: ${htmlPath}`);
    process.exit(1);
  }

  if (!outputPath) {
    const base = path.basename(htmlPath, path.extname(htmlPath));
    outputPath = `${base}-screenshot.png`;
  }

  const absHtml = path.resolve(htmlPath);
  const fileUrl = 'file:///' + absHtml.replace(/\\/g, '/');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width, height: 850, deviceScaleFactor: 2 });

  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });

  // 如果存在 .post 容器，精准截取；否则整页截图
  const postEl = await page.$('.post');
  if (postEl) {
    const box = await postEl.boundingBox();
    await page.setViewport({
      width,
      height: Math.ceil(box.height) + 40,
      deviceScaleFactor: 2,
    });
  }

  await page.screenshot({ path: outputPath, fullPage: true });
  await browser.close();

  const sizeKb = (fs.statSync(outputPath).size / 1024).toFixed(0);
  console.log(`截图已保存: ${outputPath} (${sizeKb} KB, width=${width}px)`);
  return outputPath;
}

// CLI entry
const [,, html, out, w] = process.argv;
if (!html) {
  console.log(__filename);
  console.log('用法: node screenshot.js <html文件路径> [输出png路径] [宽度]');
  process.exit(1);
}
screenshot(html, out, w ? parseInt(w, 10) : 400);
