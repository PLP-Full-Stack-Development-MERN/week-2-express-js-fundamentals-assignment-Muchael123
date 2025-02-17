# Express.js Project - Week 2 Assignment

This project demonstrates the fundamentals of Express.js, including routing, middleware, controllers, and RESTful API creation. It includes a simple API for managing users and products with basic CRUD operations.

## Table of Contents
1. [Project Setup](#project-setup)
2. [File Structure](#file-structure)
3. [Environment Variables](#environment-variables)
4. [API Endpoints](#api-endpoints)


---

## Project Setup

### 1. **Install Node.js Using NVM**
Make sure you have [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager) installed on your system. If you don't have it yet, follow the installation instructions on the NVM GitHub page.

Once installed, use NVM to install Node.js:
```bash
nvm install node
```
### 2. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/express-assignment.git
cd express-assignment
```

### 3. Install dependancies
```bash
   npm i
```
### 4. Run project
   To run the project use:
```bash
   npm run dev
```
   or go to the `package.json` and change the `"dev"` to your liking
   ```json
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node --watch index.js"
  },
  ```

## File Structure
```bash
express-assignment/
│-- controllers/
│    ├── userController.js      # Controller for handling user requests
│    ├── productController.js   # Controller for handling product requests
│-- middleware/
│    ├── logger.js              # Custom middleware for logging requests
│-- routes/
│    ├── userRoutes.js          # Routes for managing users
│    ├── productRoutes.js       # Routes for managing products
│-- index.js                    # Main server file
│-- .env                        # Environment variables
│-- package.json                # Project dependencies and metadata
│-- README.md                   # Project documentation

```
## API EndPoints
   ### User Routes:
   - GET /api/users: Retrieve all users.
   - GET /api/users/:id: Retrieve a user by ID.
   - POST /api/users: Create a new user.
   - PUT /api/users/:id: Update a user by ID.
   - DELETE /api/users/:id: Delete a user by ID.
   ### Product Routes:
   - GET /api/products: Retrieve all products.
   - GET /api/products/:id: Retrieve a product by ID.
   - POST /api/products: Create a new product.
   - PUT /api/products/:id: Update a product by ID.
   - DELETE /api/products/:id: Delete a product by ID.
