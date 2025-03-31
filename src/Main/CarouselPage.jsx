import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import mainImage from "../Images/main-image-1.png";
import mainImage2 from "../Images/main-image-2.jpg";
import mainImage3 from "../Images/main-image-3.jpg";
import { useTranslation } from "react-i18next";

const CarouselPage = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  // Slaydlarni i18n dan olish
  const slides = t("carousel.slides", { returnObjects: true }).map(
    (slide, index) => ({
      ...slide,
      buttonText: t("mainButton"),
      mainImage: [mainImage, mainImage2, mainImage3][index],
    })
  );

  // Avtomatik aylanish uchun useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Har 5 sekundda o‘tadi
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Box sx={{ bgcolor: "#0A0A0A", color: "#FFF", overflow: "hidden" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "auto", md: "80vh" },
          pt: { xs: 10, sm: 12, md: 14 }, // Navigatsiyadan masofa uchun yuqoridan padding
          pb: { xs: 4, md: 8 }, // Pastdan masofa
          px: { xs: 2, sm: 4, md: 6 }, // Yon padding responsiv
          overflow: "hidden",
        }}
      >
        {/* Slayder konteyneri */}
        <Box
          sx={{
            display: "flex",
            width: `${slides.length * 100}%`,
            transform: `translateX(-${activeIndex * (100 / slides.length)}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                width: `${100 / slides.length}%`,
                flexShrink: 0,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Text Section */}
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  width: { xs: "100%", md: "50%" },
                  mb: { xs: 3, md: 0 }, // Mobil uchun matn va rasm orasidagi masofa
                  order: { xs: 2, md: 1 },
                  px: { xs: 1, sm: 2, md: 0 }, // Mobil uchun matnni cheklash
                  maxWidth: { xs: "100%", md: "auto" }, // Mobil uchun chegaralash
                  overflowWrap: "break-word", // Matnning uzilib ketmasligi uchun
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                      lg: "4rem",
                    },
                    mb: { xs: 1, sm: 1.5, md: 2 },
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Clash Display, sans-serif",
                    fontSize: {
                      xs: "0.9rem",
                      sm: "1rem",
                      md: "1.2rem",
                      lg: "1.4rem",
                    },
                    lineHeight: 1.6,
                  }}
                  dangerouslySetInnerHTML={{ __html: slide.text }}
                />
                <Button
                  sx={{
                    mt: { xs: 1.5, md: 2 },
                    bgcolor: "#0A0A0A",
                    border: "3px solid #D3176D",
                    borderRadius: "25px 0px 25px 0px",
                    color: "#FFF",
                    px: { xs: 2, sm: 3, md: 4 },
                    py: { xs: 0.75, md: 1 },
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                    fontWeight: "bold",
                    "&:hover": { bgcolor: "#1A1A1A" },
                  }}
                >
                  {slide.buttonText}
                </Button>
              </Box>

              {/* Image Section */}
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  display: "flex",
                  justifyContent: "center",
                  order: { xs: 1, md: 2 },
                  mb: { xs: 3, md: 0 }, // Mobil uchun rasm va matn orasidagi masofa
                }}
              >
                <Box
                  component="img"
                  src={slide.mainImage}
                  alt="Main Image"
                  sx={{
                    width: { xs: "80%", sm: "70%", md: "80%", lg: "90%" },
                    maxWidth: "600px",
                    height: "auto",
                    filter:
                      index === 0
                        ? "none"
                        : "brightness(80%) drop-shadow(0px 10px 20px rgba(255, 255, 255, 0.5))",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Indicators */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: { xs: 2, md: 3 },
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
              height: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
              borderRadius: "50%",
              bgcolor: activeIndex === index ? "#D3176D" : "#FFF",
              mx: 1,
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CarouselPage;
