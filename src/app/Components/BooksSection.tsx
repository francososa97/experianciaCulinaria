// Books Section with filters and book list
// Header component here

import TikTokEmbed from "./TikTokEmbed";
import axios from "axios";
import { useState,useEffect } from "react";

const BooksSection = ({handleTabChange,activeTab,filteredBooks,handleReadMore}) =>{

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
      <section id="libros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 relative">
            Mis Libros
            <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4"></span>
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
            Explora mi colección de obras literarias, cada una creada para
            inspirar, entretener y transformar.
          </p>
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => handleTabChange("todos")}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === "todos"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => handleTabChange("ficcion")}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === "ficcion"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              Ficción
            </button>
            <button
              onClick={() => handleTabChange("autoayuda")}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === "autoayuda"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              Autoayuda
            </button>
            <button
              onClick={() => handleTabChange("ciencia")}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === "ciencia"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              Ciencia
            </button>
            <button
              onClick={() => handleTabChange("historia")}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === "historia"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              Historia
            </button>
            <button
              onClick={() => handleTabChange("biografia")}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === "biografia"
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              Biografía
            </button>
          </div>
          {/* Grid de libros */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((libro) => (
              <div
                key={libro.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={libro.portada}
                    alt={libro.titulo}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {libro.titulo}
                  </h3>
                  <p className="text-gray-700 mb-4">{libro.descripcion}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">
                      {libro.precio}
                    </span>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleReadMore(libro)}
                        className="px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer"
                      >
                        Leer más
                      </button>
                      <button onClick={handleBuy} className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((libro) => (
              <div key={libro.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="h-300 overflow-hidden">

                                  <div className="relative z-10">
                  <TikTokEmbed />
                </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{libro.titulo}</h3>
                  <p className="text-gray-700 mb-4">{libro.descripcion}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">{libro.precio}</span>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer">
                        Leer más
                      </button>
                      <button onClick={handleBuy} className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Plataformas de venta */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-6">
              Disponible en las principales plataformas
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                <i className="fab fa-amazon text-3xl mr-2"></i>
                <span className="font-medium">Amazon</span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                <i className="fas fa-shopping-bag text-3xl mr-2"></i>
                <span className="font-medium">Mercado Libre</span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                <i className="fas fa-book text-3xl mr-2"></i>
                <span className="font-medium">Casa del Libro</span>
              </a>
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                <i className="fas fa-store text-3xl mr-2"></i>
                <span className="font-medium">El Corte Inglés</span>
              </a>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}
export default BooksSection;

