import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Divider,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";
import ProductCard from "./ProductCard";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";

// Filterlar komponenti (o‘zgarmadi)
const Filters = ({ open, onClose }) => {
  return (
    <Box
      sx={{
        width: { xs: 250, sm: 250, md: "100%" },
        p: { xs: 2, sm: 2.5, md: 3 },
        color: "white",
        height: "fit-content",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, mb: 1 }}
      >
        Цена
      </Typography>
      <input
        type="text"
        style={{
          width: "100%",
          background: "black",
          border: "1px solid white",
          color: "white",
          padding: "5px",
          boxSizing: "border-box",
          fontSize: "16px",
        }}
      />
      <Divider sx={{ my: { xs: 1.5, md: 2 }, background: "gray" }} />
      <Typography
        variant="h6"
        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, mb: 1 }}
      >
        Бренды
      </Typography>
      {[
        "GIGABYTE Aorus",
        "ALIENWARE AURORA",
        "Lenovo Legion T7",
        "Acer Predator Orion",
        "ARENA 9604",
        "GAMER PRO RYZEN",
      ].map((brand) => (
        <FormControlLabel
          control={<Checkbox sx={{ color: "white" }} />}
          label={brand}
          sx={{
            color: "white",
            display: "block",
            fontSize: { xs: "14px", md: "16px" },
          }}
          key={brand}
        />
      ))}
      <Divider sx={{ my: { xs: 1.5, md: 2 }, background: "gray" }} />
      <Typography
        variant="h6"
        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, mb: 1 }}
      >
        Мониторы
      </Typography>
      {["32", "27", "24"].map((size) => (
        <FormControlLabel
          control={<Checkbox sx={{ color: "white" }} />}
          label={size}
          sx={{
            color: "white",
            display: "block",
            fontSize: { xs: "14px", md: "16px" },
          }}
          key={size}
        />
      ))}
      <Divider sx={{ my: { xs: 1.5, md: 2 }, background: "gray" }} />
      <Typography
        variant="h6"
        sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, mb: 1 }}
      >
        Мышка
      </Typography>
      {["Игровая", "Офисная"].map((type) => (
        <FormControlLabel
          control={<Checkbox sx={{ color: "white" }} />}
          label={type}
          sx={{
            color: "white",
            display: "block",
            fontSize: { xs: "14px", md: "16px" },
          }}
          key={type}
        />
      ))}
      <Divider sx={{ my: { xs: 1.5, md: 2 }, background: "gray" }} />
      <Button
        variant="outlined"
        sx={{
          width: "100%",
          border: "3px solid #D3176D",
          color: "white",
          mt: 1,
          fontSize: { xs: "14px", md: "16px" },
          py: { xs: 0.5, md: 1 },
        }}
      >
        Применить
      </Button>
      <Typography
        sx={{
          textAlign: "center",
          color: "gray",
          mt: 1,
          cursor: "pointer",
          fontSize: { xs: "12px", sm: "14px", md: "16px" },
        }}
      >
        Сбросить фильтр
      </Typography>
    </Box>
  );
};

