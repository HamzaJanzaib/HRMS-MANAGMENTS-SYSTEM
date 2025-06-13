# MERN HR Management System Backend

Welcome to the backend documentation for the MERN HR Management System. This document is intended for developers and team members working on the project. It covers the architecture, data models, API routes, middleware, authentication, and other key backend features.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Environment Variables](#environment-variables)
5. [Data Models (Schemas)](#data-models-schemas)
    - [User](#user-schema)
    - [Company](#company-schema)
    - [Department](#department-schema)
    - [Leave](#leave-schema)
    - [Payroll](#payroll-schema)
    - [Employee](#employee-schema)
    - [AttendanceLog](#attendancelog-schema)
6. [Middleware](#middleware)
7. [API Routes & Features](#api-routes--features)
8. [Role-Based Access Control](#role-based-access-control)
9. [Authentication & Security](#authentication--security)
10. [Email Notifications](#email-notifications)
11. [Setup & Running Locally](#setup--running-locally)
12. [Contributing](#contributing)
13. [License](#license)

---

## Project Overview

This backend powers a Human Resource Management System built with the MERN stack. It provides RESTful APIs for user management, employee records, leave tracking, payroll, attendance, and more. The backend is built with Node.js, Express, and MongoDB (via Mongoose).

---

## Tech Stack

- **Node.js** (runtime)
- **Express.js** (web framework)
- **MongoDB** (database)
- **Mongoose** (ODM)
- **JWT** (authentication)
- **bcrypt** (password hashing)
- **Nodemailer** (email notifications)
- **dotenv** (environment variables)

---

## Folder Structure

```
/Server
  /controllers
  /models
  /routes
  /middleware
  /utils
  /config
  README.md
  .env
  server.js
```

---

## Environment Variables

Create a `.env` file in the root directory with the following keys:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:3000
```

---

## Data Models (Schemas)

### 1. User Schema

Stores user info and authentication details.

| Field             | Type     | Required | Description                                    |
|-------------------|----------|----------|------------------------------------------------|
| name              | String   | Yes      | Full name                                      |
| email             | String   | Yes      | Unique, used for login                         |
| password          | String   | Yes      | Hashed password                                |
| role              | String   | No       | 'admin', 'hr', or 'employee' (default: employee)|
| department        | String   | No       | Department name                                |
| position          | String   | No       | Job title                                      |
| isActive          | Boolean  | No       | Active status (default: true)                  |
| resetToken        | String   | No       | For password reset                             |
| resetTokenExpiry  | Date     | No       | Expiry for reset token                         |
| timestamps        | Date     | Auto     | createdAt, updatedAt                           |

---

### 2. Company Schema

Represents companies in the system.

| Field         | Type           | Required | Description                      |
|---------------|----------------|----------|----------------------------------|
| name          | String         | Yes      | Company name                     |
| location      | String         | No       | Address or city                  |
| industry      | String         | No       | Industry type                    |
| departments   | [ObjectId]     | No       | Linked departments               |
| createdBy     | ObjectId       | No       | User (admin) who created company |
| timestamps    | Date           | Auto     | createdAt, updatedAt             |

---

### 3. Department Schema

Departments within companies.

| Field      | Type      | Required | Description                  |
|------------|-----------|----------|------------------------------|
| name       | String    | Yes      | Department name              |
| company    | ObjectId  | No       | Reference to Company         |
| head       | ObjectId  | No       | User who is department head  |
| timestamps | Date      | Auto     | createdAt, updatedAt         |

---

### 4. Leave Schema

Tracks leave requests.

| Field         | Type      | Required | Description                              |
|---------------|-----------|----------|------------------------------------------|
| employee      | ObjectId  | Yes      | Reference to employee                    |
| startDate     | Date      | Yes      | Leave start date                         |
| endDate       | Date      | Yes      | Leave end date                           |
| type          | String    | Yes      | 'sick', 'casual', 'earned', 'other'      |
| reason        | String    | No       | Reason for leave                         |
| status        | String    | No       | 'pending', 'approved', 'rejected'        |
| appliedAt     | Date      | No       | Date applied                             |
| reviewedBy    | ObjectId  | No       | User who reviewed                        |
| reviewedAt    | Date      | No       | Date reviewed                            |
| timestamps    | Date      | Auto     | createdAt, updatedAt                     |

---

### 5. Payroll Schema

Manages salary and payroll info.

| Field         | Type      | Required | Description                              |
|---------------|-----------|----------|------------------------------------------|
| employee      | ObjectId  | Yes      | Employee reference                       |
| salaryMonth   | String    | Yes      | Format: YYYY-MM                          |
| basicSalary   | Number    | Yes      | Base salary                              |
| allowances    | Number    | No       | Additional allowances (default: 0)       |
| deductions    | Number    | No       | Salary deductions (default: 0)           |
| netSalary     | Number    | No       | Calculated: basic + allowances - deductions|
| paymentDate   | Date      | No       | Date paid                                |
| paymentMethod | String    | No       | 'bank transfer', 'cash', etc.            |
| status        | String    | No       | 'pending', 'paid' (default: 'pending')   |
| timestamps    | Date      | Auto     | createdAt, updatedAt                     |

---

### 6. Employee Schema

Employee-specific details.

| Field           | Type      | Required | Description                        |
|-----------------|-----------|----------|------------------------------------|
| user            | ObjectId  | No       | Reference to User                  |
| empId           | String    | Yes      | Unique employee ID                 |
| dateOfJoining   | Date      | No       | Joining date                       |
| salary          | Number    | No       | Current salary                     |
| leaves          | [Leave]   | No       | List of leave requests             |
| attendanceLogs  | [AttendanceLog] | No | Attendance records                 |
| payroll         | [Payroll] | No       | Payroll records                    |
| timestamps      | Date      | Auto     | createdAt, updatedAt               |

---

### 7. AttendanceLog Schema

Tracks daily attendance.

| Field      | Type      | Required | Description                  |
|------------|-----------|----------|------------------------------|
| employee   | ObjectId  | No       | Employee reference           |
| date       | Date      | No       | Date of attendance           |
| checkIn    | Time      | No       | Check-in time                |
| checkOut   | Time      | No       | Check-out time               |
| status     | String    | No       | 'present', 'absent', 'late' (default: 'present') |
| timestamps | Date      | Auto     | createdAt, updatedAt         |

---

## Middleware

### 1. protect

- Extracts JWT token from HTTP-only cookie.
- Verifies token and attaches user info to request.
- Sends 401 Unauthorized if invalid/missing.

### 2. authorizeRoles

- Accepts allowed roles as parameters.
- Checks if authenticated user's role matches.
- Allows or denies request (403 Forbidden).

---

## API Routes & Features

### 1. Authentication (`/api/auth`)

- **POST `/register`**: Admins register new users.
- **POST `/login`**: User login, returns JWT cookie.
- **POST `/logout`**: Clears JWT cookie.
- **GET `/check-auth`**: Checks current user session.
- **GET `/profile`**: Fetches full user profile.
- **POST `/forgot-password`**: Sends reset email.
- **POST `/reset-password/:token`**: Resets password.
- **DELETE `/delete-account`**: Deletes user account.

### 2. Employee Management (`/api/employees`)

- **POST `/`**: Create employee (admin/hr).
- **GET `/`**: List all employees (admin/hr).
- **GET `/:id`**: View employee details (admin/hr/self).
- **PUT `/:id`**: Update employee info (admin/hr/self).
- **DELETE `/:id`**: Delete employee (admin).

### 3. Leave Requests (`/api/leaves`)

- **POST `/`**: Apply for leave.
- **GET `/`**: View all leaves (admin/hr).
- **GET `/mine`**: Employee views own leaves.
- **PUT `/:id/status`**: Approve/reject leave (admin/hr).

### 4. Attendance Logs (`/api/attendance`)

- **POST `/`**: Mark attendance.
- **GET `/`**: View all attendance (admin/hr).
- **GET `/mine`**: Employee views own attendance.

### 5. Payroll (`/api/payroll`)

- **POST `/`**: Generate payroll (admin/hr).
- **GET `/`**: View all payroll records (admin/hr).
- **GET `/mine`**: Employee views own payroll.

---

## Role-Based Access Control

- All protected routes require a valid JWT token.
- **admin**: Full access.
- **hr**: Manage employees, leaves, payroll (limited admin routes).
- **employee**: Access own data, apply leaves, mark attendance.
- Public routes (e.g., company info) do not require login.
- Employees cannot self-register; only admin/hr can register users.

---

## Authentication & Security

- Passwords hashed with bcrypt.
- JWT tokens stored in HTTP-only cookies (prevents XSS).
- Reset tokens securely generated and hashed.
- Sensitive routes require role-based authorization.
- Logout clears cookies to invalidate session.

---

## Email Notifications

Emails sent via Nodemailer for:

- Registration success
- Login welcome back
- Password reset requests
- Password reset confirmations (optional)

---

## Setup & Running Locally

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file (see above).
4. Start the server:

   ```bash
   npm run dev
   ```

5. API runs at `http://localhost:8080/api/v1`.

---

## Contributing

- Fork the repo and create a feature branch.
- Follow code style and naming conventions.
- Submit a pull request with a clear description.

---

## License

This project is licensed under the MIT License.

---

For any questions, contact the project maintainer.

