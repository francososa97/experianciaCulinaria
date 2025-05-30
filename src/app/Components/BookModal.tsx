// Modal component for book details
// Header component here

import axios from "axios";
import { useEffect } from "react";

const BookModal = ({isModalOpen,selectedBook,closeModal,setActiveModalTab,activeModalTab}) =>{
  // Inicializar MP con tu public key (poner esto solo una vez en tu app)
  useEffect(() => {
      if (typeof window !== "undefined" && window.MercadoPago) {
    const mp = new window.MercadoPago("TEST-8e699f33-006f-4eb9-a170-8ff0a2896bd5", { locale: "es-AR" });
    setMpInstance(mp);
  } else {
    console.warn("MercadoPago aún no está disponible en window.");
  }
  }, []);

  const createPreference = async () => {
    try {
      debugger;
      const response = await axios.post("src/app/api/create-preference/route", {
        title: "Bananita contenta",
        price: 100,
        quantity: 1,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.error("Error creando preferencia:", error);
      return null;
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
      // Si estás usando el checkout brick:
      const mp = new window.MercadoPago("TEST-8e699f33-006f-4eb9-a170-8ff0a2896bd5", { locale: "es-AR" });
      const checkout = mp.checkout({
        preference: {
          id,
        },
        autoOpen: true,
      });
    }
  };
    return(
        <>
              {isModalOpen && selectedBook && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden">
                    <div className="flex flex-col h-full">
                      {/* Modal Header */}
                      <div className="flex justify-between items-center p-6 border-b">
                        <h2 className="text-2xl font-serif font-bold text-gray-900">
                          {selectedBook.titulo}
                        </h2>
                        <button
                          onClick={closeModal}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <i className="fas fa-times text-2xl"></i>
                        </button>
                      </div>
        
                      {/* Modal Content */}
                      <div className="flex-1 overflow-y-auto">
                        <div className="flex flex-col md:flex-row p-6 gap-8">
                          {/* Book Cover */}
                          <div className="md:w-1/3">
                            <img
                              src={selectedBook.portada}
                              alt={selectedBook.titulo}
                              className="w-full rounded-lg shadow-lg"
                            />
                            <button onClick={handleBuy} className="w-full mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 ease-in-out whitespace-nowrap !rounded-button">
                              Comprar por {selectedBook.precio}
                            </button>
                          </div>
        
                          {/* Book Information */}
                          <div className="md:w-2/3">
                            {/* Tabs */}
                            <div className="flex border-b mb-6">
                              <button
                                onClick={() => setActiveModalTab("synopsis")}
                                className={`px-6 py-3 font-medium whitespace-nowrap ${
                                  activeModalTab === "synopsis"
                                    ? "text-gray-900 border-b-2 border-gray-900"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                              >
                                Sinopsis
                              </button>
                              <button
                                onClick={() => setActiveModalTab("contents")}
                                className={`px-6 py-3 font-medium whitespace-nowrap ${
                                  activeModalTab === "contents"
                                    ? "text-gray-900 border-b-2 border-gray-900"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                              >
                                Contenido
                              </button>
                              <button
                                onClick={() => setActiveModalTab("excerpts")}
                                className={`px-6 py-3 font-medium whitespace-nowrap ${
                                  activeModalTab === "excerpts"
                                    ? "text-gray-900 border-b-2 border-gray-900"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                              >
                                Extractos
                              </button>
                              <button
                                onClick={() => setActiveModalTab("reviews")}
                                className={`px-6 py-3 font-medium whitespace-nowrap ${
                                  activeModalTab === "reviews"
                                    ? "text-gray-900 border-b-2 border-gray-900"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                              >
                                Críticas
                              </button>
                            </div>
        
                            {/* Tab Content */}
                            <div className="space-y-6">
                              {activeModalTab === "synopsis" && (
                                <div>
                                  <h3 className="text-xl font-serif font-bold mb-4">
                                    Sinopsis Extendida
                                  </h3>
                                  <p className="text-gray-700 leading-relaxed mb-4">
                                    {selectedBook.descripcion}
                                  </p>
                                  <p className="text-gray-700 leading-relaxed">
                                    Este libro te llevará a través de un viaje
                                    transformador, explorando conceptos profundos y
                                    presentando ideas innovadoras que cambiarán tu
                                    perspectiva sobre el tema. Con una narrativa
                                    cautivadora y ejemplos prácticos, cada capítulo
                                    construye sobre el anterior para crear una
                                    experiencia de lectura enriquecedora y
                                    significativa.
                                  </p>
                                </div>
                              )}
        
                              {activeModalTab === "contents" && (
                                <div>
                                  <h3 className="text-xl font-serif font-bold mb-4">
                                    Tabla de Contenidos
                                  </h3>
                                  <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-700">Prólogo</span>
                                      <span className="text-gray-500">Página 1</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-700">
                                        Capítulo 1: Introducción
                                      </span>
                                      <span className="text-gray-500">Página 5</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-700">
                                        Capítulo 2: Fundamentos
                                      </span>
                                      <span className="text-gray-500">Página 25</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-700">
                                        Capítulo 3: Desarrollo
                                      </span>
                                      <span className="text-gray-500">Página 50</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-700">
                                        Capítulo 4: Aplicación
                                      </span>
                                      <span className="text-gray-500">Página 75</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-gray-700">
                                        Conclusiones
                                      </span>
                                      <span className="text-gray-500">Página 100</span>
                                    </div>
                                  </div>
                                </div>
                              )}
        
                              {activeModalTab === "excerpts" && (
                                <div>
                                  <h3 className="text-xl font-serif font-bold mb-4">
                                    Extractos del Libro
                                  </h3>
                                  <div className="space-y-6">
                                    <blockquote className="border-l-4 border-gray-900 pl-4 italic text-gray-700">
                                      "La verdadera transformación comienza cuando nos
                                      atrevemos a cuestionar nuestras creencias más
                                      arraigadas..."
                                    </blockquote>
                                    <blockquote className="border-l-4 border-gray-900 pl-4 italic text-gray-700">
                                      "En cada decisión que tomamos, hay una oportunidad
                                      de aprendizaje y crecimiento..."
                                    </blockquote>
                                    <blockquote className="border-l-4 border-gray-900 pl-4 italic text-gray-700">
                                      "El éxito no es un destino, sino un viaje continuo
                                      de autodescubrimiento..."
                                    </blockquote>
                                  </div>
                                </div>
                              )}
        
                              {activeModalTab === "reviews" && (
                                <div>
                                  <h3 className="text-xl font-serif font-bold mb-4">
                                    Opiniones de Críticos
                                  </h3>
                                  <div className="space-y-6">
                                    <div className="border-b pb-4">
                                      <div className="flex items-center mb-2">
                                        <span className="font-medium text-gray-900">
                                          El País
                                        </span>
                                        <div className="ml-4 flex">
                                          {[...Array(5)].map((_, i) => (
                                            <i
                                              key={i}
                                              className="fas fa-star text-yellow-500"
                                            ></i>
                                          ))}
                                        </div>
                                      </div>
                                      <p className="text-gray-700">
                                        "Una obra maestra que redefine el género. La
                                        narrativa es excepcional y los conceptos son
                                        presentados de manera brillante."
                                      </p>
                                    </div>
                                    <div className="border-b pb-4">
                                      <div className="flex items-center mb-2">
                                        <span className="font-medium text-gray-900">
                                          El Mundo
                                        </span>
                                        <div className="ml-4 flex">
                                          {[...Array(5)].map((_, i) => (
                                            <i
                                              key={i}
                                              className="fas fa-star text-yellow-500"
                                            ></i>
                                          ))}
                                        </div>
                                      </div>
                                      <p className="text-gray-700">
                                        "Un libro que llegará a ser un referente en su
                                        campo. La profundidad del análisis y la claridad
                                        de la exposición son sobresalientes."
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              </>
    );
}

export default BookModal;
