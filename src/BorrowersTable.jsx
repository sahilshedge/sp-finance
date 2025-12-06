// 
import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./Details";
import Edit from "./Edit";
import Delete from "./Delete";

const BorrowersTable = ({ loans, refresh, refreshBorrowers }) => {
  const borrowers = loans;

  const handleUpdate = () => {

    refreshBorrowers();
  };

  const handleDelete = () => {

    refreshBorrowers();
  };

  return (
    <div className="container d-flex justify-content-center flex-column ">
     
      <div className="table-responsive shadow-sm rounded table">
        <Table bordered hover className="align-middle mb-0">
          <thead className="table-dark text-center">
            <tr>
              <th>Sr no</th>
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
            {borrowers.map((b, index) => (
              <tr key={b.id}>
                <td>{index + 1}</td>
                <td>{b.name}</td>
                <td>{b.loanAmount.toLocaleString()}</td>
                {/* <td>{b.disbursementDate}</td> */}
                <td>{new Date(b.disbursementDate).toISOString().split("T")[0]}</td>

                <td>{b.interestRate}</td>
                <td>{b.interestAmount.toLocaleString()}</td>
                <td>{b.outstanding.toLocaleString()}</td>
                <td>{b.status}</td>
                <td>
                  <Details borrower={b} />
                  <Edit borrower={b} onUpdate={handleUpdate} />
                  <Delete borrowerId={b.id}
                    onDelete={handleDelete}
                    refreshBorrowers={refreshBorrowers} />
                  <button class="btn btn-primary">Pay Now</button>


                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
 <h4 className="mb-3 fw-bold text-center">
        Total Borrowers: {borrowers.length}
      </h4>

    </div>
  );
};

export default BorrowersTable;
