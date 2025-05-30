// Sales chart section using echarts
const SalesStats = () =>{
    return(
              <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative">
                Mi trayectoria literaria
                <span className="block w-24 h-1 bg-yellow-500 mt-4"></span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Mi obra ha comenzado a resonar con lectores que buscan una
                perspectiva fresca y auténtica en la literatura contemporánea.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    10+
                  </div>
                  <div className="text-gray-700">Años escribiendo</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    4.9/5
                  </div>
                  <div className="text-gray-700">Valoración media</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">2</div>
                  <div className="text-gray-700">Obra publicada</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
                  <div className="text-gray-700">Países</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-16">
              <div
                id="sales-chart"
                className="w-full h-80 rounded-lg shadow-lg"
              ></div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default SalesStats;