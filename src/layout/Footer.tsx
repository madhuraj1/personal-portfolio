import {
  Facebook,
  Github,
  Instagram,
  Mail,
  Twitter,
  Youtube,
} from 'lucide-react';
import Logo1 from '../assets/WEBSITE_NAME_PNG_BLACK.png';

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-white px-4 py-10 font-century sm:px-6 lg:px-8">
      <div className="mx-auto px-8">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="h-11 font-metropolis text-[18px] font-medium tracking-widest">
            CELEBRATION CHAPTERS
          </div>

          <div className="mt-8 text-right md:mt-0">
            <p className="text-sm text-gray-500">Email</p>
            <p className="pb-6 text-sm font-semibold">
              celebrationchapters@gmail.com
            </p>
            <p className="mt-2 text-sm text-gray-500">Phone Number</p>
            <p className="text-sm font-semibold">+91 9611809088 / 9632559088</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/celebrationchapters/profilecard/?igsh=MWNzYmc5M3o5dDhsOQ=="
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="mailto:celebrationchapters@gmail.com"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/@celebrationchapters"
              target="_blank"
              className="-mt text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {date.getFullYear()} Celebration Chapters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
