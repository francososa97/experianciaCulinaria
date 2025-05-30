import React from "react";

type Props = {
  book: any;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onClose: () => void;
};

const BookDetailsModal: React.FC<Props> = ({
  book,
  activeTab,
  setActiveTab,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              {book.titulo}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>

          {/* Contenido */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col md:flex-row p-6 gap-8">
              {/* Portada */}
              <div className="md:w-1/3">
                <img
                  src={book.portada}
                  alt={book.titulo}
                  className="w-full rounded-lg shadow-lg"
                />
                <button className="w-full mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 ease-in-out whitespace-nowrap !rounded-button">
                  Comprar por {book.precio}
                </button>
              </div>

              {/* Tabs + contenido */}
              <div className="md:w-2/3">
                <div className="flex border-b mb-6">
                  {["synopsis", "contents", "excerpts", "reviews"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 font-medium whitespace-nowrap ${
                        activeTab === tab
                          ? "text-gray-900 border-b-2 border-gray-900"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab === "synopsis"
                        ? "Sinopsis"
                        : tab === "contents"
                        ? "Contenido"
                        : tab === "excerpts"
                        ? "Extractos"
                        : "Críticas"}
                    </button>
                  ))}
                </div>

                {/* Contenido según tab */}
                <div className="space-y-6">
                  {activeTab === "synopsis" && (
                    <>
                      <h3 className="text-xl font-serif font-bold mb-4">
                        Sinopsis Extendida
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {book.descripcion}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Este libro te llevará a través de un viaje transformador...
                      </p>
                    </>
                  )}
                  {activeTab === "contents" && (
                    <>
                      <h3 className="text-xl font-serif font-bold mb-4">
                        Tabla de Contenidos
                      </h3>
                      <ul className="space-y-2">
                        <li>Prólogo - Página 1</li>
                        <li>Capítulo 1: Introducción - Página 5</li>
                        <li>Capítulo 2: Fundamentos - Página 25</li>
                        <li>Capítulo 3: Desarrollo - Página 50</li>
                        <li>Capítulo 4: Aplicación - Página 75</li>
                        <li>Conclusiones - Página 100</li>
                      </ul>
                    </>
                  )}
                  {activeTab === "excerpts" && (
                    <>
                      <h3 className="text-xl font-serif font-bold mb-4">
                        Extractos
                      </h3>
                      <blockquote className="border-l-4 border-gray-900 pl-4 italic text-gray-700">
                        "El éxito no es un destino, sino un viaje continuo..."
                      </blockquote>
                    </>
                  )}
                  {activeTab === "reviews" && (
                    <>
                      <h3 className="text-xl font-serif font-bold mb-4">
                        Opiniones de Críticos
                      </h3>
                      <div className="space-y-4">
                        <p>
                          <strong>El País</strong>: "Una obra maestra..."
                        </p>
                        <p>
                          <strong>El Mundo</strong>: "Un libro que llegará a ser un referente..."
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default BookDetailsModal;
