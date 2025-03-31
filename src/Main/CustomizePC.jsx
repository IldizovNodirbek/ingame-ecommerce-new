import React, { useState } from "react";
import { Box, Typography, Button, Grid, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";

const CustomizePC = () => {
  const { t } = useTranslation();
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedSwitches, setSelectedSwitches] = useState({
    gaming: false,
    compact: false,
    perGame: false,
  });
  const [activeNav, setActiveNav] = useState(t("customizePC.nav.byPrice")); // Dastlabki holat tilga bog‘liq

  // Handle multiple price selection
  const handlePriceToggle = (price) => {
    setSelectedPrices((prev) =>
      prev.includes(price)
        ? prev.filter((item) => item !== price)
        : [...prev, price]
    );
  };

  // Handle switch toggle
  const handleSwitchToggle = (type) => {
    setSelectedSwitches((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  // Navigatsiya elementlari
  const navItems = [
    t("customizePC.nav.byPrice"),
    t("customizePC.nav.byGpu"),
    t("customizePC.nav.byCpu"),
    t("customizePC.nav.byResolution"),
  ];

  // Narxlar ro‘yxati
  const prices = t("customizePC.prices", { returnObjects: true });

  // Switch variantlari
  const switchOptions = [
    { label: t("customizePC.switches.gaming"), type: "gaming" },
    { label: t("customizePC.switches.compact"), type: "compact" },
    { label: t("customizePC.switches.perGame"), type: "perGame" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#0F0F0F",
        padding: { xs: "20px 10px", md: "50px 0" },
        color: "#FFFFFF",
        fontFamily: "'Clash Display', sans-serif",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          marginBottom: 4,
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        {t("customizePC.title")}
      </Typography>

      {/* Navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 4,
          borderBottom: "1px solid #444",
          flexWrap: "wrap",
        }}
      >
        {navItems.map((nav, index) => (
          <Typography
            key={index}
            onClick={() => setActiveNav(nav)}
            sx={{
              padding: { xs: "5px 10px", md: "10px 20px" },
              cursor: "pointer",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: activeNav === nav ? "#FF4081" : "#FFFFFF",
              borderBottom: activeNav === nav ? "3px solid #FF4081" : "none",
              transition: "all 0.3s ease",
            }}
          >
            {nav}
          </Typography>
        ))}
      </Box>

      {/* Price Buttons */}
      <Box sx={{ marginBottom: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {prices.slice(0, 4).map((price, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Button
                onClick={() => handlePriceToggle(price)}
                sx={{
                  width: "100%",
                  height: { xs: "40px", md: "50px" },
                  border: `3px solid ${
                    selectedPrices.includes(price) ? "#FF4081" : "#444444"
                  }`,
                  backgroundColor: "#1A1A1A",
                  color: "#FFFFFF",
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  padding: { xs: "5px", md: "10px" },
                  "&:hover": {
                    backgroundColor: "#2A2A2A",
                  },
                }}
              >
                {price}
              </Button>
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: 2 }}
        >
          {prices.slice(4).map((price, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Button
                onClick={() => handlePriceToggle(price)}
                sx={{
                  width: "100%",
                  height: { xs: "40px", md: "50px" },
                  border: `3px solid ${
                    selectedPrices.includes(price) ? "#FF4081" : "#444444"
                  }`,
                  backgroundColor: "#1A1A1A",
                  color: "#FFFFFF",
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  padding: { xs: "5px", md: "10px" },
                  "&:hover": {
                    backgroundColor: "#2A2A2A",
                  },
                }}
              >
                {price}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Switch Options */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 4,
          flexWrap: "wrap",
        }}
      >
        {switchOptions.map((option, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: index < 2 ? 4 : 0,
              marginBottom: { xs: 2, md: 0 },
            }}
          >
            <Switch
              checked={selectedSwitches[option.type]}
              onChange={() => handleSwitchToggle(option.type)}
              sx={{
                "& .MuiSwitch-thumb": {
                  backgroundColor: "#FFFFFF",
                },
                "& .MuiSwitch-track": {
                  backgroundColor: selectedSwitches[option.type]
                    ? "#D3176D"
                    : "gray",
                  opacity: 1,
                },
                "& .MuiSwitch-root": {
                  transform: { xs: "scale(0.8)", md: "scale(1)" },
                },
              }}
            />
            <Typography
              variant="body1"
              sx={{
                marginLeft: 2,
                fontSize: { xs: "0.8rem", md: "1.2rem" },
              }}
            >
              {option.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        sx={{
          display: "block",
          margin: "0 auto",
          backgroundColor: "#D3176D",
          color: "#FFFFFF",
          padding: { xs: "8px 40px", md: "12px 60px" },
          fontSize: { xs: "1rem", md: "1.2rem" },
        }}
      >
        {t("customizePC.submit")}
      </Button>
    </Box>
  );
};

export default CustomizePC;
