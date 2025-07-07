# 💸 Expense Tracker

A web-based **Expense Tracker** application developed as a project for the **Database Management System (DBMS)** course in the **4th Semester**. This application allows users to **add** and **delete** expense records, storing them in a **MySQL database** with a **RESTful API** backend and a dynamic front-end interface.

---

## 📌 Features

- ➕ **Add Expense**: Record expenses with a description and amount.
- 🗑️ **Delete Expense**: Remove expense records from the database.
- 📊 **View Expenses**: Display a list of all expenses in real-time.
- 🔗 **MySQL Database Integration**: Persistent storage using MySQL.
- 🌐 **RESTful API**: Backend API for managing expense records.
- 🎨 **Responsive UI**: Simple and user-friendly interface using Alpine.js.

---

## ⚙️ Technologies Used

- **Frontend**:
  - HTML, CSS
  - Alpine.js (lightweight JavaScript framework)
- **Backend**:
  - Node.js with Express.js
  - MySQL for database management
- **Tools**:
  - MySQL Server
  - Node.js (v14 or higher)
  - npm (Node Package Manager)

---

## 📁 Project Structure

```
ExpenseTracker/
│
├── index.html         # Main HTML file for the front-end
├── styles.css         # CSS styles for the UI
├── app.js             # Frontend logic using Alpine.js
├── server.js          # Backend API using Express.js
└── README.md          # Project documentation
```

---

## 💾 Database Schema

Before running the application, set up the MySQL database and table:

```sql
CREATE DATABASE expense_tracker;

USE expense_tracker;

CREATE TABLE expenses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL
);
```

---

## 🚀 How to Run

### ✅ Requirements
- **Node.js** (v14 or higher)
- **MySQL Server**
- **npm** (Node Package Manager)

### ▶️ Steps
1. Clone or download the repository.
2. Ensure your MySQL server is running.
3. Update the database credentials in `server.js`:

```javascript
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'expense_tracker'
});
```

4. Install dependencies for the backend:
```bash
npm install express mysql
```

5. Start the backend server:
```bash
node server.js
```

6. Open `index.html` in a browser to access the front-end, or serve it using a local server (e.g., `live-server`):
```bash
npm install -g live-server
live-server
```

7. Access the application at `http://localhost:3000` (or the port specified in `server.js`).

---

## 📊 Functional Overview

1. **Add Expense**
   - Input a description and amount via the form.
   - Data is sent to the backend via a POST request and stored in the MySQL database.
   - The expense is dynamically added to the UI.

2. **Delete Expense**
   - Click the "Delete" button next to an expense.
   - Sends a DELETE request to the backend, removing the record from the database and updating the UI.

3. **View Expenses**
   - Displays all expenses in a list, fetched from the database via the API.

---

## 💡 Concepts Practiced

- **Database Management**: MySQL for storing and managing expense data.
- **RESTful API Development**: Using Express.js to create API endpoints.
- **Frontend-Backend Integration**: Connecting Alpine.js with a Node.js backend.
- **CRUD Operations**: Create (POST) and Delete (DELETE) functionality.
- **Responsive Web Design**: Simple and clean UI with CSS.

---

## 📷 Sample Output

```
Expense Tracker

[Input Field: Expense description] [Input Field: Amount] [Add Expense Button]

- Groceries $50.00 [Delete Button]
- Rent $500.00 [Delete Button]
- Coffee $5.00 [Delete Button]
```

---

## 📚 Course Information

- **Course**: Database Management System (DBMS)
- **Semester**: 4th Semester

---
