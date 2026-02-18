# Zayra Store - React E-commerce App

Zayra Store is a React-based e-commerce storefront that lets users browse products, view product details, manage a cart, and complete a simple checkout flow (UI). The project focuses on clean component structure, reusable UI, predictable state updates, and a responsive layout.

## Live Demo
- **Demo:** _Add link_
- **Figma/Design (optional):** _Add link_

## Features
- Product listing and product details pages
- Add to cart, remove from cart, update item quantity
- Add to wish list, remove from wish list
- Cart summary (subtotal, item count)
- Basic checkout page (UI flow)
- Responsive layout for mobile and desktop
- Reusable components and consistent styling

## Tech Stack
- **Frontend:** React, JavaScript ES6+
- **Styling:** CSS / Tailwind / Styled Components
- **State:** React hooks / Context API
- **Routing:** React Router
- **Data:** Local JSON / API integration 

## Screenshots

<img width="1366" height="6694" alt="screencapture-localhost-5173-2026-02-18-12_24_31" src="https://github.com/user-attachments/assets/4e8f3327-fa97-4213-a353-8cd37690ba8f" />
<img width="1366" height="3514" alt="screencapture-localhost-5173-shop-2026-02-18-12_25_00" src="https://github.com/user-attachments/assets/8c4c56a2-e2c6-4f01-b94c-4f1254876de4" />
<img width="1366" height="2193" alt="screencapture-localhost-5173-shop-2026-02-18-12_25_45" src="https://github.com/user-attachments/assets/edcb7e1d-d137-4bb5-86db-7de10cbae0ae" />
<img width="1366" height="1596" alt="screencapture-localhost-5173-checkout-2026-02-18-12_26_26" src="https://github.com/user-attachments/assets/ab729263-ddaf-432c-ae08-e0595b58131b" />
<img width="1366" height="1796" alt="screencapture-localhost-5173-orders-2026-02-18-12_27_54" src="https://github.com/user-attachments/assets/7383a2be-2401-483c-a328-f7926fdd46db" />
<img width="1366" height="1796" alt="screencapture-localhost-5173-orders-2026-02-18-12_28_21" src="https://github.com/user-attachments/assets/fc8c6f77-2c98-443b-9117-6fd568e17b06" />
<img width="1366" height="1796" alt="screencapture-localhost-5173-orders-2026-02-18-12_28_42" src="https://github.com/user-attachments/assets/f3c098ab-56d4-4ba9-8c4a-50752932555b" />
<img width="1366" height="1796" alt="screencapture-localhost-5173-orders-2026-02-18-12_28_59" src="https://github.com/user-attachments/assets/f99ce120-3cb5-4f35-99bf-867961b1c876" />


## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm or yarn

### Installation
```bash
# clone repo
git clone https://github.com/tobe01/zayra-store.git

# enter folder
cd zayra-store

# install dependencies
npm install

# start dev server
npm run dev
Build for Production
npm run build
npm run preview
Project Structure (example)
src/
  components/      # reusable UI components
  pages/           # route-level pages (Home, Product, Cart, Checkout)
  routes/          # app routes
  context/         # context providers (cart, products) if used
  data/            # mock data / JSON
  utils/           # helpers (format currency, etc.)
  assets/          # images, icons
Usage Notes
Cart quantity updates are clamped to valid ranges (e.g., 0–10) if enabled in logic.

If the project uses mock data, you can swap to an API by updating the data layer in src/services or src/data.

Roadmap
Persist cart to LocalStorage

Add product search + filtering (category, price)

Add authentication (optional)

Integrate a real payments flow (e.g., Stripe) (optional)

Add tests (unit + integration)

Contributing
Contributions are welcome.

Fork the project

Create your feature branch: git checkout -b feature/my-feature

Commit changes: git commit -m "Add: my feature"

Push to branch: git push origin feature/my-feature

Open a Pull Request

License
MIT — feel free to use and modify.

Author
Tobechi Duru (Tobe)

Portfolio: https://tobechiduru.vercel.app

GitHub: https://github.com/Tobe01

LinkedIn: https://www.linkedin.com/in/tobechiduru
