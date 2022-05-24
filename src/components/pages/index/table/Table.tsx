import React, { FunctionComponent, HTMLProps } from "react";
import body from "src/data/entities.json";
import meta from "src/data/static.json";
import { TableItem } from "./TableItem";

// const response = await fetch('https://api.rated.network/v0/eth/entities?window=1d&size=30');
// const response = await fetch('https://api.rated.network/v0/eth/operators?window=1d&from=15&size=15&idType=depositAddress');
// const body = await response.json();

export const Table: FunctionComponent = () => {
  return (
    <div className="relative">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Entity
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden sm:table-cell"
                >
                  Commitment
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Network Penetration
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Contact
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {body.data.map((entity) => (
                <TableItem key={entity.id} entity={entity} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
