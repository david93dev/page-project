import { useState } from "react";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";

const Galery = () => {
  const [openImg1, setOpenImg1] = useState(false);
  const [openImg2, setOpenImg2] = useState(false);
  const [openImg3, setOpenImg3] = useState(false);
  return (
    <section className="bg-gradient-to-r w-auto sm:w-full from-gray-900 to-gray-800 py-12 scroll-mt-28">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 overflow-auto">
        {/* Imagem pequena */}
        <div className="w-60 md:w-96 lg:w-128 relative transition-all duration-300">
          <img
            src={img1}
            alt="Exemplo"
            className="rounded-lg "
            onClick={() => setOpenImg1(true)}
          />
        </div>
        <div className="w-60 md:w-96 lg:w-128 relative transition-all duration-300">
          <img
            src={img2}
            alt="Exemplo"
            className="rounded-lg"
            onClick={() => setOpenImg2(true)}
          />
        </div>
        <div className="w-60 md:w-96 lg:w-128 relative transition-all duration-300">
          <img
            src={img3}
            alt="Exemplo"
            className="rounded-lg"
            onClick={() => setOpenImg3(true)}
          />
        </div>

        {/* Modal */}
        {openImg1 && (
          <div
            onClick={() => setOpenImg1(false)}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
          >
            <img
              src={img1}
              alt="Exemplo grande"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
            />
          </div>
        )}
        {openImg2 && (
          <div
            onClick={() => setOpenImg2(false)}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
          >
            <img
              src={img2}
              alt="Exemplo grande"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
            />
          </div>
        )}

        {openImg3 && (
          <div
            onClick={() => setOpenImg3(false)}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
          >
            <img
              src={img3}
              alt="Exemplo grande"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Galery;
