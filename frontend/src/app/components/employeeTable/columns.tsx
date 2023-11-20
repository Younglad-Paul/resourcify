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


export const AdminColumns: ColumnDef<Request>[] = [
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
    header: "Amount ($)",
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

export const AdminEmployeeDataColumns: ColumnDef<Request>[] = [
  {
    accessorKey: "number",
    header: "N/A",
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "lastLog",
    header: "Last Login",
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

export const AdminEmployeeRequestData: ColumnDef<Request>[] = [
  {
    accessorKey: "number",
    header: "N/A",
  },
  {
    accessorKey: "title",
    header: "Request Title",
  },
  {
    accessorKey: "description",
    header: "Decription",
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
    accessorKey: "approve",
    header: "Approve",
    cell: ({ row }) => {
      const approve: string = row.getValue("approve");
      const backgroundColor =
        approve === "Approved"
          ? "green"
          : approve === "Declined"
          ? "red"
          : "blue";

      return (
        <div style={{ background: backgroundColor }} className={`capitalize font-medium rounded-md text-white p-3 w-24 text-center`}>
          {approve}
        </div>
      );
    },
  },
];

export const AdminReimbursement: ColumnDef<Request>[] = [
  {
    accessorKey: "number",
    header: "N/A",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "title",
    header: "Request Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];