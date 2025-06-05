# Book Review API

A RESTful API for managing books, users, and reviews, built with **Node.js**, **Express**, and **MongoDB**.

---

## Features

-  User authentication (Signup/Login with JWT)
-  CRUD operations on books
-  Add, update, and delete reviews
-  Auth middleware for protected routes
-  Filter and search books by author or genre
-  Average rating calculation for books

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT
- **Environment Variables:** dotenv

---

##  Project Structure
book-review-api/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── .env # Environment variables (not committed)
├── .gitignore
├── app.js
├── server.js
├── package.json
└── README.md

2. Install dependencies
   npm install

3. Create .env file
Create a .env file in the root with the following content:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Run the server
node server.js
# or with nodemon
npx nodemon server.js

 API Endpoints
Auth
Method	Route	Description
POST	/api/signup	Register a new user
POST	/api/login	Login and get token

Books
Method	Route	Description
GET	/api/books	Get all books
GET	/api/books/:id	Get book by ID + rating
POST	/api/books	Add a new book (auth)
GET	/api/search?q=	Search by title/author

Reviews
Method	Route	Description
POST	/api/books/:id/reviews	Add a review (auth)
PUT	/api/reviews/:reviewId	Update a review (auth)
DELETE	/api/reviews/:reviewId	Delete a review (auth)

Testing with Postman
Import the API endpoints

Use bearer token for protected routes

Test user creation, login, book CRUD, and reviews



