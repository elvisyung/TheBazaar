# TheBazaar | A MERN Full Stack E-commerce Web Application Project 

## Website Walkthrough: youtube.com
## Live Site: https://thebazaar.onrender.com/

## Description
TheBazaar is a MERN full stack e-commerece web application project that was inspired by Brad Traversy's iteration. This project showcases MERN full stack knowledge with beautiful UI designs from React-bootstrap and custom components. This website features items that is stored in a MongoDB atlas database of which the Admin can delete, edit and upload different items into the database, fulfilling a fully functional CRUD appliation. The checkout system is integated via Paypal and features a delivery process (Stripe will be added as an option in the near future).  

## Technologies Used
* MongoDB - Database
* Mongoose - Database Object Models
* Express - Web Server
* React.js - Frontend
* Bootstrap - UI Design
* Redux - State Management
* Node.js - Backend
* Render - Deployment

## Application Features 
- Full featured shopping cart functionality mimicking an E-commerce platform
- Product reviews and ratings generated by users 
- Top products carousel 
- Product pagination and search feature according to keywords
- User profile, orders and information 
- Admin product, orders (shipping) and user management system page
- Checkout process with Paypal/Credit Card integration 

## Run Deployment / Localhost 

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development or production
PORT = 4000
MONGO_URI = 'your_personal_mongodb_uri'
JWT_SECRET = 'random_string_without_spaces'
PAYPAL_CLIENT_ID = 'your_personal_paypal_client_id'
```

### Install Dependencies

```bash
npm install
cd frontend
npm install
```

### Running Application

```bash
# Run frontend (:3000) & backend (:4000)
npm run dev

# Run backend only
npm run server
```

## Build (Deployed through Render)

```bash
# Create frontend production build
cd frontend
npm run build
```
