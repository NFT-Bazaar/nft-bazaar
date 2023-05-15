import react from "react";
import Image from "next/image";

function Header2(props: { callbackForMethod }) {
  const logo1 = "/static/images/logo1.png";
  const nftBazaar2 = "/static/images/nft-bazaar2.png";

  return (
    <div className="sticky top-0 flex flex-shrink-0 bg-transparent w-full bg-gray-700">
      <div className="flex-shrink-0 px-4 py-3 bg-gray-700">
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
            className="hover:bg-gray-600 rounded-lg  bg-gray-700 text-sm font-medium text-white px-3 py-2 leading-none"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:bg-gray-600 rounded-lg text-sm font-medium text-white px-3 py-2 leading-none"
          >
            About
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header2;
