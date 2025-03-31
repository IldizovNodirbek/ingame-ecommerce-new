import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Slider from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProductCard from "../ProductsComponent/ProductCard";
import axios from "axios";

const SimilarProductsCarousel = ({ category }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // API’dan ma’lumot olish
  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const response = await axios.get(
          "https://ingame1.azeme.uz/api/user/products?p=10"
        );
        if (response.data && Array.isArray(response.data.data)) {
          const products = response.data.data;
          // Kategoriyaga mos mahsulotlarni filter qilish
          const filtered = products
            .filter((product) => product.type === category)
            .slice(0, 8); // 8 ta mahsulot
          setSimilarProducts(filtered);
        }
        setLoading(false);
      } catch (err) {
        console.error("Similar products xatosi:", err);
        setLoading(false);
      }
    };
    fetchSimilarProducts();
  }, [category]);

  // Slider sozlamalari
  const settings = {
    dots: false,
    infinite: similarProducts.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 0, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  // Arrow komponentlari
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: -20, sm: -30, md: -40 },
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "rgba(255, 255, 255, 0.1)",
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
          zIndex: 1,
          width: { xs: 36, md: 40 },
          height: { xs: 36, md: 40 },
        }}
      >
        <ArrowForwardIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
      </IconButton>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: -20, sm: -30, md: -40 },
          transform: "translateY(-50%)",
          color: "white",
          bgcolor: "rgba(255, 255, 255, 0.1)",
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
          zIndex: 1,
          width: { xs: 36, md: 40 },
          height: { xs: 36, md: 40 },
        }}
      >
        <ArrowBackIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
      </IconButton>
    );
  }

  if (loading) {
    return (
      <Box sx={{ bgcolor: "#1A1A1A", py: 3, textAlign: "center" }}>
        <Typography sx={{ color: "white" }}>Yuklanmoqda...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: "#1A1A1A",
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 1, sm: 2, md: 4 },
        width: "100%",
        minHeight: { xs: "300px", md: "400px" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Clash Display, sans-serif",
          color: "white",
          fontWeight: "bold",
          mb: { xs: 2, md: 4 },
          ml: { xs: 1, md: 2 },
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        Похожие товары
      </Typography>
      <Box
        sx={{
          position: "relative",
          maxWidth: { xs: "100%", sm: "90%", md: "1300px" },
          mx: "auto",
          px: { xs: 1, md: 0 },
        }}
      >
        {similarProducts.length > 0 ? (
          <Slider {...settings}>
            {similarProducts.map((product) => (
              <Box key={product.id} sx={{ px: { xs: 0.5, sm: 1, md: 1 } }}>
                <ProductCard product={product} category={category} isCarousel />
              </Box>
            ))}
          </Slider>
        ) : (
          <Typography sx={{ color: "white", textAlign: "center" }}>
            O‘xshash mahsulotlar topilmadi
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SimilarProductsCarousel;
