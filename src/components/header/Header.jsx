import { Button } from "../ui/button";
import { IoLogoJavascript } from "react-icons/io5";
import { HiArrowTrendingUp } from "react-icons/hi2";
import logo from "../../assets/img/logo.png"


const Header = () => {
  return (
    <div
      className="flex fixed justify-between items-center w-full z-50 px-40 2xl:px-72 py-6 bg-gray-950
     text-white border-b-1 border-gray-700"
    >
      <div className="w-29">
      <img src={logo} alt="" className="object-cover" />

      </div>
      <div>
        <ul className="flex gap-8">
          <li className="hover:text-green-500 cursor-pointer">Serviços</li>
          <li className="hover:text-green-500 cursor-pointer">Sobre</li>
          <li className="hover:text-green-500 cursor-pointer">Portfolio</li>
          <li className="hover:text-green-500 cursor-pointer">Contato</li>
        </ul>
      </div>
      <div>
        <Button
          className="font-bold bg-gradient-to-r from-blue-500 to-green-500 
             rounded-lg px-9 py-5 text-md text-white 
             shadow-[0_0_5px_white]
             hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600 
             transition duration-300"
        >
          <HiArrowTrendingUp /> Fale conosco
        </Button>
      </div>
    </div>
  );
};

export default Header;
