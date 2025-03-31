// src/context/CurrencyContext.js
import React, { createContext, useState, useEffect } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(localStorage.getItem("currency") || "USD");
  const [usdRate, setUsdRate] = useState(12650); // Default kurs

  // API’dan USD kursini olish
  useEffect(() => {
    const fetchCurrencyRate = async () => {
      try {
        const response = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/");
        const data = await response.json();
        const usd = data.find((item) => item.Ccy === "USD");
        setUsdRate(parseFloat(usd.Rate));
      } catch (error) {
        console.error("Valyuta kursini olishda xatolik:", error);
      }
    };
    fetchCurrencyRate();
  }, []);

  // Valyuta o‘zgarganda yangilash
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, usdRate, handleCurrencyChange }}>
      {children}
    </CurrencyContext.Provider>
  );
};
