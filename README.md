# CRM Lead Management REST API

A RESTful backend API for a Customer Relationship Management (CRM) system built using Node.js, Express.js, and MongoDB. The application allows employees/counselors to register, log in, view public enquiries, and claim leads for their own follow-up.

## Features

- **Employee Authentication:** Register and log in using email and password.
- **JWT Authentication:** Protect private endpoints using JSON Web Tokens.
- **Public Enquiry Form:** Allow prospective clients to submit enquiries without authentication.
- **Public Lead Listing:** Fetch all unclaimed enquiries available to counselors.
- **Lead Claiming:** Allow an authenticated counselor to claim an unassigned enquiry.
- **Private Lead Management:** Fetch only the enquiries claimed by the logged-in counselor.
- **Concurrency Protection:** Use atomic MongoDB updates to prevent multiple counselors from claiming the same enquiry.
- **Input Validation and Error Handling:** Handle invalid requests, duplicate registrations, authentication failures, and conflicting claims.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv

## Project Structure

```text
crm-backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Employee.js
│   │   └── Enquiry.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── enquiry.routes.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Prerequisites

- Node.js and npm
- MongoDB running locally or a MongoDB Atlas connection
- Postman or another REST API client

## Installation and Setup

**1. Clone the repository**

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd crm-backend
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/crm_db
JWT_SECRET=your_long_random_secret
JWT_EXPIRES_IN=1d
```

Replace the MongoDB connection string and JWT secret with your own values as needed. Never commit your `.env` file or production secrets.

**4. Start the server**

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The API will run at `http://localhost:5000`.

**5. Verify the server**

```http
GET http://localhost:5000/api/health
```

Expected response:

```json
{
  "message": "CRM API is running"
}
```

## API Endpoints

### Authentication

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/auth/register` | Register a counselor | Public |
| POST | `/api/auth/login` | Log in a counselor | Public |

### Enquiries

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/enquiries` | Submit a new enquiry | Public |
| GET | `/api/enquiries/public` | Fetch unclaimed enquiries | Authenticated |
| PATCH | `/api/enquiries/:id/claim` | Claim an enquiry | Authenticated |
| GET | `/api/enquiries/my` | Fetch the logged-in counselor's claimed enquiries | Authenticated |

## Example Requests

### 1. Register an Employee

`POST /api/auth/register`

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "password": "StrongPass123"
}
```

### 2. Log In

`POST /api/auth/login`

```json
{
  "email": "rahul@example.com",
  "password": "StrongPass123"
}
```

The response contains a JWT token. Use it to access protected endpoints.

### 3. Submit a Public Enquiry

`POST /api/enquiries`

```json
{
  "name": "Priya Patnaik",
  "email": "priya@example.com",
  "phone": "9876543210",
  "courseInterest": "Full Stack Development"
}
```

Authentication is not required for this endpoint.

### 4. Fetch Public Enquiries

`GET /api/enquiries/public`

Request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

Returns enquiries that have not yet been claimed.

### 5. Claim an Enquiry

`PATCH /api/enquiries/ENQUIRY_ID/claim`

Request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

The authenticated counselor becomes the owner of the enquiry. If another counselor has already claimed it, the API returns `409 Conflict`.

### 6. Fetch My Enquiries

`GET /api/enquiries/my`

Request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

Returns only enquiries claimed by the authenticated counselor.

## Lead Ownership Logic

Each enquiry contains a `claimedBy` field:

- `null`: The enquiry is public and available to claim.
- Employee ObjectId: The enquiry is assigned to that employee and is private to that counselor.

The claim endpoint uses an atomic conditional update that only succeeds when `claimedBy` is `null`. This prevents two counselors from successfully claiming the same enquiry.

## Testing

The APIs can be tested using Postman or Thunder Client.

Recommended test flow:

1. Register two different counselors.
2. Log in and obtain their JWT tokens.
3. Submit an enquiry without authentication.
4. Fetch the public enquiries using a counselor's token.
5. Claim an enquiry.
6. Verify that the enquiry disappears from the public list.
7. Verify that the owner can see it through the `/my` endpoint.
8. Verify that another counselor cannot see or claim the same enquiry.
9. Test invalid tokens, duplicate registrations, and invalid enquiry IDs.

## Security Considerations

- Passwords are hashed using bcryptjs.
- Protected endpoints validate JWTs.
- Lead ownership is determined from the authenticated employee's identity.
- Environment variables are used for database credentials and JWT secrets.
- Atomic updates prevent conflicting lead claims.

## Author

Developed as a Node.js backend assignment to demonstrate REST API design, authentication, database modeling, and lead ownership management.
