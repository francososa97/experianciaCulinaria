// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import portada from '../assets/portada.png';
import TikTokEmbed from '../components/TikTokEmbed';

const PaginaVentaLibros: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [IsTestimonios, setIsTestimonios] = useState(false);
  const [activeTab, setActiveTab] = useState('todos');
  const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedBook, setSelectedBook] = useState<any>(null);
const [activeModalTab, setActiveModalTab] = useState("synopsis");

const closeModal = () => {
  setIsModalOpen(false);
  setSelectedBook(null);
};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Testimonios de lectores
  const testimonios = [
    {
      id: 1,
      nombre: 'María González',
      ubicacion: 'Buenos Aires',
      texto: 'Una lectura fascinante que me mantuvo atrapada desde la primera página. La narrativa es fluida y los personajes están muy bien desarrollados.',
      rating: 5,
      imagen: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20latin%20woman%20with%20brown%20hair%20and%20warm%20smile%2C%20soft%20lighting%2C%20neutral%20background%2C%20high%20quality%20photorealistic%20image%2C%20professional%20headshot&width=100&height=100&seq=1&orientation=squarish'
    },
    {
      id: 2,
      nombre: 'Carlos Rodríguez',
      ubicacion: 'Madrid',
      texto: 'Este libro cambió mi perspectiva sobre muchos temas. La profundidad con la que el autor aborda cada concepto es admirable. Totalmente recomendado.',
      rating: 5,
      imagen: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20middle%20aged%20latin%20man%20with%20glasses%20and%20short%20dark%20hair%2C%20soft%20lighting%2C%20neutral%20background%2C%20high%20quality%20photorealistic%20image%2C%20professional%20headshot&width=100&height=100&seq=2&orientation=squarish'
    },
    {
      id: 3,
      nombre: 'Laura Martínez',
      ubicacion: 'Ciudad de México',
      texto: 'Una obra maestra de principio a fin. La forma en que el autor entrelaza las historias es simplemente brillante. No pude dejarlo hasta terminarlo.',
      rating: 5,
      imagen: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20latin%20woman%20with%20long%20black%20hair%20and%20gentle%20smile%2C%20soft%20lighting%2C%20neutral%20background%2C%20high%20quality%20photorealistic%20image%2C%20professional%20headshot&width=100&height=100&seq=3&orientation=squarish'
    },
  ];

  // Libros publicados
  const libros = [
    {
      id: 1,
      titulo: 'Del Objeto al Sistema',
      descripcion: 'Una guía completa para dominar el desarrollo backend profesional con C# y .NET, desde los fundamentos hasta arquitecturas modernas como microservicios, contenedores, testing y CI/CD.',
      precio: '$24.990',
      categoria: 'lenguaje',
      portada:  portada
    },
  ];

  const filteredBooks = activeTab === 'todos' 
    ? libros 
    : libros.filter(libro => libro.categoria === activeTab);

  useEffect(() => {
    const chartDom = document.getElementById('sales-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Ventas',
            type: 'bar',
            barWidth: '60%',
            data: [320, 332, 301, 334, 390, 430],
            itemStyle: {
              color: '#192a56'
            }
          }
        ]
      };
      myChart.setOption(option);

      // Responsive chart
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-gray-800">
            Franco Sosa
          </a>
          
          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-gray-900 font-medium">Inicio</a>
            <a href="#libros" className="text-gray-700 hover:text-gray-900 font-medium">Libros</a>
            <a href="#autor" className="text-gray-700 hover:text-gray-900 font-medium">Sobre mí</a>
            {IsTestimonios?
            <a href="#testimonios" className="text-gray-700 hover:text-gray-900 font-medium">Testimonios</a>
              : null
             }
            <a href="#contacto" className="text-gray-700 hover:text-gray-900 font-medium">Contacto</a>
          </nav>
          
          {/* Redes sociales Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          
          {/* Botón de menú móvil */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none cursor-pointer"
            onClick={toggleMenu}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
        
        {/* Menú móvil */}
        <div className={`md:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'} shadow-lg`}>
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a href="#inicio" className="text-gray-700 hover:text-gray-900 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#libros" className="text-gray-700 hover:text-gray-900 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Libros</a>
              <a href="#autor" className="text-gray-700 hover:text-gray-900 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Sobre mí</a>
              {IsTestimonios?
              <a href="#testimonios" className="text-gray-700 hover:text-gray-900 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Testimonios</a>
              : null
             }
              <a href="#contacto" className="text-gray-700 hover:text-gray-900 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            </nav>
            
            <div className="flex items-center space-x-4 mt-4 pb-2">
              <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 md:pt-0 relative min-h-screen flex items-center bg-gradient-to-r from-gray-100 to-white overflow-hidden">
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
              Historias que transforman vidas
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg">
              Descubre un universo de ideas, emociones y conocimientos a través de mis obras literarias.
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

      {/* Sobre el Autor */}
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
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20middle%20aged%20latin%20male%20author%20in%20casual%20elegant%20attire%2C%20sitting%20in%20a%20library%20or%20office%20with%20books%2C%20warm%20lighting%2C%20neutral%20background%2C%20thoughtful%20expression%2C%20high%20quality%20photorealistic%20image&width=600&height=800&seq=12&orientation=portrait" 
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
                Apasionado por la tecnología y el aprendizaje continuo, soy desarrollador Full Stack con más de 10 años de experiencia en el ecosistema .NET, JavaScript, React y Node.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Mi objetivo es ayudarte a crecer como profesional con herramientas prácticas, claras y accesibles. Creo que aprender a programar debe ser simple, efectivo y orientado a resultados reales.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-gray-900">10+</span>
                  <span className="text-gray-600">Años de experiencia</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-gray-900">1</span>
                  <span className="text-gray-600">Libros publicados</span>
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

      {/* Libros Publicados */}
      <section id="libros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 relative">
            Mis Libros
            <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4"></span>
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
            Explora mi colección de obras literarias, cada una creada para inspirar, entretener y transformar.
          </p>
          
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => handleTabChange('todos')}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === 'todos' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              Todos
            </button>
            <button 
              onClick={() => handleTabChange('ficcion')}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === 'ficcion' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              Ficción
            </button>
            <button 
              onClick={() => handleTabChange('autoayuda')}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === 'autoayuda' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              Autoayuda
            </button>
            <button 
              onClick={() => handleTabChange('ciencia')}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === 'ciencia' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              Ciencia
            </button>
            <button 
              onClick={() => handleTabChange('historia')}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === 'historia' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              Historia
            </button>
            <button 
              onClick={() => handleTabChange('biografia')}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === 'biografia' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              Biografía
            </button>
          </div>
          
          {/* Grid de libros */}
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
                      <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out whitespace-nowrap !rounded-button cursor-pointer">
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
            <h3 className="text-xl font-medium text-gray-800 mb-6">Disponible en las principales plataformas</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                <i className="fab fa-amazon text-3xl mr-2"></i>
                <span className="font-medium">Amazon</span>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                <i className="fas fa-shopping-bag text-3xl mr-2"></i>
                <span className="font-medium">Mercado Libre</span>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                <i className="fas fa-book text-3xl mr-2"></i>
                <span className="font-medium">Casa del Libro</span>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                <i className="fas fa-store text-3xl mr-2"></i>
                <span className="font-medium">El Corte Inglés</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas de Ventas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative">
                Impacto de mis obras
                <span className="block w-24 h-1 bg-yellow-500 mt-4"></span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Mis libros han llegado a miles de lectores en todo el mundo, creando una comunidad global de personas inspiradas por mis historias y enseñanzas.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">100,000+</div>
                  <div className="text-gray-700">Ejemplares vendidos</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                  <div className="text-gray-700">Países</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">4.8/5</div>
                  <div className="text-gray-700">Valoración media</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
                  <div className="text-gray-700">Idiomas</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-16">
              <div id="sales-chart" className="w-full h-80 rounded-lg shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}

      {IsTestimonios?
                    <section id="testimonios" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 relative">
                        Testimonios de Lectores
                        <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4"></span>
                      </h2>
                      <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
                        Descubre lo que mis lectores opinan sobre mis obras y cómo han impactado en sus vidas.
                      </p>
                      
                      <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                          640: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 2,
                          },
                          1024: {
                            slidesPerView: 3,
                          },
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        className="testimonial-swiper"
                      >
                        {testimonios.map((testimonio) => (
                          <SwiperSlide key={testimonio.id}>
                            <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
                              <div className="flex items-center mb-6">
                                <img 
                                  src={testimonio.imagen} 
                                  alt={testimonio.nombre} 
                                  className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                  <h3 className="text-lg font-bold text-gray-900">{testimonio.nombre}</h3>
                                  <p className="text-gray-600">{testimonio.ubicacion}</p>
                                </div>
                              </div>
                              
                              <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                  <i 
                                    key={i} 
                                    className={`fas fa-star ${i < testimonio.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                  ></i>
                                ))}
                              </div>
                              
                              <p className="text-gray-700 italic mb-4 flex-grow">
                                <i className="fas fa-quote-left text-gray-300 text-2xl mr-2"></i>
                                {testimonio.texto}
                                <i className="fas fa-quote-right text-gray-300 text-2xl ml-2"></i>
                              </p>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </section>
      : null
      }


      {/* Contacto */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6 relative">
            Contacto
            <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4"></span>
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
            ¿Tienes alguna pregunta o comentario? No dudes en ponerte en contacto conmigo.
          </p>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <form className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Tu correo electrónico"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="asunto" className="block text-gray-700 font-medium mb-2">Asunto</label>
                  <input 
                    type="text" 
                    id="asunto" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">Mensaje</label>
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
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Información de contacto</h3>
                
                <div className="mb-8">
                  <div className="flex items-start mb-4">
                    <i className="fas fa-envelope text-gray-900 mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-700">contacto@gabrielmarquez.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <i className="fas fa-phone-alt text-gray-900 mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Teléfono</h4>
                      <p className="text-gray-700">+34 612 345 678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <i className="fas fa-map-marker-alt text-gray-900 mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Ubicación</h4>
                      <p className="text-gray-700">Madrid, España</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Sígueme en redes sociales</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out cursor-pointer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out cursor-pointer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out cursor-pointer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out cursor-pointer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out cursor-pointer">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Suscríbete a mi newsletter
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Recibe información sobre nuevos lanzamientos, eventos y contenido exclusivo directamente en tu bandeja de entrada.
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
              Al suscribirte, aceptas nuestra política de privacidad. No enviaremos spam.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">Franco Sosa</h3>
              <p className="mb-4">
                Autor, conferencista y creador de contenido dedicado a inspirar a través de la palabra escrita.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="hover:text-white transition duration-300 cursor-pointer">Inicio</a></li>
                <li><a href="#libros" className="hover:text-white transition duration-300 cursor-pointer">Libros</a></li>
                <li><a href="#autor" className="hover:text-white transition duration-300 cursor-pointer">Sobre mí</a></li>
                <li><a href="#testimonios" className="hover:text-white transition duration-300 cursor-pointer">Testimonios</a></li>
                <li><a href="#contacto" className="hover:text-white transition duration-300 cursor-pointer">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-3"></i>
                  <span>contacto@gabrielmarquez.com</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone-alt mt-1 mr-3"></i>
                  <span>+34 612 345 678</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                  <span>Madrid, España</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Métodos de pago</h3>
              <div className="flex flex-wrap gap-4">
                <i className="fab fa-cc-visa text-2xl"></i>
                <i className="fab fa-cc-mastercard text-2xl"></i>
                <i className="fab fa-cc-paypal text-2xl"></i>
                <i className="fab fa-cc-amex text-2xl"></i>
              </div>
              
              <h3 className="text-lg font-medium text-white mt-6 mb-4">Disponible en</h3>
              <div className="flex flex-wrap gap-4">
                <i className="fab fa-amazon text-2xl"></i>
                <i className="fas fa-book text-2xl"></i>
                <i className="fas fa-shopping-bag text-2xl"></i>
              </div>
            </div>
          </div>
          
          <hr className="border-gray-700 my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Franco Sosa. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition duration-300 cursor-pointer">Política de privacidad</a>
              <a href="#" className="hover:text-white transition duration-300 cursor-pointer">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a 
        href="https://wa.me/+5491144186438" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300 z-50 cursor-pointer"
      >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default PaginaVentaLibros;

