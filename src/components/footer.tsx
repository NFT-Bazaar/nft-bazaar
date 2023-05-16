import react from "react";

function Footer() {
  return (
    // <footer className="footer footer-center w-full p-4 bg-gray-700 text-gray-500">
    //<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800"></footer>
    //footer footer-center  w-full p-4 bg-gray-800 text-gray-500
    //<footer className="mt-auto border-t border-gray-700 bg-gray-700 left-0 w-p-4 bottom-0 h-28 absolute w-full">
    <footer className="mt-auto border-t border-gray-700 bg-gray-700 left-0 w-screen p-4 absolute bottom-0">
      <div className="text-center text-white">
        <p>
          Copyright © 2023 -
          <a
            className="font-semibold"
            href="mailto:m.rouzbahaneh@danalytica.com"
          >
            Danalytica
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
