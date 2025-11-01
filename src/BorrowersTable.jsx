import React, { useState } from "react";
import { Table, Button, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BorrowersTable = () => {
  const [borrowers] = useState([
    {
      id: 1,
      name: "Amit Sharma",
      loanAmount: 50000,
      disbursementDate: "2024-05-10",
      interestRate: 2,
      interestAmount: 1000,
      outstanding: 42000,
    },
    {
      id: 2,
      name: "Neha Patel",
      loanAmount: 80000,
      disbursementDate: "2024-06-15",
      interestRate: 1.5,
      interestAmount: 1200,
      outstanding: 70000,
    },
    {
      id: 3,
      name: "Rajesh Verma",
      loanAmount: 65000,
      disbursementDate: "2024-07-20",
      interestRate: 2.3,
      interestAmount: 1495,
      outstanding: 58000,
    },
  ]);

  return (
    <div className="container mt-4">
      {/* Top bar with title + upload/download buttons */}
      <div className="d-flex   align-items-center mb-3">
        <h3 className="fw-bold">Borrowers List</h3>
        <div>
          <Button variant="primary" className="me-2">
            <i className="bi bi-upload"></i> Upload
          </Button>
          <Button variant="success">
            <i className="bi bi-download"></i> Download
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive shadow-sm rounded">
        <Table bordered hover className="align-middle mb-0">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>Borrower Name</th>
              <th>Loan Amount (₹)</th>
              <th>Disbursement Date</th>
              <th>Interest Rate (%)</th>
              <th>Interest Amount (₹)</th>
              <th>Outstanding Amount (₹)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {borrowers.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.loanAmount.toLocaleString()}</td>
                <td>{b.disbursementDate}</td>
                <td>{b.interestRate}</td>
                <td>{b.interestAmount.toLocaleString()}</td>
                <td>{b.outstanding.toLocaleString()}</td>
                <td>
                  <Button variant="warning" size="sm" className="me-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      {/* <div className="d-flex justify-content-center mt-3">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div> */}
    </div>
  );
};

export default BorrowersTable;
