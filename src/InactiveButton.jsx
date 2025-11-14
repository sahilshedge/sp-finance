import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



function InactiveButton() {
    return (
        <>
            <Button variant="danger" className="me-2 inactive-loans">
                Inactive
            </Button>

        </>
    )

}
export default InactiveButton;