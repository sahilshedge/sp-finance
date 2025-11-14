import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUsers, FaDollarSign, FaChartLine, FaPercent } from "react-icons/fa";
import "../App.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";


const MainDashboard = () => {
  const [stats, setStats] = useState({
    totalLoans: 100,
    activeLoans: 30,
    totalPrincipal: 500,
    monthlyInterest: 1000,
  });

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
    <div className="dashboard-container ">
      <h2 className="fw-bold text-dark mb-1">SNP Finance</h2>
      <p className="text-muted mb-4">Loan Management Dashboard</p>

      {/* Equal spacing both horizontally and vertically */}
      <div className="row g-4">
        {/* Total Loans */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 border-0 rounded-4 dashboard-card">
            <h6 className="text-secondary mb-2">Total Loans</h6>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="fw-bold text-primary">{stats.totalLoans}</h3>
              <FaUsers size={28} className="text-primary" />
            </div>
          </div>
        </div>

        {/* Active Loans */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 border-0 rounded-4">
            <h6 className="text-secondary mb-2">Active Loans</h6>
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="fw-bold text-success">{stats.activeLoans}</h3>
              <FaChartLine size={28} className="text-success" />
            </div>
          </div>
        </div>

        {/* Total Principal */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 border-0 rounded-4">
            <h6 className="text-secondary mb-2">Total Principal</h6>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="fw-bold text-primary">
                ₹{stats.totalPrincipal.toLocaleString("en-IN")}
              </h4>
              <FaDollarSign size={28} className="text-primary" />
            </div>
          </div>
        </div>

        {/* Monthly Interest */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 border-0 rounded-4">
            <h6 className="text-secondary mb-2">Monthly Interest</h6>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="fw-bold text-success">
                ₹{stats.monthlyInterest.toLocaleString("en-IN")}
              </h4>
              <FaPercent size={26} className="text-success" />
            </div>
          </div>
        </div>
      </div>
      {/* ======= CHARTS SECTION ======= */}
      <div className="row mt-3  g-4 charts " >
        {/* Bar Chart for Total Loans */}
        <div className="col-md-6">
          <div className="card shadow-lg p-4 border-0 rounded-4">
            <h6 className="text-secondary mb-3">Loan Overview (Bar Chart)</h6>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  { name: "Total Loans", value: stats.totalLoans },
                  { name: "Active Loans", value: stats.activeLoans },
                ]}
                barSize={60}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#007bff" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart for Total Principal vs Active Loans */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 border-0 rounded-4">
            <h6 className="text-secondary mb-3">Principal vs Active Loans (Pie Chart)</h6>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Total Principal", value: stats.totalPrincipal },
                    { name: "Active Loans", value: stats.activeLoans },
                  ]}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                  dataKey="value"
                >
                  <Cell fill="#007bff" />
                  <Cell fill="#28a745" />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>



  );

};

export default MainDashboard;
