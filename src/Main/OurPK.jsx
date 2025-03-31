import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CardComponent from "../Components/CardPC";

const OurPK = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "/api/ingame/user/desktops"
        );
        const result = await response.json();
        if (result.status === "Успешный") {
          setCards(result.data.slice(0, 3)); // Faqat dastlabki 3 ta card
        }
        setLoading(false);
      } catch (error) {
        console.error("API’dan ma’lumot olishda xatolik:", error);
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: "#1A1A1A", padding: "2rem" }}>
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Clash Display, sans-serif",
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "justify",
          marginLeft: "4rem",
        }}
      >
        Наши ПК
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          maxWidth: "1200px", // Kenglikni cheklash (ixtiyoriy)
          margin: "0 auto", // Markazga tekislash
        }}
      >
        {cards.map((card, index) => (
          <CardComponent key={index} card={card} />
        ))}
      </Box>
    </Box>
  );
};

export default OurPK;
