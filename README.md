# URL Shortener

A simple service that takes in a valid URL and returns a shortened URL. The service also tracks the total number of clicks for each shortened URL and provides analytics.

## Features

- Generate shortened URLs.
- Redirect to the original URL using the shortened version.
- Track the total number of visits/clicks on each URL.
- Access URL analytics to check the number of clicks.

## API Endpoints

1. **POST /url** – Generate a shortened URL.
2. **GET /:id** – Redirect to the original URL.
3. **GET /url/analytics/:id** – Get the click count for a specific URL.

## Setup

1. Clone the repository and navigate to the project directory.
2. Install dependencies using `npm install`.
3. Set up environment variables in a `.env` file (e.g., database connection, port).
4. Run the application with `npm start`.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
