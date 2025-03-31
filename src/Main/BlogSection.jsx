import React from "react";
import { Box, Typography } from "@mui/material";
import YouTube from "react-youtube";
import { useTranslation } from "react-i18next";

const BlogSection = () => {
  const { t } = useTranslation(); // Tarjima uchun hook

  const opts = {
    height: "280", // Video balandligi kartaga mos
    width: "100%", // Video kengligi kartaga to‘liq mos
    playerVars: {
      autoplay: 0, // Avtomatik ijro yo‘q
    },
  };

  // Blog ma'lumotlarini dinamik tarzda olish va videoId, link qo‘shish
  const blogData = t("blogItems", { returnObjects: true }).map(
    (item, index) => ({
      ...item,
      videoId: ["Q82tQJyJwgk", "vfihprXzKXE", "N-FMPbm5CNM"][index], // Statik videoId’lar
      link: [
        "https://www.youtube.com/watch?v=Q82tQJyJwgk",
        "https://youtu.be/vfihprXzKXE?si=HzDMjPpUb_irOdZr",
        "https://youtu.be/N-FMPbm5CNM?si=LEJEwUnAd21ILpV2",
      ][index], // Statik linklar
    })
  );

  return (
    <Box
      sx={{
        backgroundColor: "#1A1A1A",
        py: 8,
        px: { xs: 2, sm: 4, md: 8 },
        color: "#FFFFFF",
        fontFamily: "Clash display, sans-serif",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
      >
        {t("blogTitle")}
      </Typography>

      {/* Card Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {blogData.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "386px", // Kartaning kengligi saqlanadi
              height: "462px", // Kartaning balandligi saqlanadi
              backgroundColor: "#0F0F0F",
              borderRadius: "8px",
              overflow: "hidden",
              mx: "auto",
              display: "flex",
              flexDirection: "column", // Video va matn vertikal joylashadi
            }}
          >
            {/* Video Section */}
            <Box sx={{ width: "100%", height: "280px" }}>
              <YouTube videoId={item.videoId} opts={opts} />
            </Box>

            {/* Content Section */}
            <Box
              sx={{
                p: 2,
                flexGrow: 1, // Qolgan joyni to‘ldiradi
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Title */}
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#FFFFFF", // Matn aniq ko‘rinishi uchun oq rang
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#E0E0E0", // Matn o‘qilishi uchun ochiq kulrang
                  lineHeight: 1.5, // Matn o‘qilishi uchun qatorlar orasi
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BlogSection;