// Asosiy komponent
const CategoryProducts = ({ category, filterPrice }) => {
  const [products, setProducts] = useState([]); // API’dan kelgan mahsulotlar
  const [loading, setLoading] = useState(true); // Yuklanish holati
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const itemsPerPage = 6;

  // API’dan ma’lumotlarni olish
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://ingame1.azeme.uz/api/user/products?p=10"
        );
        console.log("API javobi:", response.data); // Tekshirish uchun
        if (!response.data || !Array.isArray(response.data.data)) {
          throw new Error("API’dan mahsulotlar massivi kelmadi");
        }
        setProducts(response.data.data); // Faqat massivni saqlaymiz
        setLoading(false);
      } catch (error) {
        console.error("Mahsulotlarni olishda xato:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Box sx={{ color: "white", textAlign: "center", py: 10 }}>
        <Typography>Yuklanmoqda...</Typography>
      </Box>
    );
  }

  // Kategoriya bo‘yicha filterlash (type ishlatamiz)
  let categoryProducts = products.filter(
    (product) => product.type === category
  );

  // Narx bo‘yicha filterlash (price mavjud bo‘lsa)
  if (filterPrice) {
    categoryProducts = categoryProducts.filter(
      (product) => product.price && product.price <= filterPrice
    );
  }

  const totalPages = Math.ceil(categoryProducts.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const paginatedProducts = categoryProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const startPage = Math.max(1, page - Math.floor(5 / 2));
  const endPage = Math.min(totalPages, startPage + 5 - 1);
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 160px)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        p: { xs: 1, sm: 2, md: 3 },
        mt: { xs: 4, sm: 6, md: 10 },
        mb: { xs: 4, sm: 6, md: 10 },
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* Hamburger menyusi mobil uchun */}
      <Box sx={{ display: { xs: "block", md: "none" }, mb: 2 }}>
        <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
          <MenuIcon sx={{ fontSize: { xs: 30, sm: 36 } }} />
        </IconButton>
      </Box>

      {/* Drawer mobil uchun */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 250,
            bgcolor: "#1A1A1A",
            color: "white",
            boxSizing: "border-box",
          },
        }}
      >
        <Filters open={drawerOpen} onClose={toggleDrawer(false)} />
      </Drawer>

      {/* Filterlar desktop uchun */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: { md: "25%", lg: "20%" },
          flexShrink: 0,
          height: "fit-content",
        }}
      >
        <Filters />
      </Box>

      {/* Mahsulotlar qismi */}
      <Box
        sx={{
          flexGrow: 1,
          width: { xs: "100%", md: "75%", lg: "80%" },
          pl: { xs: 0, md: 3 },
          mt: { xs: 0, md: 0 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ justifyContent: "flex-start" }}
        >
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                key={product.id}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ProductCard category={category} product={product} />
              </Grid>
            ))
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#2A2A2A",
                py: { xs: 3, sm: 4, md: 10 },
                px: { xs: 2, sm: 4, md: 15 },
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                m: { xs: 1, sm: 2, md: "100px auto" },
                maxWidth: { xs: "95%", sm: "90%", md: "600px" },
              }}
            >
              <SentimentDissatisfiedIcon
                sx={{
                  fontSize: { xs: 50, sm: 60, md: 80 },
                  color: "#D3176D",
                  mb: { xs: 2, md: 3 },
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Clash Display, sans-serif",
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Hech qanday mahsulot topilmadi!
                <br /> Boshqa kategoriyalarni ko'rib chiqing
              </Typography>
            </Box>
          )}
        </Grid>
        {totalPages > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 0.5, sm: 1, md: 2 },
              mt: { xs: 2, sm: 3, md: 4 },
              flexWrap: "wrap",
            }}
          >
            <Button
              sx={{
                width: { xs: 32, sm: 36, md: 40 },
                height: { xs: 32, sm: 36, md: 40 },
                backgroundColor: "#1A1A1A",
                border: "2px solid white",
                borderRadius: "50%",
                color: "white",
                minWidth: "unset",
                "&:hover": { backgroundColor: "#333" },
                "&:disabled": { opacity: 0.5 },
              }}
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              <ArrowLeftIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} />
            </Button>
            {visiblePages.map((pageNumber) => (
              <Button
                key={pageNumber}
                sx={{
                  width: { xs: 32, sm: 36, md: 40 },
                  height: { xs: 32, sm: 36, md: 40 },
                  backgroundColor: page === pageNumber ? "#D3176D" : "#1A1A1A",
                  border: "2px solid #D3176D",
                  borderRadius: "50%",
                  color: page === pageNumber ? "white" : "#D3176D",
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  minWidth: "unset",
                  "&:hover:not(:disabled)": {
                    backgroundColor: page === pageNumber ? "#D3176D" : "#333",
                  },
                }}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </Button>
            ))}
            <Button
              sx={{
                width: { xs: 32, sm: 36, md: 40 },
                height: { xs: 32, sm: 36, md: 40 },
                backgroundColor: "#1A1A1A",
                border: "2px solid white",
                borderRadius: "50%",
                color: "white",
                minWidth: "unset",
                "&:hover": { backgroundColor: "#333" },
                "&:disabled": { opacity: 0.5 },
              }}
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              <ArrowRightIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} />
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CategoryProducts;
