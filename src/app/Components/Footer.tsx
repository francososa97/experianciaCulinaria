// Footer component
// Header component here


const Footer = () =>{
    
return(      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">
                Sosa Franco
              </h3>
              <p className="mb-4">
              Desarrollador full stack, autor y creador de contenido, dedicado a inspirar y transformar a través de la palabra, la tecnología y el conocimiento aplicado.</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">
                Enlaces rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-white transition duration-300 cursor-pointer"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#libros"
                    className="hover:text-white transition duration-300 cursor-pointer"
                  >
                    Libros
                  </a>
                </li>
                <li>
                  <a
                    href="#autor"
                    className="hover:text-white transition duration-300 cursor-pointer"
                  >
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonios"
                    className="hover:text-white transition duration-300 cursor-pointer"
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-white transition duration-300 cursor-pointer"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-3"></i>
                  <span>fs.franco.sosa@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone-alt mt-1 mr-3"></i>
                  <span>+54 9 11 4418-6438</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                  <span>Buenos Aires, Argentina</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">
                Métodos de pago
              </h3>
              <div className="flex flex-wrap gap-4">
                <i className="fab fa-cc-visa text-2xl"></i>
                <i className="fab fa-cc-mastercard text-2xl"></i>
                <i className="fab fa-cc-paypal text-2xl"></i>
                <i className="fab fa-cc-amex text-2xl"></i>
              </div>
              <h3 className="text-lg font-medium text-white mt-6 mb-4">
                Disponible en
              </h3>
              <div className="flex flex-wrap gap-4">
                <i className="fab fa-amazon text-2xl"></i>
                <i className="fas fa-book text-2xl"></i>
                <i className="fas fa-shopping-bag text-2xl"></i>
              </div>
            </div>
          </div>
          <hr className="border-gray-700 my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} Franco Sosa. Todos los
              derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-white transition duration-300 cursor-pointer"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="hover:text-white transition duration-300 cursor-pointer"
              >
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </footer>);
}
export default Footer;

