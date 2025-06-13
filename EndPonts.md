# 🧭 HR Management System – API Endpoints

This document details all backend API routes for the HR Management System (MERN stack). Endpoints are grouped by domain for clarity.

---

## 🌐 BASE URL

```bash
http://localhost:8080/api/V1
```

---

## 🔐 Authentication Routes

| Method | Endpoint                      | Description                      | Auth Required   |
| ------ | ----------------------------- | -------------------------------- | --------------- |
| POST   | `/auth/register`              | Register HR/Admin/Employee       | ✅ Admin only   |
| POST   | `/auth/login`                 | Login user                       | ❌ No           |
| POST   | `/auth/logout`                | Logout current user              | ✅ Yes          |
| GET    | `/auth/check-auth`            | Validate logged-in user          | ✅ Yes          |
| GET    | `/auth/profile`               | Get current user profile         | ✅ Yes          |
| POST   | `/auth/forgot-password`       | Send password reset email        | ❌ No           |
| POST   | `/auth/reset-password/:token` | Reset user password              | ❌ No           |
| DELETE | `/auth/delete-account`        | Delete user account              | ✅ Yes          |

---

## 👤 Employee Routes

| Method | Endpoint         | Description               | Auth Role         |
| ------ | ---------------- | ------------------------- | ----------------- |
| POST   | `/employees`     | Create new employee       | Admin / HR        |
| GET    | `/employees`     | Get all employees         | Admin / HR        |
| GET    | `/employees/:id` | Get employee by ID        | Admin / HR / Self |
| PUT    | `/employees/:id` | Update employee info      | Admin / HR / Self |
| DELETE | `/employees/:id` | Delete employee           | Admin only        |

---

## 🏢 Company Routes

| Method | Endpoint         | Description          | Auth Role |
| ------ | ---------------- | -------------------- | --------- |
| POST   | `/companies`     | Create company       | Admin     |
| GET    | `/companies`     | Get all companies    | Admin     |
| GET    | `/companies/:id` | Get company by ID    | Admin     |
| PUT    | `/companies/:id` | Update company       | Admin     |
| DELETE | `/companies/:id` | Delete company       | Admin     |

---

## 🏬 Department Routes

| Method | Endpoint           | Description          | Auth Role  |
| ------ | ------------------ | -------------------- | ---------- |
| POST   | `/departments`     | Create department    | Admin      |
| GET    | `/departments`     | Get all departments  | Admin / HR |
| GET    | `/departments/:id` | Get department by ID | Admin / HR |
| PUT    | `/departments/:id` | Update department    | Admin / HR |
| DELETE | `/departments/:id` | Delete department    | Admin      |

---

## 📝 Leave Management

| Method | Endpoint             | Description                  | Auth Role  |
| ------ | -------------------- | ---------------------------- | ---------- |
| POST   | `/leaves`            | Apply for leave              | Employee   |
| GET    | `/leaves`            | View all leave requests      | Admin / HR |
| GET    | `/leaves/mine`       | View user's leaves           | Employee   |
| PUT    | `/leaves/:id/status` | Approve/Reject leave         | Admin / HR |

---

## 📅 Attendance Tracking

| Method | Endpoint           | Description              | Auth Role  |
| ------ | ------------------ | ------------------------ | ---------- |
| POST   | `/attendance`      | Mark today's attendance  | Employee   |
| GET    | `/attendance`      | View all attendance logs | Admin / HR |
| GET    | `/attendance/mine` | View personal attendance | Employee   |

---

## 💰 Payroll Management

| Method | Endpoint        | Description                    | Auth Role  |
| ------ | --------------- | ------------------------------ | ---------- |
| POST   | `/payroll`      | Generate payroll               | Admin / HR |
| GET    | `/payroll`      | View all payroll records       | Admin / HR |
| GET    | `/payroll/mine` | View user's payrolls           | Employee   |

---

## ⚙️ Role Access Overview

| Role     | Access Level                                                |
| -------- | ---------------------------------------------------------- |
| Admin    | Full access to all features and data                       |
| HR       | Manage employees, leaves, departments, payroll             |
| Employee | Self-service (attendance, leave, profile, payroll)         |

---

## 📄 API Response Format

All successful responses:

```json
{
   "success": true,
   "message": "Your custom message",
   "data": { ... } // or [ ... ]
}
```

| Field   | Type          | Description                        |
| ------- | ------------- | ---------------------------------- |
| success | Boolean       | Indicates request success          |
| message | String        | Descriptive response message       |
| data    | Object/Array  | Returned data payload              |

---

### ❌ Error Response Format

```json
{
   "success": false,
   "message": "Error message"
}
```

| Field   | Type    | Description            |
| ------- | ------- | ---------------------- |
| success | Boolean | Always false           |
| message | String  | Reason for the failure |

---

## 📦 Example

**🟢 Success**
```json
{
   "success": true,
   "message": "Employee profile fetched successfully",
   "data": {
      "name": "John Doe",
      "email": "john@example.com",
      "role": "employee"
   }
}
```

**🔴 Error**
```json
{
   "success": false,
   "message": "Unauthorized access"
}
```
