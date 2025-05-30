"use client";

import axios from "axios";
import { useState,useEffect } from "react";

const Product = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  // Inicializar MP con tu public key (poner esto solo una vez en tu app)
  useEffect(() => {
      if (typeof window !== "undefined" && window.MercadoPago) {
    const mp = new window.MercadoPago("TEST-8e699f33-006f-4eb9-a170-8ff0a2896bd5", { locale: "es-AR" });
    setMpInstance(mp);
  } else {
    console.warn("MercadoPago aún no está disponible en window.");
  }
  }, []);

  const createPreference = async () => {
    try {
      debugger;
      const response = await axios.post("src/app/api/create-preference/route", {
        title: "Bananita contenta",
        price: 100,
        quantity: 1,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.error("Error creando preferencia:", error);
      return null;
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
      // Si estás usando el checkout brick:
      const mp = new window.MercadoPago("TEST-8e699f33-006f-4eb9-a170-8ff0a2896bd5", { locale: "es-AR" });
      const checkout = mp.checkout({
        preference: {
          id,
        },
        autoOpen: true,
      });
    }
  };

  return (
    <div>
      <h3>Bananita contenta</h3>
      <p>$100</p>
      <button onClick={handleBuy}>Comprar</button>
      <button onClick={handleBuy}>Comprar</button>
    </div>
  );
};

export default Product;
