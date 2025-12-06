// backend/server.js
import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcryptjs";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection error:", err); 
  } else {
    console.log("✅ Connected to MySQL database");
  }
});


// =====================login page=================================================

// 🧩 Route: Register new user
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "All fields required" });

  // Check if user exists
  db.query("SELECT * FROM users WHERE username = ?", [username], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length > 0)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword],
      (err) => {
        if (err) return res.status(500).json({ message: "Insert failed" });
        return res.status(201).json({ message: "User registered successfully" });
      }
    );
  });
});

// 🧩 Route: Login user
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM users WHERE username = ?", [username], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0)
      return res.status(400).json({ message: "Invalid username or password" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid username or password" });

    res.status(200).json({ message: "Login successful", username: user.username });
  });
});

// ===============================login page=====================================================================


// ======================== Add Borrower / Loan =============================

app.post("/add-loan", (req, res) => {
  const {
    borrowerName,
    borrowerAddress,
    mobileNumber,
    loanAmount,
    disbursementDate,
    interestRate,
    interestAmount,
    outstanding,
    loanReferredBy,
    penalty,
    status,
  } = req.body;

  const q = `
    INSERT INTO borrowers 
    (name, borrowerAddress, mobileNumber, loanAmount, disbursementDate, interestRate, interestAmount, outstanding, loanReferredBy, penalty, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    borrowerName,
    borrowerAddress,
    mobileNumber,
    loanAmount,
    disbursementDate,
    interestRate,
    interestAmount,
    outstanding,
    loanReferredBy || null,
    penalty || 0,
    status || "Active",
  ];

  db.query(q, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Insert failed", error: err });
    }
    return res.status(201).json({
      message: "Loan added successfully",
      borrowerId: result.insertId,
    });
  });
});

app.get("/borrowers", (req, res) => {
  db.query("SELECT * FROM borrowers", (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    return res.json(results);
  });
});

// =====================================================Delete button===================================================================
app.delete("/api/borrowers/:id", (req, res) => {
  const borrowerId = req.params.id;

  db.query("DELETE FROM borrowers WHERE id = ?", [borrowerId], (err, result) => {
    if (err) {
      console.error("Delete error:", err);
      return res.status(500).json({ message: "Delete failed" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Borrower not found" });
    }

    return res.json({ message: "Borrower deleted successfully" });
  });
});


// ================== edit Borrower / Loan ===========================
app.put("/api/borrowers/:id", (req, res) => {
  const borrowerId = req.params.id;
  const {
    name,
    loanAmount,
    interestRate,
    disbursementDate,
    outstanding,
    status
  } = req.body;

  const q = `
    UPDATE borrowers 
    SET name=?, loanAmount=?, interestRate=?, disbursementDate=?, outstanding=?, status=?
    WHERE id=?
  `;

  db.query(
    q,
    [name, loanAmount, interestRate, disbursementDate, outstanding, status, borrowerId],
    (err, result) => {
      if (err) {
        console.error("Update Error:", err);
        return res.status(500).json({ message: "Update failed" });
      }

      return res.json({ message: "Borrower updated successfully" });
    }
  );
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
 