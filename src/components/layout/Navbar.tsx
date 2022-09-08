import { Popover, Transition } from "@headlessui/react";
import { Fragment, FunctionComponent, HTMLProps } from "react";
import { BASE } from "src/config/env";
import CloseIcon from "~icons/mdi/close";
import GithubIcon from "~icons/mdi/github";
import MenuIcon from "~icons/mdi/menu";

const navigation = [
  { name: "ManeNet", href: `${BASE}/` },
  { name: "WatchTower", href: `${BASE}/watchtower` },
  { name: "EIPandas", href: `${BASE}/eipandas` },
];

export type NavbarProps = HTMLProps<HTMLDivElement>;

export const Navbar: FunctionComponent<NavbarProps> = ({ className = "" }) => {
  return (
    <div className="relative z-10 pt-4 pb-4">
      <Popover>
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <nav
            className="relative flex items-center justify-between sm:h-12 md:justify-center"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a
                  href={`${BASE}/`}
                  className="flex flex-row items-center pr-1"
                >
                  <span className="sr-only">EVMavericks</span>
                  <img
                    className="w-auto h-8 pr-2 sm:h-12 fill-green-700 hover:fill-green-600"
                    src={`${BASE}/assets/evmavericks.svg`}
                    alt=""
                  />
                  <span className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl md:text-3xl">
                    EVMavericks
                  </span>
                </a>
                <div className="flex items-center -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex shadow rounded-md">
                <a
                  href="https://github.com/EVMavericks/website-draft-RisingPaw"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:text-indigo-500"
                >
                  <GithubIcon />
                  &nbsp;Edit on GitHub
                </a>
              </span>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <CloseIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="block w-full px-5 py-3 font-medium text-center text-indigo-600 fill-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700"
              >
                <span className="inline-flex">
                  <GithubIcon />
                  &nbsp;Edit on GitHub
                </span>
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
