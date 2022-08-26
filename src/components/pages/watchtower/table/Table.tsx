import React, { FunctionComponent, HTMLProps } from "react";
import { IS_PROD } from "src/config/env";
import staticOperators from "src/data/watchtower/operators.json";
import staticOperatorsHistory from "src/data/watchtower/operators_history.json";
// import staticMeta from "src/data/meta.json";
import { TableItem } from "./TableItem";

type OperatorEntityResponse = typeof staticOperators;

const fetchOperators = async (): Promise<OperatorEntityResponse> => {
  const response = await fetch(
    "https://api.rated.network/v0/eth/operators?window=1d&size=15&idType=entity"
  );
  const body = (await response.json()) as OperatorEntityResponse;
  return body;
};

const fetchOperatorsHistory = async (
  date = "20220819"
): Promise<OperatorEntityResponse> => {
  const response = await fetch(
    `https://raw.githubusercontent.com/EVMavericks/website-draft-RisingPaw/data/rated.network/${date}_operators.json`
  );
  const body = (await response.json()) as OperatorEntityResponse;
  return body;
};

const entities = IS_PROD ? await fetchOperators() : staticOperators;

// History
const oneWeekAgo = new Date(Date.now() - 7 * 864e5);
const dateOneWeekAgo = oneWeekAgo.toISOString().slice(0, 10).replace(/\-/g, "");
const lastEntities = IS_PROD
  ? await fetchOperatorsHistory(dateOneWeekAgo)
  : staticOperatorsHistory;
const lastEntitiesMap = Object.fromEntries(
  lastEntities.data.map((value) => [
    value.id,
    { networkPenetration: value.networkPenetration },
  ])
);

export const Table: FunctionComponent = () => {
  return (
    <div className="relative">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 -mx-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
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
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900  hidden sm:table-cell"
                >
                  Contact
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {entities.data.map((entity) => (
                <TableItem
                  key={entity.id}
                  entity={entity}
                  history={lastEntitiesMap[entity.id]}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
