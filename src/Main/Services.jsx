import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Divider,
  List,
  ListItem,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import cardsImage from "../Images/card-image.jpg";

const ProductCardSection = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const products = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    title: t("productCardSection.title"),
    description: t("productCardSection.description"),
    details: t("productCardSection.details"),
    image: cardsImage,
  }));

  // List itemlarni olish
  const listItems = t("productCardSection.listItems", { returnObjects: true });

  return (
    <Box
      sx={{
        backgroundColor: "#1A1A1A",
        padding: "50px 20px",
        color: "#FFFFFF",
        fontFamily: "'Clash Display', sans-serif",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Box
              sx={{
                backgroundColor: "#111111",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt="Product Image"
                sx={{ width: "100%", height: "177px", objectFit: "cover" }}
              />
              <Box sx={{ padding: "16px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1.2rem",
                    color: "#FF4081",
                    fontWeight: "bold",
                  }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#BBBBBB",
                    marginBottom: "16px",
                    fontSize: "0.9rem",
                  }}
                >
                  {product.description}
                </Typography>
                <Divider
                  sx={{ backgroundColor: "#555555", marginBottom: "16px" }}
                />
                <List>
                  {listItems.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </List>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="outlined"
                    sx={{ border: "3px solid #FFF", color: "#FFFFFF" }}
                    onClick={() => handleOpen(product)}
                  >
                    {t("productCardSection.moreDetails")}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: 564 }, // Mobil uchun 90%, kattaroq ekranlar uchun 564px
              maxWidth: "100%", // Ekran chegarasidan chiqmaslik uchun
              bgcolor: "#1A1A1A",
              boxShadow: 24,
              p: { xs: 2, sm: 3 }, // Mobil uchun padding kichikroq
              borderRadius: "8px",
              color: "#FFF",
              outline: "none",
              maxHeight: "90vh", // Modal balandligi ekran balandligining 90% dan oshmasligi uchun
              overflowY: "auto", // Agar kontent uzun bo‘lsa, skroll paydo bo‘ladi
            }}
          >
            {selectedProduct && (
              <>
                <Box
                  component="img"
                  src={selectedProduct.image}
                  alt="Product Image"
                  sx={{
                    width: "100%",
                    height: { xs: "auto", sm: 333 }, // Mobil uchun avto, kattaroq ekranlar uchun 333px
                    maxHeight: { xs: 200, sm: 333 }, // Mobil ekranlarda rasm balandligini cheklash
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{ color: "#FF4081", fontWeight: "bold", marginTop: 2 }}
                >
                  {t("productCardSection.modalTitle")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#BBBBBB", marginTop: 1, lineHeight: 1.5 }}
                >
                  {selectedProduct.details}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 3,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#FF4081", color: "#FFF" }}
                    onClick={handleClose}
                  >
                    {t("productCardSection.closeButton")}
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ProductCardSection;
