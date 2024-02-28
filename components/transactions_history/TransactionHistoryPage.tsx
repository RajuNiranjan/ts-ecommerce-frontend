import SearchTrasaction from "@/components/transactions_history/search_transaction";
import TransactionTable from "@/components/transactions_history/transaction_table";
import Select from "@/ui/select";
import React from "react";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import TableComponent from "@/ui/table";

interface searchTransactionSelector {
  name: string;
}

const selector: searchTransactionSelector[] = [
  {
    name: "Recent",
  },
  {
    name: "Month",
  },
];

// interface Transactions {
//   transactionId: number;
//   receverName: string;
//   receverId: number;
//   date: string;
//   action: JSX.Element;
//   path: string;
// }

const TableHeadData = [
  "Transaction ID",
  "Receiver Name",
  "Received ID",
  "Date",
  "Actions",
];

const TableBodyData = [
  {
    transactionId: 54651,
    receverName: "Different size for clothes",
    receverId: 6545,
    date: "15 May 2023 8:59 pm",
    action: (
      <p className="bg-blue-500 font-semibold rounded-full text-white p-1 px-3 text-center cursor-pointer w-max">
        View Details
      </p>
    ),
    path: "/transaction_details",
  },
  {
    transactionId: 35431,
    receverName: "childer, Watches",
    receverId: 35431,
    date: "15 May 2023 8:59 pm",
    action: (
      <p className="bg-blue-500 font-semibold rounded-full text-white p-1 px-3 w-max text-center cursor-pointer">
        View Details
      </p>
    ),
    path: "/transaction_details",
  },
];

const Transactions = () => {
  return (
    <div className="w-full min-h-screen bg-[#ebeef0]">
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />
      <div className="w-full p-5 pt-[100px] xl:pl-[90px] xl:pr-[20px] xl:pb-[20px]">
        <div>
          <h1 className="text-3xl font-semibold">Transactions History</h1>
        </div>
        <div className="bg-white shadow-md rounded-md my-10 p-5">
          <SearchTrasaction />
          <div className="flex gap-5 my-5 items-center">
            <p>Stored By</p>
            <div className="flex gap-3">
              {selector?.map((item, index) => (
                <Select key={index} name={item?.name} />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <TransactionTable headers={TableHeadData} data={TableBodyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
