# TheBazzar 

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 4000
MONGO_URI = 'your_personal_mongodb_uri'
JWT_SECRET = 'random_string_without_spaces'
PAYPAL_CLIENT_ID = 'your_personal_paypal_client_id'
```

### Install Dependencies (frontend & backend)

```bash
npm install
cd frontend
npm install
```

### Run

```bash
# Run frontend (:3000) & backend (:4000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```bash
# Create frontend production build
cd frontend
npm run build
```
### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
