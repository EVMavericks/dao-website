import { FunctionComponent } from "react";
import { Table } from "./Table";
import { TableFooter } from "./TableFooter";

const DATE = new Date().toUTCString();

export const TableSection: FunctionComponent = () => {
  return (
    <section>
      <div className="relative">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1"></div>
          <div className="flex-1 w-full bg-gray-800"></div>
        </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <Table />
          <div className="relative py-4 text-sm text-center text-gray-400">
            Snapshot taken from{" "}
            <a href="https://rated.network">rated.network</a> API on {DATE}
          </div>
        </div>
      </div>
      <TableFooter />
    </section>
  );
};
