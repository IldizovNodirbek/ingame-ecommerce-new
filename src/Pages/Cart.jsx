// src/Pages/Cart.js
import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../Store/cartSlice";
import { CurrencyContext } from "../Context/CurrencyContext";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const { currency, usdRate } = useContext(CurrencyContext);
  const { t } = useTranslation(); // Tarjima uchun hook

  const handleIncreaseQuantity = (id, currentQuantity) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecreaseQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  // Narxlarni valyutaga moslashtirish va yaxlitlash
  const displayPrice = (price) => {
    return currency === "UZS"
      ? Math.round(price * usdRate).toLocaleString() // So‘mda yaxlitlash
      : price.toFixed(2); // Dollarda 2 kasrgacha
  };

  const displayTotalPrice =
    currency === "UZS"
      ? Math.round(totalPrice * usdRate).toLocaleString() // So‘mda yaxlitlash
      : totalPrice.toFixed(2); // Dollarda 2 kasrgacha

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#1A1A1A",
        p: { xs: 1, sm: 2, md: 4 },
        pt: { xs: 18, md: 18 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, md: 4 },
        alignItems: "flex-start",
      }}
    >
      <TableContainer
        sx={{
          bgcolor: "#1A1A1A",
          borderRadius: "10px",
          flex: 1,
          width: { xs: "100%", md: "auto" },
          overflowX: "auto",
        }}
      >
        <Table sx={{ minWidth: { xs: 300, md: 650 } }}>
          <TableHead>
            <TableRow sx={{ bgcolor: "#2D2D2D" }}>
              <TableCell
                sx={{
                  color: "#FFF",
                  fontWeight: "bold",
                  fontFamily: "Clash Display, sans-serif",
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                {t("cartDatas.product")}
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFF",
                  fontWeight: "bold",
                  fontFamily: "Clash Display, sans-serif",
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                {t("cartDatas.availability")}
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFF",
                  fontWeight: "bold",
                  fontFamily: "Clash Display, sans-serif",
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                {t("cartDatas.quantity")}
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFF",
                  fontWeight: "bold",
                  fontFamily: "Clash Display, sans-serif",
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                {t("cartDatas.price")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  sx={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Clash Display, sans-serif",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    py: 4,
                  }}
                >
                  {t("cartDatas.emptyCart")}
                </TableCell>
              </TableRow>
            ) : (
              items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell
                    sx={{
                      color: "#FFF",
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 1, sm: 2 },
                      flexDirection: { xs: "column", sm: "row" },
                      py: { xs: 1, md: 2 },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.images?.[0]?.url}
                      alt={item.name}
                      sx={{
                        width: { xs: 60, sm: 80, md: 100 },
                        height: { xs: 60, sm: 80, md: 100 },
                        objectFit: "contain",
                      }}
                    />
                    <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                      <Typography
                        sx={{
                          fontFamily: "Clash Display, sans-serif",
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "grey.400",
                          fontSize: {
                            xs: "0.7rem",
                            sm: "0.8rem",
                            md: "0.9rem",
                          },
                          fontFamily: "Clash Display, sans-serif",
                        }}
                      >
                        {item.type}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFF",
                      fontFamily: "Clash Display, sans-serif",
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                    }}
                  >
                    <Typography>{t("cartDatas.order")}</Typography>
                    <Typography
                      sx={{
                        color: "grey.400",
                        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                      }}
                    >
                      {t("cartDatas.deliveryTime")}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#FFF" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 0.5, md: 1 },
                        justifyContent: { xs: "center", md: "flex-start" },
                        flexWrap: "wrap",
                      }}
                    >
                      <Button
                        variant="outlined"
                        onClick={() =>
                          handleDecreaseQuantity(item.id, item.quantity)
                        }
                        sx={{
                          minWidth: { xs: "20px", sm: "25px", md: "30px" },
                          p: 0,
                          bgcolor: "#2D2D2D",
                          color: "#FFF",
                          borderColor: "#2D2D2D",
                          fontSize: { xs: "0.8rem", md: "1rem" },
                        }}
                      >
                        -
                      </Button>
                      <Typography
                        sx={{
                          fontFamily: "Clash Display, sans-serif",
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        }}
                      >
                        {item.quantity}
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={() =>
                          handleIncreaseQuantity(item.id, item.quantity)
                        }
                        sx={{
                          minWidth: { xs: "20px", sm: "25px", md: "30px" },
                          p: 0,
                          bgcolor: "#2D2D2D",
                          color: "#FFF",
                          borderColor: "#2D2D2D",
                          fontSize: { xs: "0.8rem", md: "1rem" },
                        }}
                      >
                        +
                      </Button>
                      <IconButton
                        onClick={() => handleRemoveItem(item.id)}
                        sx={{ color: "#FB6F6F", p: { xs: 0.5, md: 1 } }}
                      >
                        <DeleteIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#FFF",
                      fontFamily: "Clash Display, sans-serif",
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                    }}
                  >
                    <Typography>
                      {displayPrice(item.totalPrice)} {currency}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: 400 },
          maxWidth: "400px",
          height: 158,
          bgcolor: "#000",
          borderRadius: "10px",
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignSelf: { xs: "center", md: "flex-start" },
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
            fontWeight: "bold",
            fontFamily: "Clash Display, sans-serif",
          }}
        >
          {t("cartDatas.total")}: ............... {displayTotalPrice} {currency}
        </Typography>
        <Button
          component={Link}
          to="/checkout"
          variant="contained"
          sx={{
            bgcolor: "#D3176D",
            color: "#FFF",
            fontFamily: "Clash Display, sans-serif",
            fontWeight: "bold",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            py: { xs: 0.5, md: 1 },
          }}
        >
          {t("cartDatas.continue")}
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
