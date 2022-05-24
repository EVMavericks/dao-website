import { FunctionComponent } from "react";
import { Table } from "./Table";
import { TableFooter } from "./TableFooter";

export const TableSection: FunctionComponent = () => {
  return (
    <section>
      <div className="relative">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1"></div>
          <div className="flex-1 w-full bg-gray-800"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Table />
          <div className="relative py-4 text-center text-gray-400 text-sm">
            Snapshot taken from{" "}
            <a href="https://rated.network">rated.network</a> API on{" "}
            {new Date().toUTCString()}
          </div>
        </div>
      </div>
      <TableFooter />
    </section>
  );
};
