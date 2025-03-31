import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  CardMedia,
  Button,
  IconButton,
  Modal,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CompareIcon from "@mui/icons-material/Compare";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close"; // "X" tugmasi uchun qo‘shildi
import axios from "axios";
import { useTranslation } from "react-i18next";
import { CurrencyContext } from "../Context/CurrencyContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import SimilarProductsCarousel from "./SimilarProductsCarousel";
import CustomerReviewsCarousel from "./CustomerReviewsCarousel";

const ProductDetailPage = () => {
  const { category, productId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { i18n } = useTranslation();
  const { currency, usdRate } = useContext(CurrencyContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "https://ingame1.azeme.uz/api/user/products?p=10"
        );
        console.log("API javobi:", response.data);

        if (!response.data || !Array.isArray(response.data.data)) {
          throw new Error("API’dan mahsulotlar massivi kelmadi");
        }

        const products = response.data.data;
        const foundProduct = products.find(
          (p) => p.id === parseInt(productId) && p.type === category
        );

        console.log("Topilgan mahsulot:", foundProduct);
        console.log("URL’dan kelgan category:", category);
        console.log("URL’dan kelgan productId:", productId);

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Mahsulot topilmadi");
        }
        setLoading(false);
      } catch (err) {
        console.error("API xatosi:", err);
        setError(err.message || "Ma’lumotlarni yuklashda xato yuz berdi");
        setLoading(false);
      }
    };
    fetchProduct();
  }, [category, productId]);

  if (loading) {
    return (
      <Container sx={{ mt: 4, py: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          {i18n.t("loading", { defaultValue: "Yuklanmoqda..." })}
        </Typography>
      </Container>
    );
  }

  if (error || !product) {
    return (
      <Container sx={{ mt: 4, py: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          {error || i18n.t("notFound", { defaultValue: "Mahsulot topilmadi" })}
        </Typography>
      </Container>
    );
  }

  const currentLang = i18n.language;
  const translation =
    product.translations.find((t) => t.locale === currentLang) ||
    product.translations[0];
  const productName = translation.name;
  const productDescription = translation.description;

  const basePriceUsd = product.price || 0;
  const priceInSom = Math.round(basePriceUsd * usdRate);
  const priceInUsd = Number(basePriceUsd.toFixed(2));
  const displayPrice = currency === "UZS" ? priceInSom : priceInUsd;

  const handleFavoriteToggle = () => setIsFavorite(!isFavorite);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: productName,
        price: currency === "UZS" ? priceInSom : priceInUsd,
        type: product.type,
        images: product.images,
      })
    );
  };

  return (
    <Box
      sx={{
        bgcolor: "#1A1A1A",
        minHeight: "100vh",
        color: "white",
        py: { xs: 3, md: 6 },
      }}
    >
      <Container maxWidth="lg" sx={{ mt: { xs: "60px", md: "80px" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 15 },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              flexShrink: 0,
              width: { xs: "100%", md: "auto" },
            }}
          >
            <CardMedia
              component="img"
              image={product.images[0].url}
              alt={productName}
              sx={{
                width: { xs: "100%", sm: 300, md: 400 },
                height: { xs: 250, sm: 350, md: 450 },
                objectFit: "contain",
                maxWidth: "100%",
              }}
            />
            <IconButton
              onClick={handleFavoriteToggle}
              sx={{
                position: "absolute",
                top: { xs: 10, md: 15 },
                right: { xs: 10, md: 15 },
                bgcolor: "rgba(255, 255, 255, 0.1)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
              }}
            >
              {isFavorite ? (
                <FavoriteIcon
                  sx={{ color: "#D3176D", fontSize: { xs: 20, md: 24 } }}
                />
              ) : (
                <FavoriteBorderIcon
                  sx={{ color: "white", fontSize: { xs: 20, md: 24 } }}
                />
              )}
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              maxWidth: { xs: "100%", md: 600 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Clash Display, sans-serif",
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
              }}
            >
              {productName}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Clash Display, sans-serif",
                color: "grey.500",
                mb: 2,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              {product.brand?.name || "Brend nomi yo‘q"}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Clash Display, sans-serif",
                  mr: 1,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {i18n.t("compare", { defaultValue: "Сравнить" })}
              </Typography>
              <CompareIcon
                sx={{ color: "white", fontSize: { xs: 20, md: 24 } }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Clash Display, sans-serif",
                mb: 3,
                lineHeight: 1.6,
                fontSize: { xs: "0.9rem", md: "1rem" },
                maxWidth: { xs: "100%", md: 500 },
              }}
            >
              {productDescription ||
                i18n.t("noDescription", {
                  defaultValue: "Qisqa tavsif mavjud emas",
                })}
            </Typography>
            <Typography
              onClick={handleOpenModal}
              sx={{
                fontFamily: "Clash Display, sans-serif",
                color: "#D3176D",
                mb: 4,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              {i18n.t("readMore", { defaultValue: "Читать далее..." })}
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontFamily: "Clash Display, sans-serif",
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              }}
            >
              {displayPrice
                ? `${displayPrice.toLocaleString()} ${currency}`
                : i18n.t("noPrice", { defaultValue: "Narx mavjud emas" })}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 1, sm: 2 },
                mb: 4,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                onClick={handleAddToCart}
                sx={{
                  bgcolor: "#D3176D",
                  color: "white",
                  fontFamily: "Clash Display, sans-serif",
                  px: { xs: 3, md: 4 },
                  py: { xs: 0.75, md: 1 },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                {i18n.t("BuyText", { defaultValue: "Купить" })}
              </Button>
              <Button
                variant="outlined"
                onClick={handleAddToCart}
                sx={{
                  borderColor: "#D3176D",
                  color: "#D3176D",
                  bgcolor: "#1A1A1A",
                  fontFamily: "Clash Display, sans-serif",
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.75, md: 1 },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <ShoppingCartIcon
                  sx={{ mr: 1, fontSize: { xs: 18, md: 20 } }}
                />
                {i18n.t("cart", { defaultValue: "Корзина" })}
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, sm: 3 },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocalShippingIcon
                  sx={{ mr: 1, fontSize: { xs: 20, md: 24 } }}
                />
                <Typography
                  sx={{
                    fontFamily: "Clash Display, sans-serif",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {i18n.t("delivery", { defaultValue: "Доставка" })}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <HelpOutlineIcon sx={{ mr: 1, fontSize: { xs: 20, md: 24 } }} />
                <Typography
                  sx={{
                    fontFamily: "Clash Display, sans-serif",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {i18n.t("needHelp", { defaultValue: "Нужна помощь?" })}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Yangilangan Modal qismi */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", sm: 500, md: 720 }, // Mobil uchun 90%, katta ekranlarda sabit
              height: { xs: "auto", md: "100vh" }, // Mobil uchun avto, katta ekranlarda to‘liq balandlik
              maxHeight: "90vh", // Ekran balandligining 90% bilan chegaralash
              bgcolor: "#1A1A1A",
              p: { xs: 2, sm: 3, md: 4 },
              color: "white",
              transform: openModal ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative", // "X" tugmasi uchun
              borderRadius: { xs: "8px", md: 0 }, // Mobil uchun yumaloq burchaklar
            }}
          >
            {/* "X" tugmasi */}
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "white",
                "&:hover": { color: "#D3176D" },
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Clash Display, sans-serif",
                  mb: 3,
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                }}
              >
                {i18n.t("aboutProduct", { defaultValue: "О товаре" })}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Clash Display, sans-serif",
                  mb: 4,
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                {productDescription ||
                  i18n.t("noFullDescription", {
                    defaultValue: "To‘liq tavsif mavjud emas",
                  })}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Clash Display, sans-serif",
                  mb: 3,
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                }}
              >
                {i18n.t("specifications", {
                  defaultValue: "Общие характеристики",
                })}
              </Typography>
              <Box
                sx={{
                  fontFamily: "Clash Display, sans-serif",
                  mb: 4,
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                }}
              >
                {product.specs ? (
                  Object.entries(product.specs).map(([key, value]) => (
                    <Typography
                      key={key}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { xs: 0.5, sm: 0 },
                      }}
                    >
                      <span>{key}</span>
                      <span
                        style={{
                          borderBottom: { xs: "none", sm: "1px dotted white" },
                          flex: { xs: "none", sm: 1 },
                          margin: { xs: 0, sm: "0 10px" },
                        }}
                      />
                      <span>{value}</span>
                    </Typography>
                  ))
                ) : (
                  <Typography>
                    {i18n.t("noSpecs", {
                      defaultValue: "Texnik xususiyatlar mavjud emas",
                    })}
                  </Typography>
                )}
              </Box>
            </Box>

            <Box
              sx={{
                bgcolor: "#1E1E1E",
                width: "100%",
                p: { xs: 2, md: 3 },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                position: "sticky",
                bottom: 0,
                gap: { xs: 2, sm: 0 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Clash Display, sans-serif",
                  fontWeight: "bold",
                  fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2rem" },
                }}
              >
                {displayPrice
                  ? `${displayPrice.toLocaleString()} ${currency}`
                  : i18n.t("noPrice", { defaultValue: "Narx mavjud emas" })}
              </Typography>
              <Button
                variant="contained"
                onClick={handleAddToCart}
                sx={{
                  bgcolor: "#D3176D",
                  color: "white",
                  fontFamily: "Clash Display, sans-serif",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                  px: { xs: 3, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  "&:hover": { bgcolor: "#b0145b" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                {i18n.t("toCart", { defaultValue: "В корзину" })}
              </Button>
            </Box>
          </Box>
        </Modal>

        <SimilarProductsCarousel category={category} />
        <CustomerReviewsCarousel />
      </Container>
    </Box>
  );
};

export default ProductDetailPage;
