// src/components/CardComponent.js
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { CurrencyContext } from "../Context/CurrencyContext";
import { Box, Typography, Button, Divider } from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import MemoryIcon from "@mui/icons-material/Memory";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import CustomIcon from "../Components/CustomIcon";

const CardComponent = ({ card }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currency, usdRate } = useContext(CurrencyContext);

  const basePriceUsd = card.price; // API’da dollarda keladi deb taxmin qilamiz
  const priceInSom = Math.round(basePriceUsd * usdRate * 1000000);
  const priceInUsd = basePriceUsd;
  const price = currency === "UZS" ? priceInSom : priceInUsd;
  const monthly =
    currency === "UZS"
      ? `~ ${(priceInSom / 12).toFixed()} сум/месяц`
      : `~ ${(priceInUsd / 12).toFixed(2)} USD/month`;

  const fpsData = card.desktop_fps.reduce((acc, item) => {
    acc[item.game.name] = Object.entries(item.fps).map(([res, value]) => value);
    return acc;
  }, {});

  const staticData = {
    processors: "Intel i7, Ryzen 5",
    gpu: "RTX 4080, GTX 1660",
    cooling: "Liquid Cooling",
    memory: "16GB DDR4",
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: card.id,
      name:
        card.translations.find((t) => t.locale === "ru")?.name || "Игровой ПК",
      price: currency === "UZS" ? priceInSom : priceInUsd,
      image: card.image?.url || "",
      type: card.desktop_type.name,
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: 359 },
        height: { xs: "auto", sm: 720 },
        backgroundColor: "#1E1E1E",
        borderRadius: "8px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt: "4rem",
      }}
    >
      <img
        src={card.image?.url || ""}
        alt="Desktop"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "4px",
          objectFit: "cover",
          margin: "0 auto",
        }}
      />
      <Box>
        <Button
          sx={{
            backgroundColor: "#D3176D",
            fontFamily: "Clash display, sans-serif",
            color: "#FFF",
            borderRadius: "25px",
            padding: "0.5rem 1rem",
            fontSize: "0.7rem",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          12 КОМПЛЕКТАЦИЙ
        </Button>
        <Typography
          sx={{
            display: "inline-block",
            marginLeft: "1.3rem",
            mt: "1rem",
            padding: "0.5rem 1rem",
            border: "3px solid #D3176D",
            color: "#FFF",
            fontSize: "1.2rem",
            borderRadius: "5px",
          }}
        >
          от {price.toLocaleString()} {currency}
        </Typography>
        <Typography
          sx={{
            color: "#D3176D",
            fontSize: "0.9rem",
            marginTop: "0.5rem",
            textAlign: "right",
          }}
        >
          {monthly}
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: "#666", margin: "1rem 0" }} />
      <Box>
        <Typography sx={{ color: "#D3176D", fontSize: "1.2rem" }}>
          {t("OurPKFirstText")}
        </Typography>
        <Typography sx={{ color: "#FFF", fontSize: "1rem" }}>
          {t("OurPKFirstText2")}
        </Typography>
        <Box sx={{ marginTop: "1rem" }}>
          {[
            { icon: <LaptopIcon />, title: "", desc: staticData.processors },
            {
              icon: <VideogameAssetIcon />,
              title: "Видеокарты",
              desc: staticData.gpu,
            },
            {
              icon: <ThermostatIcon />,
              title: "Охлаждение",
              desc: staticData.cooling,
            },
            { icon: <MemoryIcon />, title: "Память", desc: staticData.memory },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.8rem",
              }}
            >
              <Box sx={{ color: "#666", marginRight: "0.5rem" }}>
                {item.icon}
              </Box>
              <Box>
                <Typography sx={{ color: "#FFF", fontSize: "0.9rem" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#CCC", fontSize: "0.8rem" }}>
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ color: "#FFF", fontSize: "1rem", marginBottom: "0.5rem" }}
        >
          Performance
        </Typography>
        <Box
          sx={{
            border: "1px solid #FFF",
            padding: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "#FFF", fontSize: "0.8rem" }}>
            {t("gameText")}/FPS
          </Typography>
          <Typography sx={{ color: "#FFF", fontSize: "0.8rem" }}>
            1080p
          </Typography>
          <Typography sx={{ color: "#FFF", fontSize: "0.8rem" }}>
            1440p
          </Typography>
        </Box>
        {Object.entries(fpsData).map(([game, values], index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #FFF",
              padding: "0.5rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "#FFF", fontSize: "0.8rem" }}>
              {game}
            </Typography>
            <Typography sx={{ color: "#FFF", fontSize: "0.8rem" }}>
              {values[0] || "-"}
            </Typography>
            <Typography sx={{ color: "#FFF", fontSize: "0.8rem" }}>
              {values[1] || "-"}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", marginTop: "1rem" }}>
        <Button
          sx={{
            border: "4px solid #FFF",
            color: "#FFF",
            textTransform: "none",
            padding: "0.5rem 1.5rem",
          }}
        >
          {t("MoreDetails")}
        </Button>
        <Button
          sx={{
            backgroundColor: "#1A1A1A",
            border: "4px solid #D3176D",
            color: "#FFF",
            textTransform: "none",
            padding: "0.5rem 2.5rem",
            marginLeft: "1rem",
          }}
          onClick={handleAddToCart}
        >
          {t("BuyText")}
        </Button>
        <Button sx={{ color: "#fff", ml: "0.5rem" }}>
          <CustomIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default CardComponent;
