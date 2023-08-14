"use client";

import Link from "next/link";
import Navbar from "../components/navbar";
// import { prisma } from "@/db";
import { StaffTable } from "../components/staff_table";
import React, { useEffect, useState } from "react";
import AddNewStaffPopup from "../components/addnew_staff_popup";

export default function Staff() {
  const tableHead = ["Name", "Username", "Email", "Jobrole", ""];
  const tableDataKeys = ["name", "username", "email", "jobrole"];
  const [tableRows, setTableRows] = useState("");

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const all_staff_details = await fetch(
        "api/staff_routers/get_all_staff_details",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      const res = await all_staff_details.json();
      setTableRows(res.users);
      // console.log(res.users);
    };
    // call the function
    fetchData().catch(console.error);
  }, []);

  // const addNewAction = async (e) => {

  // console.log("cliclkded=======")
  //     };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center p-4">
        <h1 className="text-4xl font-extrabold text-indigo-600 mr-auto">
          Staff
        </h1>
        <AddNewStaffPopup buttonName="Add Staff"/>
        {/* <button onClick={addNewAction} className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Add Staff
        </button> */}
      </div>
      <div>
        {tableRows && (
          <StaffTable
            tableHead={tableHead}
            tableRows={tableRows}
            tableDataKeys={tableDataKeys}
          />
        )}
      </div>
    </div>
  );
}
