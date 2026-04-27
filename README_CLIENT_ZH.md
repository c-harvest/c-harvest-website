# C-Harvest 網站交付說明

## 專案概要

本專案為 C-Harvest Industries Co., Ltd. 的靜態企業網站。

目前網站範圍包含：

- 4 個頁面：首頁、關於我們、產品項目、聯絡我們
- 支援桌機與手機的響應式設計
- 使用原生 HTML、CSS、JavaScript 製作
- 內建繁體中文、英文、德文三語切換功能

## 專案檔案說明

主要檔案如下：

- `index.html`：首頁
- `about.html`：公司介紹頁
- `products.html`：產品與業務範圍頁
- `contact.html`：聯絡頁
- `styles.css`：共用樣式檔
- `site.js`：手機選單與語言切換功能
- `assets/images/c-harvest-logo.png`：Logo 圖檔

## 如何預覽網站

請在 Terminal 開啟專案資料夾後執行：

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

接著用瀏覽器開啟：

```text
http://127.0.0.1:8000/
```

其他頁面網址如下：

- `http://127.0.0.1:8000/about.html`
- `http://127.0.0.1:8000/products.html`
- `http://127.0.0.1:8000/contact.html`

## 如何修改網站內容

### 1. 修改頁面結構

如果要修改頁面區塊、版型或連結，請編輯：

- `index.html`
- `about.html`
- `products.html`
- `contact.html`

### 2. 修改樣式

如果要調整色彩、字體、間距、按鈕或排版細節，請編輯：

- `styles.css`

### 3. 修改三語文案

目前繁體中文、英文、德文三語內容集中管理於：

- `site.js`

在 `site.js` 內的 `translations` 物件中，可以找到各頁面的三語文案內容。

如果未來需要修改三種語言的文字，主要就是編輯這個檔案。

## 語言切換運作方式

- 網站支援 `zh`、`en`、`de`
- 使用者選擇的語言會儲存在瀏覽器的 `localStorage`
- 當使用者在某頁切換語言後，切換到其他頁面時會自動延續相同語言

## 可部署的平台

由於本網站為靜態網站，可部署於以下平台：

- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages
- 傳統虛擬主機 / cPanel 主機

部署方式通常只需要直接上傳網站檔案即可。

## 建議正式上線前檢查項目

正式發布前，建議確認以下內容：

- 公司文案已完成最終確認
- Email 與地址資料正確
- Logo 使用正確
- 所有內部連結可正常點擊
- 手機版顯示正常
- 中、英、德三語內容皆已確認
- HTTPS 已啟用

## 建議交付給客戶的內容

建議與網站檔案一起交付以下項目：

- 網站原始檔
- 主機或部署資訊
- 網域與 DNS 管理資訊
- 品牌素材，例如 Logo 原檔
- 本說明文件
- 交付清單文件

## 維護提醒

目前本網站沒有 CMS 或後台管理介面。

如果未來客戶希望經常自行更新文案、產品資訊或新聞內容，建議後續可考慮升級為 CMS 架構版本。
