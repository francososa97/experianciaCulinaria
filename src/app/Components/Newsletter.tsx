// Newsletter subscription form
const Newsletter = () =>{
    return(
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Suscríbete a mi newsletter
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Recibe información sobre nuevos lanzamientos, eventos y contenido
              exclusivo directamente en tu bandeja de entrada.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 border-none"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-400 transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer"
              >
                Suscribirse
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              Al suscribirte, aceptas nuestra política de privacidad. No
              enviaremos spam.
            </p>
          </div>
        </div>
      </section>
    );
}
export default Newsletter;