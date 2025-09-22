import React from "react";
import styled from "styled-components";
 import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";  
import { FaTachometerAlt, FaMoneyCheckAlt, FaChartBar, FaHistory, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <div className="input">
        {/* <button className="value" onClick={() => navigate("/maindashboard")}>
          Dashboard
        </button> */}
<button className="value" onClick={() => navigate("/maindashboard")}>
    <FaTachometerAlt style={{  marginTop:"5px", marginRight: "6px" }} />
    Dashboard
  </button>

        <button className="value" onClick={() => navigate("/loans")}>
          <FaMoneyCheckAlt style={{  marginTop:"5px",  marginRight: "6px" }} />
          Loans
        </button>
        <button className="value" onClick={() => navigate("/reports")}>
           <FaChartBar style={{   marginTop:"5px",  marginRight: "6px" }} />
          Reports
        </button>
        <button className="value" onClick={() => navigate("/payment-history")}>
            <FaHistory style={{  marginTop:"5px",  marginRight: "-2px" }} />
          Payment History
        </button>
        <button className="value" onClick={() => navigate("/settings")}>
           <FaCog style={{ marginTop:"5px", marginRight: "6px" }} />
          Settings
        </button>
        <button className="value" onClick={() => navigate("/logout")}>
            <FaSignOutAlt style={{marginTop:"5px", marginRight: "6px" }} />
          Logout
        </button>
      </div>
    </StyledWrapper>

    // <StyledWrapper>
    //   <div className="input">

    //     <Link to="/maindashboard">Dashboard</Link>

    //     <Link className="value" to="/loans">Loans</Link>
    //     <Link className="value" to="/reports">Reports</Link>
    //     <Link className="value" to="/payment-history">Payment History</Link>
    //     <Link className="value" to="/settings">Settings</Link>
    //     <Link className="value" to="/logout">Logout</Link>
    //   </div>
    // </StyledWrapper>
  );
};

// const StyledWrapper = styled.div`
//   .input {
//     position: fixed;
//     top: 80px;
//     left: 0;
//     height: calc(100vh - 70px);
//     width: 160px;
//     background-color: #222;
//     display: flex;
//     flex-direction: column;
//     align-items: left;
//     padding-top: 20px;
//   }
const StyledWrapper = styled.div`
 .input {
  position: fixed;
  top: 80px; /* below header */
  left: 0;
  height: calc(100vh - 80px - 40px); /* full height minus header & footer */
  width: 160px;
  background-color: #222;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

  .value {
    background-color: transparent;
    border: none;
    padding: 10px;
    color: white;
    display: flex;
    position: relative;
    gap: 10px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 10px;
  }

  .value:not(:active):hover,
  .value:focus {
    background-color: white;
    color: black;
  }

  .value:focus,
  .value:active {
    outline: none;
  }

  .value::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -10px;
    width: 5px;
    height: 80%;
    background-color: #2f81f7;
    border-radius: 5px;
    opacity: 0;
  }

  .value:focus::before,
  .value:active::before {
    opacity: 1;
  }
`;

export default Sidebar;
