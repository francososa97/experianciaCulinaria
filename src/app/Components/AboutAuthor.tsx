// About Author section here
const AboutAuthor = ({filteredBooks}) =>{
    return(
              <section id="autor" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 relative">
            Sobre el Autor
            <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4"></span>
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-10 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-900 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20latin%20male%20author%20in%20modern%20casual%20attire%2C%20natural%20and%20authentic%20pose%2C%20contemporary%20setting%20with%20minimalist%20background%2C%20warm%20lighting%2C%20thoughtful%20expression&width=600&height=800&seq=12&orientation=portrait"
                  alt="Franco Sosa"
                  className="relative z-10 rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-3/5 md:pl-16">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">
                Franco Sosa
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Como desarrollador full stack, autor y creador de contenido, he dedicado más de una década a construir puentes entre la tecnología, el conocimiento y la palabra escrita. Mi pasión por comunicar ideas complejas de forma clara y significativa me ha llevado a publicar libros que inspiran, enseñan y transforman.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Cada obra que comparto nace de la experiencia real, con el objetivo de generar impacto en quienes buscan crecer, aprender o reinventarse. No solo escribo para informar, sino para acompañar a otros en su propio camino de evolución personal y profesional.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Mi primer libro marcó el inicio de una nueva etapa: la de convertir lo aprendido en herramientas útiles para otros. Y este es solo el comienzo.
              </p>
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-gray-900">10+</span>
                  <span className="text-gray-600">Años de experiencia</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-gray-900">{filteredBooks.length + 1}</span>
                  <span className="text-gray-600">Libro publicado</span>
                </div>
              </div>
              <a
                href="#contacto"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer"
              >
                Conoce más
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}
export default AboutAuthor;