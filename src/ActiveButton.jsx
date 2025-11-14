import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



function ActiveButton() {
    return (
        <>
            <Button variant="success" className="me-2 active-loans" >
                Active
            </Button>

        </>
    )

}
export default ActiveButton;