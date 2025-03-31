import React from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Rasmlar
import monitorImage from "../Images/screen-image.png";
import deskImage from "../Images/table-image.png";
import chairImage from "../Images/kreslo-image.png";
import keyboardImage from "../Images/keyboard-image.png";
import coolerImage from "../Images/cooler-image.png";
import headsetImage from "../Images/headphone-image.png";
import mouseImage from "../Images/mouse-image.png";
import accessoriesImage from "../Images/microphone-image.png";

const CategoryPage = () => {
  const { t } = useTranslation();

  // Kategoriyalar ro‘yxati (API’dagi type ga moslashtirildi)
  const categories = [
    {
      id: 1,
      name: t("screen"),
      image: monitorImage,
      link: "products/monitor", // monitors → monitor
    },
    { id: 2, name: t("desk"), image: deskImage, link: "products/desk" }, // desk sifatida qoldik, agar API’da bor bo‘lsa
    { id: 3, name: t("chair"), image: chairImage, link: "products/chair" }, // chair sifatida qoldik
    {
      id: 4,
      name: t("keyboard"),
      image: keyboardImage,
      link: "products/keyboard", // keyboards → keyboard
    },
    {
      id: 5,
      name: t("cooler"),
      image: coolerImage,
      link: "products/component", // components → component (API’da shunday bo‘lishi mumkin)
    },
    {
      id: 6,
      name: t("headphone"),
      image: headsetImage,
      link: "products/naushnik", // headsets → naushnik
    },
    { id: 7, name: t("mouse"), image: mouseImage, link: "products/mouse" }, // mice → mouse
    {
      id: 8,
      name: t("microphone"),
      image: accessoriesImage,
      link: "products/accessory", // accessories → accessory
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#0F0F0F",
        color: "#FFF",
        py: { xs: 4, sm: 5, md: 6 },
        px: { xs: 2, sm: 4, md: 10 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Clash Display, sans-serif",
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
          mb: { xs: 1, sm: 1.5, md: 2 },
        }}
      >
        {t("category")}{" "}
        <span style={{ fontFamily: "Orbitron" }}> INGAME.UZ </span>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Clash Display, sans-serif",
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
          mb: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {t("categoryText")}
      </Typography>
      <Box
        sx={{
          width: { xs: "50px", sm: "80px", md: "120px" },
          height: "3px",
          bgcolor: "#D3176D",
          mx: "auto",
          mb: { xs: 3, sm: 4, md: 5 },
        }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: { xs: 2, sm: 3, md: 4 },
          mt: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={category.link}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Box
                component="img"
                src={category.image}
                alt={category.name}
                sx={{
                  width: { xs: 80, sm: 100, md: 112 },
                  height: { xs: 80, sm: 100, md: 112 },
                  mx: "auto",
                  display: "block",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Clash Display, sans-serif",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                  mt: { xs: 1, sm: 1.5, md: 2 },
                }}
              >
                {category.name}
              </Typography>
            </Box>
          </NavLink>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryPage;
