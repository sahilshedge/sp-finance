import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



function AddLoans() {
    return (
        <>
            <Button variant="primary" className="ms-2  new-loan">
                + Add Loan
            </Button>

        </>
    )

}
export default AddLoans;