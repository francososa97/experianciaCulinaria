// Testimonials section using Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = ({IsTestimonios,testimonios}) =>{

    return(
        <>
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
            </>
    );
}
export default Testimonials;