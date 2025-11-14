import React from "react";
import SearchBar from "../SearchBar";
import BorrowersTable from "../BorrowersTable";
import AddLoan from "../AddLoan"
import ActiveButton from "../ActiveButton";
import InactiveButton from "../InactiveButton";
import UploadButton from "../UploadButton";
import DownloadButton from "../DownloadButton";
import "bootstrap/dist/css/bootstrap.min.css";
import OverDue from "../OverDue";
import AppPagination from "../AppPagination";





function Loans() {



  return (
    <>
      <div className="add-button">
        <SearchBar />
        <AddLoan />
      </div>
      <div className=" d-flex justify-content-center flex-row buttons">

        <ActiveButton />
        <InactiveButton />
        <OverDue />
        <UploadButton />
        <DownloadButton />

      </div>
      <div>
        <BorrowersTable />
      </div>
      <div>
        <AppPagination/> 
      </div>

    </>
  )
}
export default Loans;
