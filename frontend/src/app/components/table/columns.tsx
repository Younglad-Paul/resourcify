"use client";

import { ColumnDef } from "@tanstack/react-table";
import { stringify } from "querystring";

export const columns: ColumnDef<Transactions>[] = [
  {
    accessorKey: "transactionID",
    header: "Transaction ID",
  },

  {
    accessorKey: "name",
    header: "categories Name",
    cell: ({ row }) => {
      return (
        <div className="font-medium capitalize">{row.getValue("name")}</div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const formatted = date.toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("USD", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-end font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "transactions",
    header: "Transactions",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("transactions"));

      return <div className="text-center font-medium">{amount}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      const formatted =
        status === "approved"
          ? "green"
          : status === "declined"
          ? "red"
          : "yellow";

      return (
        <div
          style={{ color: formatted }}
          className={`text-center capitalize font-medium`}
        >
          {status}
        </div>
      );
    },
  },
];
