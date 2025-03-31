import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  TextareaAutosize,
  Divider,
} from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { clearCart } from "../Store/cartSlice";
import { CurrencyContext } from "../Context/CurrencyContext";
import { useTranslation } from "react-i18next";

const Checkout = () => {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const { currency, usdRate } = useContext(CurrencyContext);
  const { t } = useTranslation(); // Tarjima uchun hook

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    deliveryMethod: "delivery",
    deliveryOption: null,
    address: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const deliveryOptions = t("checkoutDatas.deliveryOptions", {
    returnObjects: true,
  }).map((option, index) => ({
    ...option,
    icon: [<DirectionsCarIcon />, <LocationOnIcon />, <VpnKeyIcon />][index],
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeliveryMethodChange = (method) => {
    setFormData((prev) => ({
      ...prev,
      deliveryMethod: method,
      deliveryOption: null,
    }));
  };

  const handleDeliveryOptionClick = (index) => {
    setFormData((prev) => ({
      ...prev,
      deliveryOption: deliveryOptions[index].label,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = t("checkoutDatas.errors.fullName");
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = t("checkoutDatas.errors.phoneNumber");
    if (!formData.deliveryMethod)
      newErrors.deliveryMethod = t("checkoutDatas.errors.deliveryMethod");
    if (formData.deliveryMethod === "delivery" && !formData.deliveryOption) {
      newErrors.deliveryOption = t("checkoutDatas.errors.deliveryOption");
    }
    if (formData.deliveryMethod === "delivery" && !formData.address.trim()) {
      newErrors.address = t("checkoutDatas.errors.address");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const orderData = {
        ...formData,
        cart: {
          items,
          totalQuantity,
          totalPrice:
            currency === "UZS" ? Math.round(totalPrice * usdRate) : totalPrice,
        },
        currency,
      };
      console.log("Buyurtma ma’lumotlari:", orderData);

      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
      existingOrders.push(orderData);
      localStorage.setItem("orders", JSON.stringify(existingOrders));

      setFormData({
        fullName: "",
        phoneNumber: "",
        deliveryMethod: "delivery",
        deliveryOption: null,
        address: "",
        comment: "",
      });
      setErrors({});
      dispatch(clearCart());
    }
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

  const deliveryPrice = currency === "UZS" ? "100,000 so‘m" : "7.90 USD";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#1A1A1A",
        p: { xs: 2, md: 4 },
        pt: { xs: 18, md: 18 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 2, md: 4 },
        alignItems: "flex-start",
        overflowX: "hidden",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          flex: 1,
          color: "#FFF",
          fontFamily: "Clash Display, sans-serif",
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          {t("checkoutDatas.title")}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            fullWidth
            label={t("checkoutDatas.fullNameLabel")}
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            variant="standard"
            error={!!errors.fullName}
            helperText={errors.fullName}
            sx={{
              input: {
                color: "#FFF",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontFamily: "Clash Display, sans-serif",
              },
              "& .MuiInput-underline:before": { borderBottomColor: "#FFF" },
              "& .MuiInputLabel-root": {
                color: "#FFF",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontFamily: "Clash Display, sans-serif",
              },
              maxWidth: { xs: "100%", md: 400 },
            }}
          />
          <TextField
            fullWidth
            label={t("checkoutDatas.phoneNumberLabel")}
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            variant="standard"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            sx={{
              input: {
                color: "#FFF",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontFamily: "Clash Display, sans-serif",
              },
              "& .MuiInput-underline:before": { borderBottomColor: "#FFF" },
              "& .MuiInputLabel-root": {
                color: "#FFF",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontFamily: "Clash Display, sans-serif",
              },
              maxWidth: { xs: "100%", md: 400 },
            }}
          />
        </Box>
        <Typography
          sx={{ mt: 2, mb: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}
        >
          {t("checkoutDatas.deliveryMethodsTitle")}
        </Typography>
        {errors.deliveryMethod && (
          <Typography
            sx={{
              color: "red",
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              mb: 1,
            }}
          >
            {errors.deliveryMethod}
          </Typography>
        )}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.deliveryMethod === "delivery"}
                onChange={() => handleDeliveryMethodChange("delivery")}
                sx={{ color: "#FFF", "&.Mui-checked": { color: "#D3176D" } }}
              />
            }
            label={t("checkoutDatas.delivery")}
            sx={{ color: "#FFF", fontSize: { xs: "0.9rem", md: "1rem" } }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.deliveryMethod === "pickup"}
                onChange={() => handleDeliveryMethodChange("pickup")}
                sx={{ color: "#FFF", "&.Mui-checked": { color: "#D3176D" } }}
              />
            }
            label={t("checkoutDatas.pickup")}
            sx={{ color: "#FFF", fontSize: { xs: "0.9rem", md: "1rem" } }}
          />
        </Box>
        {formData.deliveryMethod === "delivery" && (
          <>
            {errors.deliveryOption && (
              <Typography
                sx={{
                  color: "red",
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  mb: 1,
                }}
              >
                {errors.deliveryOption}
              </Typography>
            )}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}
            >
              {deliveryOptions.map((option, index) => (
                <Box
                  key={index}
                  onClick={() => handleDeliveryOptionClick(index)}
                  sx={{
                    border: "1px solid #B4B4B4",
                    borderRadius: "5px",
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    color:
                      formData.deliveryOption === option.label
                        ? "#D3176D"
                        : "#B4B4B4",
                    borderColor:
                      formData.deliveryOption === option.label
                        ? "#D3176D"
                        : "#B4B4B4",
                    "&:hover": { borderColor: "#D3176D" },
                    width: { xs: "100%", md: 400 },
                    maxWidth: "100%",
                  }}
                >
                  {React.cloneElement(option.icon, {
                    sx: {
                      color:
                        formData.deliveryOption === option.label
                          ? "#D3176D"
                          : "#B4B4B4",
                      fontSize: { xs: 20, md: 24 },
                    },
                  })}
                  <Box>
                    <Typography
                      sx={{ fontSize: { xs: "0.8rem", md: "0.9rem" } }}
                    >
                      {option.label}
                    </Typography>
                    <Typography
                      sx={{ fontSize: { xs: "0.7rem", md: "0.8rem" } }}
                    >
                      {option.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        )}
        {formData.deliveryMethod === "delivery" && (
          <TextField
            fullWidth
            label={t("checkoutDatas.addressLabel")}
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            variant="standard"
            error={!!errors.address}
            helperText={errors.address}
            sx={{
              mb: 2,
              input: {
                color: "#FFF",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontFamily: "Clash Display, sans-serif",
              },
              "& .MuiInput-underline:before": { borderBottomColor: "#FFF" },
              "& .MuiInputLabel-root": {
                color: "#FFF",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontFamily: "Clash Display, sans-serif",
              },
              maxWidth: { xs: "100%", md: 400 },
            }}
          />
        )}
        <Typography sx={{ mb: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}>
          {t("checkoutDatas.deliveryCostTitle")}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.8rem", md: "0.9rem" },
            color: "grey.400",
            mb: 2,
          }}
          dangerouslySetInnerHTML={{
            __html: t("checkoutDatas.deliveryCostText", { price: deliveryPrice }),
          }}
        />
        <Typography sx={{ mb: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}>
          {t("checkoutDatas.commentTitle")}
        </Typography>
        <TextareaAutosize
          minRows={3}
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          placeholder={t("checkoutDatas.commentPlaceholder")}
          style={{
            width: "100%",
            maxWidth: { xs: "100%", md: 400 },
            height: 80,
            backgroundColor: "transparent",
            color: "#FFF",
            border: "1px solid #FFF",
            borderRadius: "5px",
            padding: "8px",
            fontFamily: "Clash Display, sans-serif",
            fontSize: "0.9rem",
          }}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            mt: 2,
            bgcolor: "#D3176D",
            color: "#FFF",
            width: { xs: "100%", md: 300 },
            py: 1,
            fontSize: { xs: "1rem", md: "1.2rem" },
            fontFamily: "Clash Display, sans-serif",
            "&:hover": { bgcolor: "#FF4081" },
          }}
        >
          {t("checkoutDatas.submitButton")}
        </Button>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: 500 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: 500 },
            height: 452,
            bgcolor: "#131212",
            borderRadius: "10px",
            p: 2,
            color: "#FFF",
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontFamily: "Clash Display, sans-serif",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            {t("checkoutDatas.yourOrder")}
          </Typography>
          {items.length === 0 ? (
            <Typography sx={{ fontFamily: "Clash Display, sans-serif" }}>
              {t("checkoutDatas.emptyCart")}
            </Typography>
          ) : (
            items.map((item, index) => (
              <Box key={item.id}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <Box
                    component="img"
                    src={item.images?.[0]?.url}
                    alt={item.name}
                    sx={{
                      width: { xs: 80, md: 100 },
                      height: { xs: 80, md: 100 },
                      objectFit: "contain",
                    }}
                  />
                  <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                    <Typography
                      sx={{
                        fontFamily: "Clash Display, sans-serif",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FF4081",
                        fontFamily: "Clash Display, sans-serif",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {displayPrice(item.totalPrice)} {currency}
                    </Typography>
                  </Box>
                </Box>
                {index < items.length - 1 && (
                  <Divider sx={{ bgcolor: "grey.600", mb: 2 }} />
                )}
              </Box>
            ))
          )}
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: 244 },
            height: 134,
            border: "1px solid #D3176D",
            borderRadius: "5px",
            p: 2,
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Clash Display, sans-serif",
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {t("checkoutDatas.itemsLabel")}: {totalQuantity}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: "1rem", md: "1.2rem" },
              fontFamily: "Clash Display, sans-serif",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {t("checkoutDatas.totalLabel")}: {displayTotalPrice} {currency}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
