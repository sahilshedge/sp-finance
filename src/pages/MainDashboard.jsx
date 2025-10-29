import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const MainDashboard = () => {
  const [stats, setStats] = useState({
    borrowers: 0,
    openLoans: 0,
    closedLoans: 0,
  });

  // Fetch dashboard stats from backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/dashboard-stats");
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="container mt-5">
      {/* <h2 className="mb-4 text-center">📊 Welcome to Dashboard</h2> */}

      <div className="row">
        {/* Total Borrowers */}
        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">
            <h5 className="card-title">Total Borrowers</h5>
            <h2 className="text-primary">{stats.borrowers}</h2>
          </div>
        </div>

        {/* Open Loans */}
        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">
            <h5 className="card-title">Open Loans</h5>
            <h2 className="text-success">{stats.openLoans}</h2>
          </div>
        </div>

        {/* Closed Loans */}
        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">
            <h5 className="card-title">Closed Loans</h5>
            <h2 className="text-danger">{stats.closedLoans}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
