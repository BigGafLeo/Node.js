# Node.js Project

## Overview

This project is a server-side rendered web application for an online store. It includes functionalities such as handling HTTP requests, user authentication, real-time communication using Socket.io, and rendering views with EJS templates. The project is structured with controllers, middleware, models, and routes, providing a robust framework for a full-featured online shopping experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [HTTP Endpoints](#http-endpoints)
  - [Socket.io Implementation](#socketio-implementation)
- [License](#license)

## Features

- **HTTP Requests Handling**: Process various HTTP requests.
- **User Authentication**: Register, login, and authenticate users.
- **Real-time Communication**: Enable real-time communication using Socket.io.
- **Template Rendering**: Use views to render HTML responses.

## Technologies Used

- Node.js
- Express.js
- Socket.io
- MongoDB
- Mongoose
- EJS (Embedded JavaScript templating)
- JSON Web Tokens (JWT)
- Body-parser
- Passport.js (for authentication)

## Project Structure

- **controllers/**: Contains the logic for handling requests.
- **middleware/**: Middleware for request processing.
- **models/**: Mongoose models for MongoDB collections.
- **routes/**: Route definitions.
- **views/**: EJS templates for rendering HTML.
- **public/**: Static assets like CSS, JavaScript, and images.

## Usage

### HTTP Endpoints

#### Auth

- **GET /login**: Login page.
- **POST /login**: Authenticate user.
- **GET /register**: Registration page.
- **POST /register**: Register a new user.
- **GET /profile**: User profile page (protected route).

#### Admin

- **GET /admin/add-product**: Add a new product page.
- **POST /admin/add-product**: Add a new product.
- **GET /admin/products**: Admin products page.
- **GET /admin/edit-product/:productId**: Edit a product page.
- **POST /admin/edit-product**: Update a product.
- **POST /admin/delete-product**: Delete a product.

#### Shop

- **GET /shop/products**: Shop products page.
- **GET /shop/products/:productId**: Product details page.
- **GET /shop/cart**: Shopping cart page.
- **POST /shop/cart**: Add a product to the cart.
- **POST /shop/cart-delete-item**: Remove a product from the cart.
- **GET /shop/orders**: Orders page.
- **POST /shop/create-order**: Create a new order.

### Socket.io Implementation

To use the Socket.io implementation, ensure that the Socket.io server is running and the client is connected.

#### Events

- **message**: Handle incoming messages.
- **broadcast**: Send messages to all connected clients.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/BigGafLeo/Node.js/blob/main/LICENSE) file for details.

---
