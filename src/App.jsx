// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Layout from "./Layout";
// import Dashboard from "./Dashboard"
// import MainDashboard from "./pages/MainDashboard";
// import LoansPage from "./pages/Loans";
// import ReportsPage from "./pages/Reports";
// import PaymentHistoryPage from "./pages/PaymentHistory";
// import SettingsPage from "./pages/Settings";
// import LogoutPage from "./pages/Logout";

// function App() {
//   return (

//     <Routes>
//       {/* <Route path="/" element={<Layout />}/> */}
//         {/* <Route index element={<Navigate to="/dashboard" replace />}/> */}
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="main-dashboard" element={< MainDashboard/>} />
//         <Route path="loans" element={<LoansPage />} />
//         <Route path="reports" element={<ReportsPage />} />
//         <Route path="payment-history" element={<PaymentHistoryPage />} />
//         <Route path="settings" element={<SettingsPage />} />
//         <Route path="logout" element={<LogoutPage />} />
//       {/* </Route> */}
//     </Routes>

//   );
// }

// export default App;





// new code


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login";
// import Dashboard from "./Dashboard";

// function App() {
//   return (

//       <Routes>
//         {/* Root route */}
//         <Route path="/" element={<Login />} />

//         {/* Dashboard */}
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>

//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Layout from "./Layout";
// import Dashboard from "./Dashboard";
import MainDashboard from "./pages/MainDashboard";
import Loans from "./pages/Loans";
import Reports from "./pages/Reports";
import PaymentHistory from "./pages/PaymentHistory";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";

function App() {
  return (

    <Routes>
      {/* Login page alag hai (without sidebar) */}
      <Route path="/" element={<Login />} />

      {/* Layout ke andar sidebar + content */}


      <Route path="" element={<Layout />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        <Route path="/maindashboard" element={<MainDashboard />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>

  );
}

export default App;


