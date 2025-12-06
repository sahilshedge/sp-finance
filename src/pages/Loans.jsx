
// import React, { useState, useEffect } from "react";

// import SearchBar from "../SearchBar";
// import BorrowersTable from "../BorrowersTable";
// import AddLoan from "../AddLoan"
// import ActiveButton from "../ActiveButton";
// import InactiveButton from "../InactiveButton";
// import UploadButton from "../UploadButton";
// import DownloadButton from "../DownloadButton";
// import "bootstrap/dist/css/bootstrap.min.css";
// import OverDue from "../OverDue";
// import AppPagination from "../AppPagination";





// function Loans() {
// const [loans, setLoans] = useState([]);

// const [refresh, setRefresh] = useState(false);

// const refreshBorrowers = () => {
//     setRefresh(!refresh);
// };

// const getLoans = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/loans");
//     const data = await res.json();
//     setLoans(data);
//   } catch (error) {
//     console.error("Error fetching loans:", error);
//   }
// };



//   return (
//     <>
//       <div className="add-button">
//         <SearchBar />
//         <AddLoan onAdd={getLoans} />
//       </div>
//       <div className=" d-flex justify-content-center flex-row buttons">

//         <ActiveButton />
//         <InactiveButton />
//         <OverDue />
//         <UploadButton />
//         <DownloadButton />

//       </div>
//       <div>
//         <BorrowersTable  loans={loans} />
//       </div>
//       <div>
//         <AppPagination/> 
//       </div>

//     </>
//   )
// }
// export default Loans;









import React, { useState, useEffect } from "react";

import SearchBar from "../SearchBar";
import BorrowersTable from "../BorrowersTable";
import AddLoan from "../AddLoan";
import ActiveButton from "../ActiveButton";
import InactiveButton from "../InactiveButton";
import UploadButton from "../UploadButton";
import DownloadButton from "../DownloadButton";
import "bootstrap/dist/css/bootstrap.min.css";
import OverDue from "../OverDue";
import AppPagination from "../AppPagination";

function Loans() {
  const [loans, setLoans] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // 🔥 Proper refresh function
  const refreshBorrowers = () => {
    setRefresh((prev) => !prev);
  };

  // 🔥 Fetch borrowers from backend
  const getLoans = async () => {
    try {
      const res = await fetch("http://localhost:5000/borrowers");
      const data = await res.json();
      setLoans(data);
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  };

  // 🔥 Load borrowers when page loads OR refresh toggles
  useEffect(() => {
    getLoans();
  }, [refresh]);

  return (
    <>
      <div className="add-button">
        <SearchBar />
        {/* AddLoan ke baad refresh trigger */}
        <AddLoan onAdd={refreshBorrowers} />
      </div>

      <div className="d-flex  flex-row buttons">
        <ActiveButton />
        <InactiveButton />
        <OverDue />
        <UploadButton />
        <DownloadButton />
        
      </div>

      <div>
        <BorrowersTable 
          loans={loans} 
          refresh={refresh} 
          refreshBorrowers={refreshBorrowers}   // delete ke baad refresh hoga
        />
      </div>

      <div>
        <AppPagination />
      </div>
    </>
  );
}

export default Loans;
