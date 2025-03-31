import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { CurrencyContext } from "../Context/CurrencyContext";

const Promotions = () => {
  const { t, i18n } = useTranslation();
  const { currency, usdRate } = useContext(CurrencyContext);
  const [promotions, setPromotions] = useState([]); // Faqat promotions state’ini ishlatamiz
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await axios.get("/api/ingame/user/products?p=10");
        console.log("API status kodi:", response.status);
        console.log("API javobi:", response.data);
        console.log("Mahsulotlar massivi:", response.data.data);

        const allProducts = response.data.data;

        if (!allProducts || !Array.isArray(allProducts)) {
          throw new Error("API’dan mahsulotlar massivi kelmadi");
        }

        allProducts.forEach((product, index) => {
          console.log(`Mahsulot ${index} statuses:`, product.statuses);
        });

        const promotionProducts = allProducts.filter((product) =>
          product.statuses.some((status) =>
            status.translations.some(
              (trans) =>
                trans.name.toLowerCase() === "chegirma" ||
                trans.name.toLowerCase() === "распродажа"
            )
          )
        );

        console.log("Aksiyadagi mahsulotlar:", promotionProducts);
        setPromotions(promotionProducts);
      } catch (error) {
        console.error("Aksiyadagi mahsulotlarni olishda xato:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPromotions();
  }, []);

  return (
    <Box
      sx={{ backgroundColor: "#1A1A1A", padding: { xs: "1rem", sm: "2rem 0" } }}
    >
      <Box
        sx={{ marginBottom: "2rem", marginLeft: { xs: "0.5rem", sm: "1rem" } }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.8rem" },
            fontWeight: "bold",
            color: "#FFF",
            ml: 1,
          }}
        >
          {t("promotions", { defaultValue: "Акции" })}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Button
            sx={{
              backgroundColor: "#1A1A1A",
              border: "2px solid #D3176D",
              color: "#FFF",
              borderRadius: "20px",
              padding: { xs: "0.2rem 0.8rem", sm: "0.3rem 1rem" },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              textTransform: "none",
            }}
          >
            {t("new", { defaultValue: "Новинка" })}
          </Button>
          <WhatshotIcon
            sx={{ color: "#D3176D", fontSize: { xs: "2rem", sm: "2.5rem" } }}
          />
        </Box>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{ padding: { xs: "0 0.5rem", sm: "0 1rem" } }}
        justifyContent="center"
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px",
              width: "100%",
            }}
          >
           <Typography sx={{ color: "#FFF" }}>
            {t("loading", { defaultValue: "Yuklanmoqda..." })}
          </Typography>
          </Box>
        ) : promotions.length > 0 ? (
          promotions.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard
                product={{
                  id: product.id,
                  name:
                    product.translations.find((t) => t.locale === i18n.language)
                      ?.name || product.translations[0].name,
                  price: product.price,
                  image:
                    product.images?.[0]?.url ||
                    "https://via.placeholder.com/150",
                  brand: product.brand?.name || "Brend yo‘q",
                }}
                currency={currency}
                usdRate={usdRate}
              />
            </Grid>
          ))
        ) : (
          <Typography sx={{ color: "#FFF" }}>
            {t("noPromotions", {
              defaultValue: "Aksiyadagi mahsulotlar topilmadi",
            })}
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Promotions;
