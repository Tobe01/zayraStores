# Zayra Store - React E-commerce App

Zayra Store is a React-based e-commerce storefront that lets users browse products, view product details, manage a cart, and complete a simple checkout flow (UI). The project focuses on clean component structure, reusable UI, predictable state updates, and a responsive layout.


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
- **Styling:** CSS / Tailwind / shadcn UI, Styled Components
- **State:** React hooks / Context API
- **Routing:** React Router
- **Data:** Local JSON / API integration 

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

# Project Structure
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
