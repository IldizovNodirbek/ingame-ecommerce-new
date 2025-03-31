import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse, Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const { t } = useTranslation(); // Tarjima uchun hook
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  // FAQ ma'lumotlarini dinamik tarzda olish
  const faqData = t("faqItems", { returnObjects: true });

  return (
    <Box
      sx={{
        backgroundColor: "#1A1A1A",
        color: "#FFFFFF",
        py: 8,
        px: { xs: 2, sm: 4, md: 8 },
        textAlign: "center",
      }}
    >
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        {t("faqTitle")}
      </Typography>
      <Box
        sx={{
          height: "3px",
          width: "100px",
          backgroundColor: "pink",
          margin: "0 auto 20px auto",
        }}
      />
      {/* FAQ Items */}
      {faqData.map((faq, index) => (
        <Box key={index} sx={{ mb: 4, textAlign: "left" }}>
          {/* Question */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              py: 2,
            }}
            onClick={() => handleToggle(index)}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {faq.question}
            </Typography>
            <IconButton
              sx={{
                color: "#D3176D",
                transform:
                  expanded === index ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          {/* Answer */}
          <Collapse in={expanded === index} timeout="auto" unmountOnExit>
            <Typography
              sx={{
                pl: 2,
                py: 1,
                backgroundColor: "#2A2A2A",
                borderRadius: "8px",
              }}
            >
              {faq.answer}
            </Typography>
          </Collapse>
          {/* Divider */}
          <Divider sx={{ backgroundColor: "gray", mt: 2 }} />
        </Box>
      ))}
    </Box>
  );
};

export default FAQSection;
