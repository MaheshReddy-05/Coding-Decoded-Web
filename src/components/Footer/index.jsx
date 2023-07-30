import React from "react";

function Footer() {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-semibold text-white mb-4">Company</h5>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#about" className="hover:text-white">About</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="hover:text-white">Services</a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="hover:text-white">Projects</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-semibold text-white mb-4">Social</h5>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#twitter" className="hover:text-white">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="#facebook" className="hover:text-white">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="#linkedin" className="hover:text-white">LinkedIn</a>
              </li>
              <li className="mb-2">
                <a href="#github" className="hover:text-white">GitHub</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-[Poppins] text-white mb-4">Newsletter</h5>
            <p className="text-gray-400 font-[Poppins]">Subscribe to our newsletter to receive updates and exclusive offers.</p>
            {/* Newsletter form can be added here */}
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-gray-400 text-center font-[Poppins]">
          &copy; {new Date().getFullYear()} Coding Decoded. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
