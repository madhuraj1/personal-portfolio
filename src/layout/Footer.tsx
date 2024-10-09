import { Facebook, Github, Instagram, Twitter } from 'lucide-react';
import Logo1 from '../assets/Logo-new.png';
import { FORM_URL } from '@/utils/urls';
export const Footer = () => {
  return (
    <footer className="font-metropolis bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto px-8">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-4">
              <div className="w-32">
                <img src={Logo1} alt="Celebration Chapters" />
              </div>
            </div>
            <button
              onClick={() => window.open(FORM_URL, '_blank')}
              className="mb-12 mt-4 rounded-full bg-black px-6 py-2 font-semibold text-white transition duration-300 hover:bg-lime-500"
            >
              Get Quote
            </button>
          </div>

          <div className="mt-8 text-right md:mt-0">
            <p className="text-sm text-gray-500">Email</p>
            <p className="pb-6 text-sm font-semibold">
              celebrationchapters@gmail.com
            </p>
            <p className="mt-2 text-sm text-gray-500">Phone Number</p>
            <p className="text-sm font-semibold">+91 99999999999</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2023 Celebration Chapters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
