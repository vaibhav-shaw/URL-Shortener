# URL Shortener

A simple service that takes in a valid URL and returns a shortened URL. The service also tracks the total number of clicks for each shortened URL and provides analytics.

## Features

- Generate shortened URLs.
- Redirect to the original URL using the shortened version.
- Track the total number of visits/clicks on each URL.
- Access URL analytics to check the number of clicks.
- Display analytics and URLs in a user-friendly interface with **EJS** templates and **CSS** styling.

## API Endpoints

- **POST** `/url` – Generate a shortened URL.
- **GET** `/:id` – Redirect to the original URL.
- **GET** `/url/analytics/:id` – Get the click count for a specific URL.

## Frontend

- **EJS templates** are used to render dynamic pages.
- **CSS** is added for styling to enhance the user interface.

## Setup

1. Clone the repository and navigate to the project directory.
2. Install dependencies using `npm install`.
3. Set up environment variables in a `.env` file (e.g., database connection, port).
4. Run the application with `npm start`.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, CSS
- **Database**: MongoDB
