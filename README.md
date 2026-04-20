## Grocery Delivery E-Commerce SV (CSR, SPA) v0

Features:

1. Searching Product (open AllProducts Page)
2. Selecting Category (open Category Page)
3. Adding/removing Product to/from Cart
4. SignUp/SignIn User
5. Adding Address
6. Ordering Product
7. SignIn Admin
8. Adding Product

Live Preview Link:

1. https://greencart-gs.vercel.app/
2. https://greencart-frontend-two.vercel.app/

Figma Design Link:

-

Assets Link:

- https://greatstack.dev/p/grocery-delivery-react-app

Frontend Stack:

1. Vite
2. React JS (React Router, Context API)
3. TailwindCSS

Packages:

- npm install tailwindcss @tailwindcss/vite react-router-dom react-hot-toast

Entities:

1. Seller (Admin)
2. Category
3. Product
4. User (CartItems)
5. Address
6. Order

Fixed Modals:

1. Navbar/Mobile Menu
   Login(button) - open sigin/signup

Pages:

1. / - Home Page
2. /products - AllProducts
3. /products/:category - ProductCategory
4. /products/:category/:id - ProductDetails
5. /cart - Cart
6. /add-address - AddAddress
7. /my-orders - MyOrders

Private Admin Pages

1. /seller - SellerLogin or SellerLayout
2. /seller (index) - AddProduct
3. /seller/product-list - ProductList
4. /seller/orders - Orders
