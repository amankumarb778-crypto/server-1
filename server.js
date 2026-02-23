import express from "express";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3,
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9,
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4,
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1,
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8,
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7,
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2,
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8,
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0,
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9,
  },
];

app.get("/students", (req, res) => {
  res.json(students);
});



app.get("/students/topper", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({
      message: "No students found",
    });
  }

  const topper = students.reduce((highest, current) => {
    return current.cgpa > highest.cgpa ? current : highest;
  });

  res.status(200).json(topper);
});

app.get("/students/average", (req, res) => {

  if (students.length === 0) {
    return res.status(404).json({
      message: "No students found"
    });
  }

  let total = 0;

  for (let i = 0; i < students.length; i++) {
    total += students[i].cgpa;
  }

  const average = total / students.length;

  res.status(200).json({
    averageCGPA: Number(average.toFixed(2))
  });
});






app.get("/students/count", (req, res) => {

  if (!students || students.length === 0) {
    return res.status(404).json({
      message: "No students found"
    });
  }
  res.status(200).json({
    totalstudents:students.length
  });
});

app.get("/students/:id", (req, res) => {
  const studentid=Number(req.params.id);
  const student=students.find((u)=>u.id === studentid);  

if (!students) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(student);
});

app.get("/students/branch/:branchName", (req, res) => {
  const branchname = req.params.branchName.toLowerCase();

  const filteredStudents = students.filter(
    (u) => u.branch.toLowerCase() === branchname
  );

  if (filteredStudents.length === 0) {
    return res.status(404).json({ message: "No students found in this branch" });
  }

  res.status(200).json(filteredStudents);
});



app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}`);
});
