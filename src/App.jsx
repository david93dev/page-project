import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // duração da animação
      easing: "ease-out", // curva
      once: true, // anima só a primeira vez
      offset: 120, // só anima quando entrar 80px na viewport
      delay: 100, // atraso padrão
    });
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
