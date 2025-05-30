// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client";// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import {
  HomeIcon,
  SparklesIcon,
  CubeIcon,
  FireIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import {
  EggIcon,         // 🍳 Brunch
  SandwichIcon,    // 🥪 Entrada
  UtensilsIcon,    // 🍝 Plato principal
  CakeSliceIcon,   // 🍰 Postre
  HomeIcon,        // Inicio
} from 'lucide-react';
import * as echarts from 'echarts';
const App: React.FC = () => {
const [currentStep, setCurrentStep] = useState(0);
const icons = [
  "🏠",  // Inicio
  "🍳",  // Brunch
  "🧀",  // Entrada
  "🍝",  // Principal
  "🍫",  // Postre
];
const steps = [
  {
  title: "Cenita con Bebi",
  description: `
    Bienvenido a una experiencia culinaria diseñada para despertar todos tus sentidos.
    A lo largo de cuatro pasos cuidadosamente curados, disfrutarás de sabores frescos, texturas envolventes
    y maridajes pensados para complementar cada plato. 
    Desde una entrada vibrante hasta un postre indulgente, cada momento ha sido concebido para celebrar
    el arte de compartir, la buena comida y el placer de un buen vino.
    Prepárate para un recorrido gastronómico elegante y memorable.
  `,
  wine: `
    Esta experiencia será acompañada por una selección especial de vinos:
    el blanco dulce Grazie Mille – Semillón Unique Terroir y el Rosado Syrah 2024,
    perfectos para realzar cada nota de sabor de nuestra velada.
  `,
  ingredients: [
    "🍽️ 4 pasos gastronómicos",
    "🍷 Vinos seleccionados para maridar",
    "✨ Experiencia sensorial completa"
  ],
  imageUrl: "https://images.pexels.com/photos/6127011/pexels-photo-6127011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Imagen de bienvenida - elegante mesa
  },
  {
    title: "Mini Brunch",
    description: `
      Una elegante bruschetta montada sobre una base crujiente de pan de campo con masa madre,
      untada delicadamente con queso crema suave. Coronada con una reducción artesanal de tomates cherry
      cocinados lentamente en aceite de oliva extra virgen, aportando notas dulces y ácidas que evocan
      los sabores del Mediterráneo. Finalizada con hojas frescas de albahaca que perfuman y equilibran
      la preparación, esta entrada simple y sofisticada destaca por su armonía de texturas y sabores frescos.
    `,
    wine: `
      Un Semillón dulce de terroir único que eleva la frescura y untuosidad de esta propuesta.
      De color amarillo pajizo con reflejos dorados, ofrece en nariz un bouquet de frutas blancas maduras,
      miel y delicadas flores. En boca despliega un dulzor elegante balanceado por una acidez fresca y mineral
      que envuelve con sutileza el paladar. Perfecto para acompañar la bruschetta de pan de campo con masa madre,
      coronada con queso crema sedoso, una reducción de tomates cherry de perfil mediterráneo en aceite de oliva,
      y hojas frescas de albahaca. La vibrante acidez y textura sedosa del vino realzan la cremosidad del queso y
      equilibran la dulzura natural de los tomates, creando una experiencia armónica que resalta la frescura y
      sofisticación de cada bocado.
    `,
    ingredients: [
      "🍞 Pan de campo con masa madre",
      "🧀 Queso crema de alta calidad",
      "🍅 Tomates cherry frescos",
      "🫒 Aceite de oliva extra virgen",
      "🌿 Hojas de albahaca fresca",
      "🧂 Sal marina (opcional)",
      "🌶️ Pimienta negra recién molida (opcional)"
    ],
    imageUrl: "https://images.pexels.com/photos/32314738/pexels-photo-32314738.jpeg" // Vino y frutas
  },
  {
    title: "Entrada: Tabla de Quesos",
    description: `
      Una exquisita selección de quesos artesanales que deleitarán tu paladar. Incluye una variedad de sabores
      y texturas: Gouda suave y cremoso, Roquefort intenso y picante, queso en barra con pesto aromático,
      queso azul con notas fuertes, Gruyère con su característico sabor a nuez, y Raclette suave y fundente.
      Acompañados de frutos secos, mermeladas artesanales y pan de nueces, esta tabla ofrece una experiencia
      gastronómica completa, ideal para compartir y disfrutar.
    `,
    wine: `
      Rosado Syrah 2024: Un rosado vibrante de Mendoza que combina notas frescas de frutos rojos y un delicado
      toque floral. Su acidez refrescante y final seco complementan a la perfección la intensidad y diversidad
      de los quesos, elevando cada bocado a una experiencia gourmet.
    `,
    ingredients: [
      "🧀 Queso Gouda",
      "🧀 Queso Roquefort",
      "🧀 Queso en barra con pesto",
      "🧀 Queso azul",
      "🧀 Queso Gruyère",
      "🧀 Queso Raclette",
      "🥜 Frutos secos",
      "🍇 Mermeladas artesanales",
      "🍞 Pan de nueces"
    ],
    imageUrl: "https://images.pexels.com/photos/248413/pexels-photo-248413.jpeg" // Tabla de quesos
  },
  {
    title: "Plato Principal: Sorrentinos con Crema y Portobellos",
    description: `
      Sorrentinos artesanales rellenos de jamon y queso, cocidos al dente y bañados
      en una cremosa salsa de nata infusionada con portobellos salteados en mantequilla y aceite de oliva.
      Cada bocado revela una perfecta armonía entre la untuosidad de la crema y la profundidad terrosa de los hongos,
      realzada por un toque sutil de pimienta negra recién molida y un delicado manto de queso parmesano rallado
      al momento. Un plato elegante que reconforta y eleva el paladar.
    `,
    wine: `
      Grazie Mille – Semillón Unique Terroir: Un blanco dulce de gran frescura y elegancia, con notas cítricas
      y matices florales que equilibran la untuosidad de la crema y complementan la riqueza umami de los portobellos.
      Su textura sedosa y final mineral realzan cada capa de sabor del plato.
    `,
    ingredients: [
      "🥟 Sorrentinos artesanales",
      "🌿 Espinaca salteada",
      "🍄 Portobellos frescos",
      "🥛 Crema de leche",
      "🧈 Mantequilla",
      "🫒 Aceite de oliva extra virgen",
      "🧂 Sal marina",
      "🌶️ Pimienta negra recién molida",
      "🧀 Parmesano rallado"
    ],
    imageUrl: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg" // Plato de pasta
  },
  {
    title: "Postre: Volcán de Chocolate",
    description: `
      Un clásico irresistible: volcán de chocolate negro con un centro líquido e intenso, servido caliente
      y acompañado por un delicado helado de vainilla de Madagascar. El contraste entre la textura fundente
      del chocolate y la cremosidad fría del helado crea una experiencia sensorial única, acentuada por una
      salsa de chocolate caliente vertida al momento. Un postre decadente, perfecto para cerrar la velada con
      elegancia y un guiño de hedonismo.
    `,
    wine: `
      Rosado Syrah 2024: Este rosado vibrante y expresivo de Mendoza, con sus notas frescas de frutos rojos
      y matices florales, aporta una acidez refrescante que equilibra la intensidad del chocolate negro.
      Su ligereza y final seco limpian el paladar, resaltando cada capa de dulzura y amargor del postre.
    `,
    ingredients: [
      "🍫 Chocolate negro de alta pureza",
      "🥚 Huevos frescos",
      "🧈 Mantequilla",
      "🍚 Azúcar",
      "🍦 Helado de vainilla de Madagascar",
      "🍫 Salsa de chocolate caliente",
      "🧂 Pizca de sal marina (opcional)"
    ],
    imageUrl: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg" // Volcán de chocolate
  }
];

const handleNextStep = () => {
if (currentStep < steps.length - 1) {
setCurrentStep(currentStep + 1);
} else {
setCurrentStep(0);
}
};
return (
<div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
{/* Fondo animado del universo */}
<div className="absolute inset-0 z-0 opacity-40" style={{
backgroundImage: "url('https://readdy.ai/api/search-image?query=Dark%20cosmic%20space%20background%20with%20stars%2C%20nebulas%20and%20subtle%20purple%20and%20blue%20hues%2C%20retrofuturistic%20aesthetic%2C%20elegant%20galaxy%20visualization%2C%20deep%20space%20with%20distant%20stars%20and%20cosmic%20dust%2C%20mysterious%20universe%20with%20depth%20and%20dimension%2C%20perfect%20for%20website%20background&width=1200&height=800&seq=universe1&orientation=landscape')",
backgroundSize: "cover",
backgroundPosition: "center",
}}></div>
{/* Overlay para mejorar la legibilidad */}
<div className="absolute inset-0 z-0 bg-black opacity-60"></div>
{/* Contenido principal */}
<div className="relative z-10 pt-16 pb-24 px-4 max-w-md mx-auto">
{/* Barra de navegación superior */}
<nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-800">
<div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
<h1 className="text-xl font-light tracking-wider">
<span className="text-purple-400">Cenita</span> <span className="text-gray-400">con Bebi</span>
</h1>
<div className="flex space-x-1">
{steps.map((_, index) => (
<div
key={index}
className={`w-6 h-1 rounded-full ${currentStep === index ? 'bg-purple-500' : 'bg-gray-700'}`}
></div>
))}
</div>
</div>
</nav>
{/* Contenido del paso actual */}
<div className="mt-6 transition-opacity duration-500">
<h2 className="text-3xl font-light text-center mb-6 tracking-wider text-purple-300">{steps[currentStep].title}</h2>
{/* Imagen del plato */}
<div className="rounded-lg overflow-hidden mb-8 shadow-lg shadow-purple-900/20">
<img
  src={steps[currentStep].imageUrl}
  alt={steps[currentStep].title}
  className="w-full h-120 object-cover object-center"
/>

</div>
{/* Descripción */}
<div className="mb-8 bg-gray-900 bg-opacity-60 backdrop-blur-sm p-5 rounded-lg border border-gray-800">
<h3 className="text-xl mb-3 text-purple-300 font-light">Descripción</h3>
<p className="text-gray-300 leading-relaxed">{steps[currentStep].description}</p>
</div>
{/* Maridaje de vino */}
<div className="mb-8 bg-gray-900 bg-opacity-60 backdrop-blur-sm p-5 rounded-lg border border-gray-800">
<div className="flex items-center mb-3">
<i className="fas fa-wine-glass-alt text-purple-400 mr-2"></i>
<h3 className="text-xl text-purple-300 font-light">Maridaje de Vino</h3>
</div>
<p className="text-gray-300 leading-relaxed">{steps[currentStep].wine}</p>
</div>
{/* Ingredientes */}
<div className="mb-10 bg-gray-900 bg-opacity-60 backdrop-blur-sm p-5 rounded-lg border border-gray-800">
<h3 className="text-xl mb-3 text-purple-300 font-light">Ingredientes</h3>
<ul className="grid grid-cols-2 gap-2">
{steps[currentStep].ingredients.map((ingredient, index) => (
<li key={index} className="flex items-center text-gray-300">
<i className="fas fa-circle text-xs text-purple-500 mr-2"></i>
{ingredient}
</li>
))}
</ul>
</div>
{/* Botón de navegación */}
<div className="flex justify-center">
<button
onClick={handleNextStep}
className="!rounded-button px-8 py-3 bg-gradient-to-r from-purple-700 to-indigo-800 text-white font-medium tracking-wide hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-900/30 flex items-center cursor-pointer"
>
{currentStep === steps.length - 1 ? (
<>
<span>Finalizar Experiencia</span>
<i className="fas fa-redo-alt ml-2"></i>
</>
) : (
<>
<span>Siguiente Paso</span>
<i className="fas fa-arrow-right ml-2"></i>
</>
)}
</button>
</div>
</div>
</div>
      {/* Tab bar */}
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-black bg-opacity-80 backdrop-blur-md border-t border-gray-800">
<div className="grid grid-cols-5 w-full">
  {["Inicio", "Brunch", "Entrada", "Principal", "Postre"].map((label, index) => (
    <button
      key={index}
      onClick={() => setCurrentStep(index)}
      className={`flex flex-col items-center justify-center py-3 cursor-pointer transition-colors duration-300 ${
        currentStep === index ? "text-purple-400" : "text-gray-500 hover:text-purple-300"
      }`}
    >
      <span className="text-2xl">{icons[index]}</span>
      <span className="text-xs">{label}</span>
    </button>
  ))}
</div>
</div>
    </div>
);
};
export default App