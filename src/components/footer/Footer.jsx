import logo from "../../assets/img/logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
            <div className="w-46 h-full mb-3">
                <a href="#">
                    <img src={logo} alt="logo empresa" className="object-cover" />
                </a>
            </div>
            <p className='text-gray-400 max-w-xs text-sm'> Operadora brasileira inovadora 
                com licenças federais e experiência consolidada no setor de apostas
                 esportivas e cassino online.</p>
        </div>
        <div>
            <h2 className="text-lg font-bold text-white mt-4">Links Rápidos</h2>
            <ul className="mt-2 space-y-2">
                <li><a href="#serviços" className="text-gray-400 hover:text-white">Serviços</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-white">Sobre</a></li>
                <li><a href="#portifolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-white">Contato</a></li>
            </ul>
        </div>
        <div>
            <h2 className="text-lg font-bold text-white mt-4">Sites</h2>
            <ul className="mt-2 space-y-2">
                <li><a href="https://www.x2bet.com" className="text-gray-400 hover:text-white">X2Bet</a></li>
                <li><a href="https://pixdaalegria.com.br/" className="text-gray-400 hover:text-white">Pix da Alegria</a></li>
            </ul>
        </div>
        <div>
            <h2 className="text-lg font-bold text-white mt-4">Contato</h2>
            <ul className="mt-2 space-y-2">
                <li><a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white"><HiOutlineMail /> contato@lmrtechsolutions.com.br</a></li>
                <li><a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white"><BsTelephone/>+55 (11) 99999-9999</a></li>
                <li><a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white"><LuMapPin />São Paulo, Brasil</a></li>
            </ul>
        </div>
    </div> 
    <div>
        <p className="text-gray-500 text-sm mt-6 text-center border-t border-gray-700 pt-4">
            &copy; {new Date().getFullYear()} LMR Tech Solutions. Todos os direitos reservados.
        </p>
    </div>   
    </footer>
      
  )
}

export default Footer