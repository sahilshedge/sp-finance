import React, { useState } from "react";
import { Table, Button} from "react-bootstrap";
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
      status: "Active",
    },
    {
      id: 2,
      name: "Neha Patel",
      loanAmount: 80000,
      disbursementDate: "2024-06-15",
      interestRate: 1.5,
      interestAmount: 1200,
      outstanding: 70000,
      status: "In Active",
    },
    {
      id: 3,
      name: "Rajesh Verma",
      loanAmount: 65000,
      disbursementDate: "2024-07-20",
      interestRate: 2.3,
      interestAmount: 1495,
      outstanding: 58000,
      status: "Active",
    },
  ]);

  return (
    <div className="container d-flex justify-content-center flex-column ">



      {/* Table */}
      <div className="table-responsive shadow-sm rounded table">
        <Table bordered hover className="align-middle mb-0">
          <thead className="table-dark text-center">
            <tr>
              <th>ID</th>
              <th>Borrower Name</th>
              <th>Loan AMT(₹)</th>
              <th>Disbursement Dt</th>
              <th>Interest Rate(%)</th>
              <th>Interest Amt(₹)</th>
              <th>Outstanding Amt(₹)</th>
              <th>Status</th>
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
                <td>{b.status.toLocaleString()}</td>
                <td>
                  <Button variant="info" size="sm" className="me-2 text-white">
                    Details
                  </Button>

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
    </div>
  );
};

export default BorrowersTable;
