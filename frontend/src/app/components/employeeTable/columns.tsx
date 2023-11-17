"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Request = {
  number: number;
  title: string;
  date: string;
  amount: number;
  status: "Approved" | "Pending" | "Declined";
};

export const columns: ColumnDef<Request>[] = [
  {
    accessorKey: "number",
    header: "N/A",
  },
  {
    accessorKey: "title",
    header: "Request Title",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      const formatted =
        status === "Approved"
          ? "green"
          : status === "Declined"
          ? "red"
          : "blue";

      return (
        <div style={{ color: formatted }} className={`capitalize font-medium`}>
          {status}
        </div>
      );
    },
  },
];
