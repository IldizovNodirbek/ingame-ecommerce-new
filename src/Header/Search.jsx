import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Search as SearchIcon, Clear as ClearIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchState = ({ open, onClose }) => {
  const { t, i18n } = useTranslation();
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const searchRef = useRef(null);

  // Backenddan mahsulotlarni olish
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "/api/ingame/user/products?p=10"
        );
        console.log("API javobi:", response.data);

        if (!response.data || !Array.isArray(response.data.data)) {
          throw new Error("API’dan mahsulotlar massivi kelmadi");
        }

        setAllProducts(response.data.data);
      } catch (error) {
        console.error("Mahsulotlarni olishda xato:", error);
      }
    };
    fetchProducts();
  }, []);

  // Qidiruv funksiyasi
  const handleSearch = () => {
    if (!searchValue.trim()) {
      setSearchResults([]);
      return;
    }

    const filteredProducts = allProducts
      .map((product) => {
        const translation =
          product.translations.find((t) => t.locale === i18n.language) ||
          product.translations[0];
        return {
          id: product.id,
          category: product.type,
          name: translation.name,
          brand:
            product.brand?.name || t("noBrand", { defaultValue: "Brend yo‘q" }),
          image: product.images?.[0]?.url || "https://via.placeholder.com/50",
        };
      })
      .filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );

    setSearchResults(filteredProducts);
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue, allProducts]);

  const handleClearSearch = () => {
    setSearchValue("");
    setSearchResults([]);
  };

  // Tashqariga bosilganda yopilish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        onClose();
        setSearchValue("");
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Box
      ref={searchRef}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#1A1A1A",
        p: { xs: 1, sm: 1.5, md: 2 }, // Mobil uchun kichikroq padding
        width: { xs: "90%", sm: "80%", md: "100%" }, // Mobil uchun 90% kenglik
        maxWidth: { xs: "400px", md: "500px" }, // Maksimal kenglik chegarasi
        mx: "auto", // Markazga joylashish
        borderRadius: "8px",
        zIndex: 10,
      }}
      className="search-container"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          bgcolor: "#2A2A2A",
          borderRadius: "4px",
          p: { xs: 0.5, md: 1 }, // Ichki padding
        }}
      >
        <TextField
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={t("search", { defaultValue: "Qidirish" })}
          variant="standard"
          autoFocus
          InputProps={{
            disableUnderline: true,
            style: { color: "#fff", padding: "0 8px", flexGrow: 1 },
          }}
          sx={{
            "& input": { fontSize: { xs: "0.9rem", md: "1rem" } }, // Mobil uchun kichikroq font
            "& input::placeholder": {
              color: "#888",
              fontSize: { xs: "0.9rem", md: "1rem" },
            },
          }}
        />
        <IconButton
          onClick={handleSearch}
          sx={{ color: "#FFF", p: { xs: 0.5, md: 1 } }}
        >
          <SearchIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
        </IconButton>
        <IconButton
          onClick={handleClearSearch}
          sx={{ color: "#FFF", p: { xs: 0.5, md: 1 } }}
        >
          <ClearIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
        </IconButton>
      </Box>

      {searchResults.length > 0 && (
        <List
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            bgcolor: "#1A1A1A",
            borderRadius: "0 0 8px 8px",
            maxHeight: { xs: "200px", md: "300px" }, // Mobil uchun qisqaroq balandlik
            overflowY: "auto",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
            zIndex: 20,
            p: 0,
            width: "100%",
          }}
        >
          {searchResults.map((product) => (
            <ListItem
              key={product.id}
              component={Link}
              to={`/products/${product.category}/${product.id}`}
              onClick={onClose}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#FFF",
                textDecoration: "none",
                p: { xs: 1, md: 1.5 }, // Mobil uchun kichikroq padding
                "&:hover": { bgcolor: "#2A2A2A" },
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: { xs: 35, md: 50 }, // Mobil uchun kichikroq rasm
                  height: { xs: 35, md: 50 },
                  mr: { xs: 1, md: 2 }, // Mobil uchun kamroq margin
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <Box sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display, sans-serif",
                    fontSize: { xs: "0.85rem", md: "1rem" }, // Mobil uchun kichikroq
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", md: "0.9rem" }, // Mobil uchun kichikroq
                    color: "#888",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {product.brand}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SearchState;
