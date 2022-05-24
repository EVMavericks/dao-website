import React, { FunctionComponent, HTMLProps } from "react";
import type entities from "src/data/entities.json";
import meta from "src/data/meta.json";
import TwitterIcon from "~icons/mdi/twitter";
import { getTweetLink } from "src/utils";
import { BASE } from "src/config/env";

export type Entity = typeof entities.data[0];
const entityMetaById = Object.fromEntries(
  meta.data.map((value) => [value.id, value])
);

const colorClasses = {
  danger: "bg-red-600",
  warning: "bg-yellow-600",
  safe: "bg-green-600",
};
const getProfileForNetworkPenetration = (networkPenetration: number) => {
  if (networkPenetration > 0.22) {
    return "danger";
  }
  if (networkPenetration > 0.11) {
    return "warning";
  }
  return "safe";
};

const commitmentColorClasses = {
  unknown: "bg-gray-100 text-gray-800",
  acknowledged: "bg-yellow-100 text-yellow-800",
  accepted: "bg-green-100 text-green-800",
  refused: "bg-red-100 text-red-800",
};

export type TableItemProps = {
  entity: Entity;
};

export const TableItem: FunctionComponent<TableItemProps> = ({ entity }) => {
  const networkPenetration = (entity.networkPenetration * 100).toFixed(2);
  const color =
    colorClasses[getProfileForNetworkPenetration(entity.networkPenetration)];
  const meta = entityMetaById[entity.id];
  const url = new URL(meta?.website);
  return (
    <tr key={entity.id}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={`${BASE}/entities/lido.svg`}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{entity.id}</div>
            <a
              href={meta?.website}
              target="_blank"
              className="text-indigo-600 hover:text-indigo-900"
            >
              {url?.host}
            </a>
          </div>
        </div>
      </td>
      <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
        <div className="py-2">
          <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
              commitmentColorClasses[meta?.commitment?.status]
            }`}
            title={meta?.commitment?.comment}
          >
            {meta?.commitment?.status}
          </span>
        </div>
        <a
          className={`block px-2 text-2xs text-gray-500 hover:underline`}
          title={meta?.commitment?.comment}
          href={`https://twitter.com/${meta?.commitment?.tweet}`}
          target="_blank"
        >
          <div className="">{meta?.commitment?.date || "?"}</div>
        </a>
      </td>
      <td className="px-3 py-4 text-sm text-gray-500">
        <div className="py-2">
          {networkPenetration}% ({entity.validatorCount.toLocaleString()}{" "}
          validators)
        </div>
        <div className="bg-gray-200 h-2 rounded-md">
          <div
            className={`${color} h-2 rounded-md`}
            style={{
              width: `${networkPenetration}%`,
            }}
          ></div>
        </div>
      </td>
      <td className="px-3 py-4 text-xs text-gray-500">
        {/* <Icon name="mdi:account" /> */}
        <a
          href={getTweetLink({
            text: `Hey @${meta?.twitter} what do you think of the proposed 22% penetration cap for ethereum consensus layer?`,
          })}
          target="_blank"
          className=" hover:bg-[#0d7ac0] bg-[#1d9bf0] text-white p-2 rounded-md"
        >
          <TwitterIcon className="inline fill-white" />
          &nbsp;@{meta?.twitter}
        </a>
      </td>
    </tr>
  );
};
