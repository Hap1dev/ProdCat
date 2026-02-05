# ProdCat

Built as part of a technical assignment.

This is a full-stack web application for managing products and categories. It provides CRUD (Create, Read, Update, Delete) functionality for both products and categories, along with features like server-side pagination, search, and filtering.

## Tech Stack

-   **Backend:** Node.js, Express.js
-   **Database:** PostgreSQL
-   **ORM:** Prisma
-   **View Engine:** EJS
-   **Styling:** Bootstrap

## Features

-   **Category Management:**
    -   Create, read, update, and delete categories.
    -   View a list of all categories.
-   **Product Management:**
    -   Create, read, update, and delete products.
    -   Each product belongs to a category.
-   **Server-Side Pagination:**
    -   Product list is paginated with 10 items per page.
-   **Search and Filtering:**
    -   Search for products by name (case-insensitive, partial match).
    -   Filter products by category.
-   **Database Seeding:**
    -   A script is provided to seed the database with dummy data for testing.

## Project Structure

The project follows a standard MVC-like architecture:

```
.
├── controllers/
│   ├── category.controller.js
│   └── product.controller.js
├── repository/
│   ├── category.repository.js
│   └── product.repository.js
├── routes/
│   ├── category.routes.js
│   └── product.routes.js
├── services/
│   ├── category.service.js
│   └── product.service.js
├── views/
│   ├── categories/
│   ├── products/
│   └── partials/
├── prisma/
│   ├── schema.prisma
│   └── seed.js
├── .env
├── index.js
├── package.json
└── README.md
```

-   `controllers`: Handle incoming requests, validate input, and send responses.
-   `repository`: Responsible for all database interactions.
-   `routes`: Define the application's API routes.
-   `services`: Contain the business logic of the application.
-   `views`: EJS templates for rendering the user interface.
-   `prisma`: Contains the Prisma schema and seed script.

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm
-   PostgreSQL

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Hap1dev/ProdCat.git
    cd ProdCat
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up the environment variables:**

    Create a `.env` file in the root directory and add the following:

    ```
    DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/DATABASE_NAME?schema=public"
    ```

    Replace `USERNAME`, `PASSWORD`, and `DATABASE_NAME` with your PostgreSQL credentials.

4.  **Run database migrations:**

    ```bash
    npx prisma migrate dev
    ```

5.  **Seed the database (optional):**

    To populate the database with dummy data, run:

    ```bash
    npm run seed
    ```

6.  **Start the server:**

    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Getting Started with Docker

To run the application using Docker and Docker Compose:

1.  **Ensure Docker is running:** Make sure you have Docker Desktop or Docker Engine installed and running on your system.

2.  **Build and run the containers:**

    Navigate to the project root directory where `docker-compose.yml` is located and run:

    ```bash
    docker-compose up --build
    ```

    This command will:
    -   Build the Node.js application image.
    -   Create and start the PostgreSQL database container.
    -   Create and start the Node.js application container.
    -   Automatically run Prisma migrations and start the Node.js server within the application container.

3.  **Access the application:**

    The application will be available at `http://localhost:3000`.

4.  **Stop the containers:**

    To stop and remove the containers, press `Ctrl+C` in the terminal where `docker-compose up` is running.
    To stop and remove containers, networks, and volumes (database data), run:

    ```bash
    docker-compose down -v
    ```

## API Endpoints

### Categories

-   `GET /categories`: Get all categories.
-   `GET /categories/add`: Get the form to add a new category.
-   `POST /categories`: Create a new category.
-   `GET /categories/edit/:id`: Get the form to edit a category.
-   `POST /categories/:id/update`: Update a category.
-   `POST /categories/:id/delete`: Delete a category.

### Products

-   `GET /products`: Get all products with pagination, search, and filtering.
-   `GET /products/add`: Get the form to add a new product.
-   `POST /products`: Create a new product.
-   `GET /products/edit/:id`: Get the form to edit a product.
-   `POST /products/:id/update`: Update a product.
-   `POST /products/:id/delete`: Delete a product.
