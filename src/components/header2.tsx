import react from "react";
import Image from "next/image";

function Header2(props: {}) {
  const logo1 = "/static/images/logo1.png";
  const nftBazaar2 = "/static/images/nft-bazaar2.png";
  return (
    <div className="flex flex-shrink-0 bg-transparent">
      <div className="flex-shrink-0 px-4 py-3 bg-gray-800 w-full">
        <button className="flex items-center block">
          <div className="h-8 w-8 relative">
            <Image
              src={logo1}
              className="rounded-full object-cover fill"
              alt="NFT Bazaar logo"
              fill
            ></Image>
          </div>
          {/* <span className="ml-4 text-sm font-medium text-white">
            NFT BAZAAR
          </span> */}
          <div className="h-4 w-40 relative">
            <Image
              src={nftBazaar2}
              className="rounded-full object-contain fill"
              alt="NFT Bazaar logo"
              fill
            ></Image>
          </div>
        </button>
      </div>
      <div className="flex-1 flex bg-gray-700 px-6 items-center justify-between">
        <nav>
          <a
            href="#"
            className="hover:bg-gray-600 rounded-lg  bg-gray-800 text-sm font-medium text-white px-3 py-2 leading-none"
          >
            MailBox
          </a>
          <a
            href="#"
            className="ml-2 hover:bg-gray-600 rounded-lg text-sm font-medium text-white px-3 py-2 leading-none"
          >
            Customers
          </a>
          <a
            href="#"
            className="hover:bg-gray-600 rounded-lg text-sm font-medium text-white px-3 py-2 leading-none"
          >
            Reporting
          </a>
          <a
            href="#"
            className="hover:bg-gray-600 rounded-lg text-sm font-medium text-white px-3 py-2 leading-none"
          >
            Manage
          </a>
        </nav>
        <div className="flex items-center">
          <span className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center">
              <i
                className="fa fa-search h-5 w-5 px-2 text-gray-500"
                aria-hidden="true"
              ></i>
            </span>
            <input
              className="focus:bg-white focus:text-gray-900 focus:placeholder-gray-700 pl-10 pr-4 py-2 leading-none block w-full 
                bg-gray-900 rounded-lg text-sm placeholder-gray-400 text-white"
              placeholder="Search"
            />
          </span>
          <button
            className="ml-6 text-gray-400 hover:text-gray-200"
            aria-label="Name"
          >
            <i
              className="fa fa-bell-o h-5 w-5 fill-current text-white"
              aria-hidden="true"
            ></i>
          </button>
          <button
            className="ml-6 text-gray-400 hover:text-gray-200"
            aria-label="Name"
          >
            <i
              className="fa fa-question-circle-o h-5 w-5 fill-current text-white"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header2;
