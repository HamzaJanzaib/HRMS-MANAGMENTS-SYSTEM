# HR Management System (HRMS)

A robust HR Management System built using the MERN stack (MongoDB, Express, React, Node.js), designed to manage multiple organizations with advanced HR operations like employee onboarding, departments, branches, attendance, leave management, salary processing, and more.

---

## 🧑‍💼 System Overview

This system supports multiple roles and layers of management:

### Roles:

- **Owner**: Registers and manages companies.
- **Company**: Registers through an invite from the Owner.
- **Admin**: Assigned to a company, can manage HRs, departments, branches, users.
- **HR Manager**: Assigned to a branch, manages users, interviews, and onboarding.
- **User/Employee**: Regular employee, can be invited for interview and later hired.

---

## 📦 Core Features

- Multi-level role-based access.
- Invitation-based registration (email via Nodemailer).
- Google Meet integration for interviews.
- Department & Branch creation and assignment.
- Attendance tracking.
- Leave application and approval workflow.
- Salary and bonus management with branch and department level budgets.
- Block/unblock system for user control.

---

## 🗃️ Schema Tables

### 🧑‍💼 Owner Schema

| Field       | Type   | Description     |
| ----------- | ------ | --------------- |
| name        | String | Full name       |
| email       | String | Unique email    |
| phoneNumber | String | Contact number  |
| password    | String | Hashed password |

---

### 🏢 Company Schema

| Field          | Type       | Description               |
| -------------- | ---------- | ------------------------- |
| name           | String     | Company name              |
| email          | String     | Company email             |
| address        | String     | Company address           |
| totalEmployees | Number     | Total number of employees |
| destination    | String     | Business sector/industry  |
| branches       | [ObjectId] | References to Branches    |
| contactDetails | Object     | Additional contacts       |
| adminId        | ObjectId   | Reference to Admin user   |

---

### 🧑‍💼 Admin Schema

| Field     | Type     | Description          |
| --------- | -------- | -------------------- |
| userId    | ObjectId | Reference to User    |
| companyId | ObjectId | Reference to Company |
| role      | String   | Default: 'admin'     |

---

### 👨‍💼 HR Manager Schema

| Field         | Type       | Description               |
| ------------- | ---------- | ------------------------- |
| userId        | ObjectId   | Reference to User         |
| branchId      | ObjectId   | Reference to Branch       |
| departmentIds | [ObjectId] | References to Departments |
| companyId     | ObjectId   | Reference to Company      |
| role          | String     | Default: 'hr-manager'     |

---

### 👤 User (Employee) Schema

| Field            | Type     | Description                       |
| ---------------- | -------- | --------------------------------- |
| name             | String   | Full name                         |
| email            | String   | Unique email                      |
| password         | String   | Hashed password                   |
| address          | String   | Address                           |
| contactNumber    | String   | Phone number                      |
| age              | Number   | Age                               |
| qualification    | String   | Education background              |
| gender           | String   | Gender                            |
| status           | String   | 'active', 'inactive', etc.        |
| appliedRole      | String   | Role applied for (if any)         |
| resumeUrl        | String   | CV/Resume URL                     |
| interviewId      | ObjectId | Reference to Interview (optional) |
| departmentId     | ObjectId | Reference to Department           |
| branchId         | ObjectId | Reference to Branch               |
| companyId        | ObjectId | Reference to Company              |
| isDepartmentLead | Boolean  | Lead flag                         |
| blocked          | Boolean  | Access control                    |
| createdAt        | Date     | Registration timestamp            |

---

### 🏬 Branch Schema

| Field          | Type     | Description                  |
| -------------- | -------- | ---------------------------- |
| name           | String   | Branch name                  |
| address        | String   | Branch address               |
| companyId      | ObjectId | Reference to Company         |
| hrManagerId    | ObjectId | Reference to HR Manager      |
| totalEmployees | Number   | Count of employees in branch |
| salaryBudget   | Number   | Total monthly salary cap     |
| bonusPool      | Number   | Available bonus amount       |
| deductionsPool | Number   | Monthly deduction amount     |
| remarks        | String   | Notes                        |

---

### 🧩 Department Schema

| Field          | Type     | Description                 |
| -------------- | -------- | --------------------------- |
| name           | String   | Department name             |
| branchId       | ObjectId | Reference to Branch         |
| companyId      | ObjectId | Reference to Company        |
| departmentLead | ObjectId | Lead User                   |
| salaryLimit    | Number   | Max monthly salary for dept |
| bonusAllowance | Number   | Bonus limit for department  |
| cutAmount      | Number   | Deduction threshold         |
| remarks        | String   | Additional notes            |

---

### ⏱️ Attendance Schema

| Field        | Type     | Description                  |
| ------------ | -------- | ---------------------------- |
| userId       | ObjectId | Reference to User            |
| companyId    | ObjectId | Reference to Company         |
| date         | Date     | Attendance date              |
| checkInTime  | Date     | Time of check-in             |
| checkOutTime | Date     | Time of check-out            |
| status       | String   | present, absent, leave, etc. |
| remarks      | String   | Optional comment             |

---

### 🌴 Leave Schema

| Field      | Type     | Description                      |
| ---------- | -------- | -------------------------------- |
| userId     | ObjectId | Reference to User                |
| companyId  | ObjectId | Reference to Company             |
| leaveType  | String   | Sick, Casual, Paid, etc.         |
| fromDate   | Date     | Start of leave                   |
| toDate     | Date     | End of leave                     |
| reason     | String   | Reason for leave                 |
| status     | String   | pending, approved, rejected      |
| appliedAt  | Date     | Application timestamp            |
| approvedBy | ObjectId | Reference to Approver (Admin/HR) |

---

### 💸 Salary Schema

| Field       | Type     | Description              |
| ----------- | -------- | ------------------------ |
| userId      | ObjectId | Reference to User        |
| companyId   | ObjectId | Reference to Company     |
| baseSalary  | Number   | Monthly base salary      |
| bonuses     | Number   | Total bonuses            |
| deductions  | Number   | Deductions               |
| finalSalary | Number   | Calculated salary        |
| month       | String   | Format: YYYY-MM          |
| paidStatus  | String   | paid, unpaid, processing |
| paidAt      | Date     | Payment date             |

---

### 🚫 Block System

Users can be blocked via a `blocked` flag:

```js
blocked: {
  type: Boolean,
  default: false
}
```

**Middleware example:**

```js
if (req.user.blocked) {
  return res.status(403).json({ message: 'Access denied. User is blocked.' });
}
```

---

## ✅ Future Improvements

- Dashboards for each role.
- Notifications system.
- Audit logs for tracking actions.
- Employee performance reports.

---

## 📌 Conclusion

This HRMS is designed for startups, SMEs, and multi-branch companies to streamline hiring, employee tracking, HR operations, and financials. Build APIs and front-end components using these structured schemas.

