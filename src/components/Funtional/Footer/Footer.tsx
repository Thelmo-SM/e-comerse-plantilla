import React from "react";

const Footer = () => {
  
  return (
    <footer>
      <div 
      className="bg-blue-50 flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500"
      >
        <div className="w-4/5">
          <h1 className="font-bold text-lg text-blue-900">E-COMERCE</h1>
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-blue-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a   className="text-gray-600 hover:text-blue-900 hover:underline transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-900 rounded-md" href="#">Home</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-900 hover:underline transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-900 rounded-md" href="#">About us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-900 hover:underline transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-900 rounded-md" href="#">Contact us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-900 hover:underline transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-900 rounded-md" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-blue-900  mb-5">Get in touch</h2>
            <div className="text-sm space-y-2 text-gray-600">
              <p>+1-234-567-890</p>
              <p>contact@greatstack.dev</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-blue-50 bg-blue-900">
        Copyright 2025 © GreatStack.dev All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;