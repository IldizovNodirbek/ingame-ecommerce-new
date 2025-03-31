import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import computerImage from "../Images/playstation.png";
import Contact from "../Modal/ContactModal";
import { useTranslation } from "react-i18next";

const CallSection = () => {
  const { t } = useTranslation(); // Tarjima uchun hook
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#1A1A1A",
        fontFamily: "Clash Display",
        color: "white",
        py: { xs: 4, md: 8 }, // Mobil uchun kamroq, desktop uchun ko‘proq padding
        px: { xs: 2, sm: 4 }, // Mobil uchun 16px, planshetdan keyin 32px
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" }, // Mobil: vertikal, Desktop: gorizontal
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          textAlign: "center",
          maxWidth: { xs: "100%", sm: "600px", md: "900px" }, // Ekran o‘lchamiga qarab kenglik
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: { xs: 2, md: 3 }, // Mobil uchun kamroq masofa
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" }, // Dinamik font
          }}
        >
          {t("callTitle")}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Mobil uchun kichikroq
            lineHeight: 1.8,
            mb: { xs: 3, md: 4 },
          }}
        >
          {t("callDescription")}
        </Typography>
        {/* Call Button */}
        <Button
          variant="contained"
          onClick={() => setModalOpen(true)}
          sx={{
            backgroundColor: "#D3176D",
            color: "#fff",
            fontWeight: "bold",
            fontSize: { xs: "14px", md: "16px" }, // Mobil uchun kichikroq
            px: { xs: 3, md: 4 }, // Mobil uchun kamroq padding
            py: { xs: 1.5, md: 2 },
            display: "flex",
            alignItems: "center",
            gap: 2,
            mx: "auto",
            "&:hover": { backgroundColor: "#b3145d" }, // Hover effekti
          }}
        >
          <BoltIcon
            sx={{ fontSize: { xs: "20px", md: "24px" }, color: "black" }}
          />
          {t("callButton")}
        </Button>
        <Contact open={modalOpen} handleClose={() => setModalOpen(false)} />
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          mt: { xs: 4, md: 0 }, // Mobil uchun yuqoridan masofa, desktopda 0
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={computerImage}
          alt="Computer"
          style={{
            width: "100%",
            maxWidth: { xs: "250px", sm: "300px", md: "397px" }, // Dinamik kenglik
            height: "auto", // Balandlikni avtomatik qilish
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default CallSection;
