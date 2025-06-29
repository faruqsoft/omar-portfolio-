import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center">
      <div className="flex justify-center gap-4 text-xl mb-2 text-gray-700 dark:text-gray-300">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 Omar Faruq. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
