import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { CurrencyContext } from "../Context/CurrencyContext";
import { useTranslation } from "react-i18next"; // i18next uchun

const ProductCard = ({ product, category, isCarousel }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currency, usdRate } = useContext(CurrencyContext);
  const { i18n } = useTranslation(); // Tilni olish uchun

  // Tanlangan tilga mos tarjimani olish
  const currentLang = i18n.language; // "ru" yoki "uz"
  const translation =
    product.translations.find((t) => t.locale === currentLang) ||
    product.translations[0]; // Agar til topilmasa, birinchisini olamiz
  const productName = translation.name;
  // Agar description kerak bo‘lsa: const productDescription = translation.description;

  // Narxni USD va UZS uchun hisoblash va yaxlitlash
  const basePriceUsd = product.price || 0;
  const priceInSom = Math.round(basePriceUsd * usdRate);
  const priceInUsd = Number(basePriceUsd.toFixed(2));
  const displayPrice = currency === "UZS" ? priceInSom : priceInUsd;

  const handleFavoriteToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleBuy = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          name: productName, // Backenddan olingan nom
          price: currency === "UZS" ? priceInSom : priceInUsd,
          type: product.type,
          images: product.images,
        })
      );
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          name: productName, // Backenddan olingan nom
          price: currency === "UZS" ? priceInSom : priceInUsd,
          type: product.type,
          images: product.images,
        })
      );
      navigate("/cart");
    }
  };

  if (!product) return null;

  return (
    <Card
      sx={{
        width: isCarousel ? 304 : "100%",
        maxWidth: isCarousel ? 304 : 300,
        height: isCarousel ? 325 : 400,
        bgcolor: "#1E1E1E",
        color: "#FFF",
        borderRadius: "10px",
        border: isCarousel ? "1px solid #424242" : "none",
        boxShadow: isCarousel ? "0 6px 12px rgba(0, 0, 0, 0.3)" : "none",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.02)" },
        position: "relative",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Link
          to={`/products/${category}/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardMedia
            component="img"
            sx={{
              width: isCarousel ? 173 : "70%",
              height: isCarousel ? 138 : 170,
              objectFit: "contain",
              margin: "0 auto",
              display: "block",
            }}
            image={product.images[0].url}
            alt={productName}
          />
        </Link>
        <IconButton
          onClick={handleFavoriteToggle}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            bgcolor: "rgba(255, 255, 255, 0.1)",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
          }}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ color: "#D3176D" }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: "white" }} />
          )}
        </IconButton>
      </Box>

      <CardContent sx={{ textAlign: "center", flexGrow: 1, p: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: isCarousel ? "1.1rem" : { xs: "1rem", sm: "1.25rem" },
            mb: 0.5,
          }}
        >
          {productName} {/* Backenddan olingan nom */}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#FF4081",
            fontWeight: "bold",
            fontSize: isCarousel ? "1.4rem" : { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          {displayPrice
            ? `${displayPrice.toLocaleString()} ${currency}`
            : "Narx mavjud emas"}
        </Typography>
      </CardContent>

      {!isCarousel && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            onClick={handleBuy}
            sx={{
              borderColor: "#FF4081",
              color: "#FF4081",
              flex: 1,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          >
            {i18n.t("BuyText")} {/* Statik matn */}
          </Button>
          <Button
            variant="outlined"
            onClick={handleAddToCart}
            sx={{
              borderColor: "#FFF",
              color: "#FFF",
              minWidth: "48px",
              padding: 0,
            }}
          >
            <ShoppingCartIcon />
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default ProductCard;
