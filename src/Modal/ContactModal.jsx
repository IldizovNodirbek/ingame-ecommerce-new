import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Phone, Telegram, Close } from "@mui/icons-material"; // Close ikonkasi qo‘shildi
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../Store/contactSlice";

const ContactModal = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const { contacts } = useSelector((state) => state.contacts);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "70%", md: "400px" },
    maxWidth: "100%",
    backgroundColor: "#1A1A1A",
    border: "1px solid #FFF",
    borderRadius: "10px",
    boxShadow: 24,
    p: { xs: 2, md: 3 },
    color: "#FFF",
    fontFamily: "'Clash Display', sans-serif",
  };

  const telegramContainerStyle = {
    mt: { xs: 2, md: 3 },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
    color: "#FFF",
  };

  const telegramRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  };

  const telegramIconStyle = {
    backgroundColor: "#FFF",
    color: "#000",
    borderRadius: "50%",
    p: { xs: 1, md: 1.25 },
    fontSize: { xs: "1.5rem", md: "2rem" },
  };

  const telegramTextStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "#FFF",
    cursor: "pointer",
    fontSize: { xs: "14px", md: "16px" },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.phone)
      newErrors.phone = t("phoneRequired") || "Telefon raqami majburiy";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const contactData = {
        name: formData.name,
        phone: formData.phone,
      };

      dispatch(addContact(contactData));

      console.log("Yuborilgan aloqa ma’lumotlari:", contactData);
      console.log(
        "Barcha kontaktlar (Redux store):",
        contacts.concat(contactData)
      );

      setFormData({ name: "", phone: "" });
      handleClose();
      alert(t("contactSuccess") || "Ma’lumotlar muvaffaqiyatli yuborildi!");
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", phone: "" }); // Formani tozalash
    setErrors({}); // Xatolarni tozalash
    handleClose(); // Modalni yopish
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/ingame_shop", "_blank"); // Telegram handle’ni o‘zgartiring
  };

  return (
    <Modal open={open} onClose={handleCancel}>
      <Box sx={modalStyle}>
        {/* "X" tugmasi */}
        <IconButton
          onClick={handleCancel}
          sx={{
            position: "absolute",
            top: { xs: 8, md: 10 },
            right: { xs: 8, md: 10 },
            color: "#FFF",
          }}
        >
          <Close sx={{ fontSize: { xs: 20, md: 24 } }} />
        </IconButton>

        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
        >
          <span style={{ color: "#D3176D" }}> {t("modalText")} </span>{" "}
          {t("modalTextContinue")}
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontSize: { xs: "14px", md: "16px" } }}
        >
          {t("modalText2")}
        </Typography>
        <TextField
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder={t("modalPlaceholder")}
          variant="outlined"
          InputProps={{
            style: { color: "#FFF" },
          }}
          sx={{
            mb: { xs: 2, md: 3 },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#FFF" },
              "&:hover fieldset": { borderColor: "#D3176D" },
              "& input": { fontSize: { xs: "14px", md: "16px" } },
            },
          }}
        />

        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontSize: { xs: "14px", md: "16px" } }}
        >
          {t("modalText3")}
        </Typography>
        <TextField
          fullWidth
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+998"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone sx={{ color: "#FFF", fontSize: { xs: 20, md: 24 } }} />
              </InputAdornment>
            ),
            style: { color: "#FFF" },
          }}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{
            mb: { xs: 2, md: 3 },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#FFF" },
              "&:hover fieldset": { borderColor: "#D3176D" },
              "& input": { fontSize: { xs: "14px", md: "16px" } },
            },
          }}
        />

        {/* Tugmalar konteyneri */}
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#D3176D",
              color: "#FFF",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: { xs: "14px", md: "16px" },
              py: { xs: 1, md: 1.5 },
              "&:hover": { backgroundColor: "#b3145d" },
            }}
          >
            {t("modalButton")}
          </Button>
        </Box>

        <Box sx={telegramContainerStyle}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#D3176D",
              fontWeight: "bold",
              textAlign: "center",
              mb: 1,
              fontSize: { xs: "12px", md: "14px" },
            }}
          >
            {t("modalConnect")}
          </Typography>
          <Box sx={telegramRowStyle}>
            <IconButton sx={telegramIconStyle} onClick={handleTelegramClick}>
              <Telegram sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} />
            </IconButton>
            <Typography sx={telegramTextStyle} onClick={handleTelegramClick}>
              Telegram
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ContactModal;
