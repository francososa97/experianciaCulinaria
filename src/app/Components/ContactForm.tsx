// Contact form and contact info

const ContactForm = () =>{
    return(
              <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 relative">
            Contacto
            <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4"></span>
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
            ¿Tienes alguna pregunta o comentario? No dudes en ponerte en
            contacto conmigo.
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <form className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <label
                    htmlFor="nombre"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Tu correo electrónico"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="asunto"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="mensaje"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Información de contacto
                </h3>
                <div className="mb-8">
                  <div className="flex items-start mb-4">
                    <i className="fas fa-envelope text-gray-900 mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-700">
                        fs.franco.sosa@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <i className="fas fa-phone-alt text-gray-900 mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Teléfono
                      </h4>
                      <p className="text-gray-700">+54 9 11 4418 6438</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <i className="fas fa-map-marker-alt text-gray-900 mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Ubicación
                      </h4>
                      <p className="text-gray-700">Buenos aires, Argentina</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  Sígueme en redes sociales
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default ContactForm;
