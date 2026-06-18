"""
元火语C推文 HTML → 截图工具
=============================
用 Playwright 渲染 HTML 并输出全页截图，方便预览推文在手机端的效果。

依赖：pip install playwright && python -m playwright install chromium
用法：python screenshot.py <html文件路径> [输出png路径] [宽度]
示例：python screenshot.py example.html preview.png 400
"""

import sys
import os
from playwright.sync_api import sync_playwright


def screenshot(html_path: str, output_path: str = None, width: int = 400):
    """渲染 HTML 文件并保存全页截图"""
    if not os.path.exists(html_path):
        print(f"文件不存在: {html_path}")
        return None

    if output_path is None:
        base = os.path.splitext(os.path.basename(html_path))[0]
        output_path = f"{base}-screenshot.png"

    html_path = os.path.abspath(html_path)
    file_url = "file:///" + html_path.replace("\\", "/")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": width, "height": 850})
        page.goto(file_url, wait_until="networkidle")
        page.screenshot(path=output_path, full_page=True)
        browser.close()

    size_kb = os.path.getsize(output_path) / 1024
    print(f"截图已保存: {output_path} ({size_kb:.0f} KB, width={width}px)")
    return output_path


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    html = sys.argv[1]
    out = sys.argv[2] if len(sys.argv) > 2 else None
    w = int(sys.argv[3]) if len(sys.argv) > 3 else 400
    screenshot(html, out, w)
