# Travel Backend

This is the backend for the Travel web application. It is built using Express.js and MongoDB Atlas cloud database. The backend provides three APIs for managing user data, fetching data, and user authentication.

## APIs

1. **Add Data API**
   - Endpoint: `/travel/makemytrip`
   - Method: POST
   - Description: Adds user data to the database.
   - Request Body: JSON data containing user information.
   - Response: Success message or error if data insertion fails.

2. **Fetch Data API**
   - Endpoint: `/admin/dashboard`
   - Method: GET
   - Description: Retrieves user data from the database.
   - Response: JSON data containing user information.

3. **Login API**
   - Endpoint: `/adminpannel/login`
   - Method: POST
   - Description: Authenticates user login.
   - Request Body: JSON data containing user credentials (email and password).
   - Response: Success message with authentication token or error if login fails.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mannika763/Travel-Backend.git

## Dependencies Used

This project uses the following dependencies:

- **cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing) in Express.js.
  - Version: ^2.8.5

- **dotenv**: Zero-dependency module for loading environment variables from a .env file into process.env.
  - Version: ^16.4.5

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
  - Version: ^4.19.2

- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
  - Version: ^8.3.5

- **nodemon**: Utility for automatically restarting the server when changes are detected in the source code.
  - Version: ^3.1.0

## Deployment

This backend is deployed on [Render](https://render.com/).