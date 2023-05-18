import react, { useState } from "react";

type SearchBar = {
  text: "";
  count: number;
  definition: string;
};

export default function TabBarSearch(props: {}) {
  return (
    // <div className=" ">
    <div className="w-500 grid grid-cols-1 gap-4 lg:col-span-3 p-6 relative  sm:overflow-hidden pb-3 hidden sm:block border-b border-gray-200">
      <nav
        className="-mb-px flex space-x-8 overflow-x-auto
                    flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-96"
      >
        <a
          href="#"
          className="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Tab Name
          <span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">
            0
          </span>
        </a>

        <a
          href="#"
          className="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Tab Name
          <span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">
            1
          </span>
        </a>

        <a
          href="#"
          className="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Tab Name
          <span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">
            2
          </span>
        </a>

        <a
          href="#"
          className="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Tab Name
          <span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">
            3
          </span>
        </a>

        <a
          href="#"
          className="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Tab Name
          <span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">
            4
          </span>
        </a>

        <a
          href="#"
          className="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Tab Name
          <span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">
            5
          </span>
        </a>

        <a
          href="#"
          className="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Tab Name
          <span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">
            6
          </span>
        </a>

        <a
          href="#"
          className="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Tab Name
          <span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">
            7
          </span>
        </a>

        <a
          href="#"
          className="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Tab Name
          <span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">
            8
          </span>
        </a>

        <a
          href="#"
          className="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Tab Name
          <span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">
            9
          </span>
        </a>

        <a
          href="#"
          className="whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
        >
          Tab Name
          <span className="bg-gray-100 text-gray-900 hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block">
            10
          </span>
        </a>
      </nav>
    </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
