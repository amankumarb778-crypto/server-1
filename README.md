# 🎓 Student Dashboard API

## 📌 Project Title
Student Dashboard REST API

---

## 🎯 Objective
The objective of this project is to build a RESTful API using Node.js and Express.js to manage student records.  
The API allows users to perform CRUD operations, filter students by branch, and retrieve the total number of students.

---

## 📡 List of Implemented Routes

| Method | Route | Description |
|--------|-------|------------|
| GET | /students | Get all students |
| GET | /students/:id | Get student by ID |
| POST | /students | Add a new student |
| PUT | /students/:id | Update student details |
| DELETE | /students/:id | Delete a student |
| GET | /students/branch/:branchName | Get students by branch |
| GET | /students/count | Get total number of students |

---

## 🔗 Sample API URLs

### Local URLs
http://localhost:3000/students  
http://localhost:3000/students/1  
http://localhost:3000/students/branch/cse  
http://localhost:3000/students/count  

### Deployed URLs
https://student-dashboard-o6vn.onrender.com/students  
https://student-dashboard-o6vn.onrender.com/students/branch/cse  
https://student-dashboard-o6vn.onrender.com/students/count  

---

## 📬 Postman Collection Link

https://documenter.getpostman.com/view/50839281/2sBXcGCz69

---

## 💻 Steps to Run Locally

1. Clone the repository  
   ```bash
   git clone https://github.com/amankumarb778-crypto/server-1.git
   ```

2. Navigate to project folder  
   ```bash
   cd server-1
   ```

3. Install dependencies  
   ```bash
   npm install
   ```

4. Start the server  
   ```bash
   node index.js
   ```

5. Open in browser or Postman  
   http://localhost:3000

---

## 🌐 Deployed Link

https://student-dashboard-o6vn.onrender.com

---

## 📂 Repository Structure & Commits

The repository follows a clean and organized structure with meaningful file naming.  
Commits are descriptive and clearly indicate the changes made, such as:

- Initial project setup  
- Added CRUD routes  
- Implemented branch filtering  
- Added count endpoint  
- Deployed project on Render  
- Updated README documentation  

The project structure is organized and easy to understand.
