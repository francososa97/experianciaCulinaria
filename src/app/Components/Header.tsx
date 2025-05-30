// Header component here

const Header = ({IsTestimonios,toggleMenu,setIsMenuOpen,isMenuOpen}) =>{

    return(
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-gray-800">
            Franco Sosa
          </a>
          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Inicio
            </a>
            <a
              href="#libros"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Libros
            </a>
            <a
              href="#autor"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Sobre mí
            </a>
            {IsTestimonios?
              <a
              href="#testimonios"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Testimonios
            </a>
              : null
             }
            
            <a
              href="#contacto"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Contacto
            </a>
          </nav>
          {/* Redes sociales Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          {/* Botón de menú móvil */}
          <button
            className="md:hidden text-gray-600 focus:outline-none cursor-pointer"
            onClick={toggleMenu}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
            ></i>
          </button>
        </div>
        {/* Menú móvil */}
        <div
          className={`md:hidden bg-white ${isMenuOpen ? "block" : "hidden"} shadow-lg`}
        >
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-gray-900 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#libros"
                className="text-gray-700 hover:text-gray-900 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Libros
              </a>
              <a
                href="#autor"
                className="text-gray-700 hover:text-gray-900 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre mí
              </a>
              {IsTestimonios?
              <a
                href="#testimonios"
                className="text-gray-700 hover:text-gray-900 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </a>
              : null
             }

              <a
                href="#contacto"
                className="text-gray-700 hover:text-gray-900 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </nav>
            <div className="flex items-center space-x-4 mt-4 pb-2">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Header;
