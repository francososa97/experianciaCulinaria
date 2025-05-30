// Hero section here
const Landing = () =>{
    return(
              <section
        id="inicio"
        className="pt-24 md:pt-0 relative min-h-screen flex items-center bg-gradient-to-r from-gray-100 to-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=elegant%20bookshelf%20with%20blurred%20books%20in%20background%2C%20soft%20lighting%2C%20neutral%20colors%2C%20minimalist%20design%2C%20perfect%20for%20author%20website%20hero%20background%2C%20professional%20photography%20with%20depth%20of%20field&width=1440&height=800&seq=10&orientation=landscape"
            alt="Fondo de libros"
            className="w-full h-full object-cover object-center opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
              Franco Sosa
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg">
              La palabra como puente hacia nuevas realidades.
              Explorá ideas, descubrí caminos, encontrate con tu mejor versión.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#libros"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 ease-in-out text-center whitespace-nowrap !rounded-button cursor-pointer"
              >
                Explorar libros
              </a>
              <a
                href="#contacto"
                className="bg-white text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 ease-in-out text-center whitespace-nowrap !rounded-button cursor-pointer"
              >
                Contactar autor
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-64 md:w-80 transform hover:-rotate-6 transition-transform duration-500 ease-in-out">
              <img
                src="https://readdy.ai/api/search-image?query=professional%203D%20book%20mockup%20of%20hardcover%20novel%20with%20elegant%20design%2C%20floating%20in%20space%20with%20subtle%20shadow%2C%20photorealistic%20high%20quality%20rendering%20on%20transparent%20background&width=500&height=700&seq=11&orientation=portrait"
                alt="Libro destacado"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold transform rotate-12">
                ¡Nuevo!
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Landing;