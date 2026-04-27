# C-Harvest Website Handover Guide

## Project Summary

This project is a static corporate website for C-Harvest Industries Co., Ltd.

Current website scope:

- 4 pages: Home, About, Products, Contact
- Responsive design for desktop and mobile
- Built with plain HTML, CSS, and JavaScript
- Built-in language switching for Traditional Chinese, English, and German

## Project Files

Main files:

- `index.html` - Home page
- `about.html` - Company profile
- `products.html` - Product domains
- `contact.html` - Contact page
- `styles.css` - Shared visual styles
- `site.js` - Mobile navigation and language switching
- `assets/images/c-harvest-logo.png` - Logo file

## How To Preview The Website

Open the project folder in Terminal and run:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Then open this URL in a browser:

```text
http://127.0.0.1:8000/
```

Other pages:

- `http://127.0.0.1:8000/about.html`
- `http://127.0.0.1:8000/products.html`
- `http://127.0.0.1:8000/contact.html`

## How To Edit Content

### 1. Page structure

If you want to change page layout, sections, or links, edit:

- `index.html`
- `about.html`
- `products.html`
- `contact.html`

### 2. Styles

If you want to change colors, spacing, typography, buttons, or layout details, edit:

- `styles.css`

### 3. Language content

All Traditional Chinese, English, and German copy is managed in:

- `site.js`

Inside `site.js`, the `translations` object stores the text for all languages.

If you need to update wording in all three languages, this is the main file to edit.

## How Language Switching Works

- The site supports `zh`, `en`, and `de`
- The selected language is stored in browser `localStorage`
- When a user changes language on one page, the same language is kept on other pages

## Deployment Options

Because this is a static website, it can be deployed to:

- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages
- Traditional shared hosting / cPanel hosting

Deployment only requires uploading the website files directly.

## Recommended Production Checklist

Before publishing to the client domain, confirm:

- Final company copy is approved
- Contact email and address are correct
- Logo is correct
- All internal links work
- Mobile view is checked
- Chinese / English / German text is approved
- HTTPS is enabled

## Suggested Handover Items

Please provide these items to the client together with the website files:

- Website source files
- Deployment or hosting information
- Domain ownership / DNS information
- Brand assets such as logo files
- This handover guide
- Delivery checklist

## Maintenance Note

This website does not currently include a CMS or admin backend.

If the client wants to frequently update text, products, or news by themselves in the future, a CMS-based version may be considered later.
