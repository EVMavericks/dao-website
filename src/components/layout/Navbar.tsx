import { Popover, Transition } from "@headlessui/react";
import { Fragment, FunctionComponent, HTMLProps } from "react";
import { BASE } from "src/config/env";
import CloseIcon from "~icons/mdi/close";
import GithubIcon from "~icons/mdi/github";
import MenuIcon from "~icons/mdi/menu";

const navigation = [
  { name: "ManeNetDAO", href: `${BASE}/` },
  { name: "WatchTower", href: `${BASE}/watchtower` },
];

export type NavbarProps = HTMLProps<HTMLDivElement>;

export const Navbar: FunctionComponent<NavbarProps> = ({ className = "" }) => {
  return (
    <div class="relative overflow-hidden pt-4">
      <Popover>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            className="relative flex items-center justify-between sm:h-12 md:justify-center"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a
                  href={`${BASE}/`}
                  className="pr-1 flex flex-row items-center"
                >
                  <span className="sr-only">EVMavericks</span>
                  <img
                    className="h-8 w-auto sm:h-12 pr-2 fill-green-700 hover:fill-green-600"
                    src={`${BASE}/assets/evmavericks.svg`}
                    alt=""
                  />
                  <span className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
                    EVMavericks
                  </span>
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
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
              <span className="inline-flex rounded-md shadow">
                <a
                  href="https://github.com/EVMavericks/website-draft-RisingPaw"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500"
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
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <CloseIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-medium fill-indigo-600 text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700"
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
