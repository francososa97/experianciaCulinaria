// Floating WhatsApp button
const WhatsAppButton = () =>{
    return(
              <a
        href="https://wa.me/34612345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300 z-50 cursor-pointer"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    );
}
export default WhatsAppButton;