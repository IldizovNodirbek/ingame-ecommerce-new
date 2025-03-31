import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, currency, usdRate }) => {
  const { t } = useTranslation();
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  // Narxni to‘g‘ri hisoblash (price USD’da keladi deb faraz qilamiz)
  const basePriceUsd = product.price || 0; // Backenddan kelgan narx (USD)
  const displayPrice =
    currency === "UZS" ? basePriceUsd * usdRate : basePriceUsd;

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: displayPrice, // To‘g‘ri hisoblangan narx
      image: product.image,
      brand: product.brand,
    };
    dispatch(addToCart(cartItem));
  };

  const handleBuyNow = () => {
    handleAddToCart(); // Savatchaga qo‘shadi
    navigate("/cart"); // /cart sahifasiga o‘tadi
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "300px" },
        height: { xs: "auto", sm: "511px" },
        backgroundColor: "#1E1E1E",
        borderRadius: "10px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Rasm va Yurak Ikonkasi */}
      <Box sx={{ position: "relative" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "164px",
            height: "251px",
            borderRadius: "8px",
            objectFit: "cover",
            marginLeft: "2.5rem",
          }}
        />
        <IconButton
          onClick={toggleLike}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: liked ? "#D3176D" : "#000",
            color: "#FFF",
            "&:hover": {
              backgroundColor: liked ? "#A30E55" : "#333",
            },
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </Box>

      {/* Matn va narxlar */}
      <Box>
        <Typography
          sx={{ color: "#FFF", fontSize: "1rem", fontWeight: "bold" }}
        >
          {product.name}
        </Typography>
        <Typography
          sx={{ color: "#D3176D", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          {currency === "UZS"
            ? `${Math.round(displayPrice).toLocaleString()} сум`
            : `$${displayPrice.toFixed(2)}`}
        </Typography>
        <Typography
          sx={{ color: "#FFF", fontSize: "0.8rem", marginTop: "0.5rem" }}
        >
          {t("details", { defaultValue: "Подробное инфо о кресле" })}
        </Typography>
      </Box>

      {/* "Купить" button va Savatcha */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleAddToCart}
          sx={{
            backgroundColor: "#D3176D",
            color: "#FFF",
            borderRadius: "20px",
            padding: { xs: "0.5rem 1rem", sm: "0.5rem 1rem" },
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#A30E55",
            },
          }}
        >
          {t("buy", { defaultValue: "Купить" })}
        </Button>
        <IconButton
          onClick={handleBuyNow}
          sx={{
            backgroundColor: "#333",
            color: "#FFF",
            "&:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductCard;
