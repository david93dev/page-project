import { useState } from "react";
import { Button } from "../ui/button";
import { IoLogoJavascript } from "react-icons/io5";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-white border-b border-gray-700">
      <div className="flex justify-between items-center h-18  px-6 lg:px-35 py-4">
        {/* Logo */}
        <div className="w-24">
          <a href="#"><img src={logo} alt="Logo" className="object-cover w-full h-auto" /></a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8">
            <a href="#servicos"><li className="hover:underline underline-offset-2 hover:scale-105 cursor-pointer">Serviços</li></a>
            <a href="#sobre"><li className="hover:underline underline-offset-2 hover:scale-105 cursor-pointer">Sobre</li></a>
            <a href="#portifolio"><li className="hover:underline underline-offset-2 hover:scale-105 cursor-pointer">Portfolio</li></a>
            <a href="#contato"><li className="hover:underline underline-offset-2 hover:scale-105 cursor-pointer">Contato</li></a>
          </ul>

          
        </nav>

        <div className="hidden md:block">
          <Button
            className=" py-3 font-bold bg-gradient-to-r from-blue-500 to-green-500 
              rounded-lg text-white hover:scale-105
              hover:from-blue-600 hover:to-green-600 transition duration-300 flex items-center gap-2"
          >
             Fale conosco
        </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col gap-4">
            <a href="#servicos"><li className="hover:underline underline-offset-2 hover:scale-105 cursor-pointer">Serviços</li></a>
            <a href="#sobre"><li className="hover:underline underline-offset-2 hover:scale-105 cursor-pointer">Sobre</li></a>
            <a href="#portifolio"><li className="hover:underline underline-offset-2 hover:scale-105 cursor-pointer">Portfolio</li></a>
            <a href="#contato"><li className="hover:underline underline-offset-2 hover:scale-105 cursor-pointer">Contato</li></a>
          </ul>

          <Button
            className="w-full font-bold bg-gradient-to-r from-blue-500 to-green-500 
              rounded-lg py-3 text-white shadow-[0_0_1px_white]
              hover:from-blue-600 hover:to-green-600 transition duration-300 flex items-center justify-center gap-2"
          >
             Fale conosco
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
