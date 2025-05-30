// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client"; 
import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import portada from '../assets/portada.png';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import WhatsAppButton from "../Components/WhatsAppButton";
import BooksSection from "../Components/BooksSection";
import ContactForm from "../Components/ContactForm";
import Landing from "../Components/Landing";
import AboutAuthor from "../Components/AboutAuthor";
import SalesStats from "../Components/SalesStats";
import { Testimonio } from "../types/types";
import Testimonials from "../Components/Testimonials";
import BookModal from "../Components/BookModal";

const PaginaVTres: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("todos");
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState("synopsis");
  const [IsTestimonios, setIsTestimonios] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleReadMore = (book: any) => {
    setSelectedBook(book);
    setIsModalOpen(true);
    setActiveModalTab("synopsis");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  // Testimonios de lectores
  const testimonios : Testimonio[] = [];
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
  const filteredBooks =
    activeTab === "todos"
      ? libros
      : libros.filter((libro) => libro.categoria === activeTab);
  useEffect(() => {
    // Inicializar gráfico de ventas
    const chartDom = document.getElementById("sales-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Ventas",
            type: "bar",
            barWidth: "60%",
            data: [320, 332, 301, 334, 390, 430],
            itemStyle: {
              color: "#192a56",
            },
          },
        ],
      };
      myChart.setOption(option);
      // Responsive chart
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header
        IsTestimonios={IsTestimonios} 
        toggleMenu={toggleMenu}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <Landing/>
      {/* Sobre el Autor */}
      <AboutAuthor 
      filteredBooks={filteredBooks}
      />
      {/* Libros Publicados */}
      <BooksSection
        handleTabChange={handleTabChange}
        activeTab={activeTab}
        filteredBooks={filteredBooks}
        handleReadMore={handleReadMore}
      />
      {/* Estadísticas de Ventas */}
      <SalesStats/>
      {/* Testimonios */}
      <Testimonials
        IsTestimonios={IsTestimonios}
        testimonios={testimonios}
      />
      {/* Contacto */}
      <ContactForm/>
      <Newsletter/>
      <Footer/>
      <WhatsAppButton/>
      <BookModal
        isModalOpen={isModalOpen}
        selectedBook={selectedBook}
        closeModal={() => setIsModalOpen(false)}
        setActiveModalTab={setActiveModalTab}
        activeModalTab={activeModalTab}
      />
    </div>
  );
};
export default PaginaVTres;
