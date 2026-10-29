# Paradise Nursery Shopping Application

A React + Redux Toolkit shopping cart application for an online plant shop.

## Features
- Landing page with Paradise Nursery branding, background image, and **Get Started** button.
- About Us section.
- Plant listing with three categories and six unique plants in each category.
- Plant thumbnails, names, prices, and Add to Cart buttons.
- Add buttons disable after a plant is added to the cart.
- Shared navigation for Home, Plants, and Cart.
- Dynamic cart item count.
- Redux Toolkit cart state.
- Cart quantity increase/decrease, remove item, per-plant subtotal, and overall total.
- Checkout button displays a “Coming Soon” message.
- Continue Shopping button returns to the plant listing.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
1. Extract the project folder.
2. Open a terminal in the project folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Main files
- `src/App.jsx` — page navigation and landing page
- `src/AboutUs.jsx` — company information
- `src/App.css` — styling and landing-page background
- `src/CartSlice.jsx` — Redux cart slice
- `src/ProductList.jsx` — product listing
- `src/CartItem.jsx` — shopping cart page
- `src/store.js` — Redux store
- `src/main.jsx` — React entry point

## GitHub submission
Create a public GitHub repository and upload the project files. For the assignment, submit the GitHub URL for each required file, for example:
`https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/App.jsx`

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your actual GitHub details. Do not submit these example URLs before replacing them.
