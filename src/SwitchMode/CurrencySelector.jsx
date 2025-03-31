// src/components/CurrencySelector.js
import React, { useContext, useState } from "react";
import { CurrencyContext } from "../Context/CurrencyContext";
import { Menu, MenuItem, IconButton, Typography } from "@mui/material";
import { ArrowDropDown, Check as CheckIcon } from "@mui/icons-material";

const CurrencySelector = () => {
  const { currency, handleCurrencyChange } = useContext(CurrencyContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onCurrencySelect = (newCurrency) => {
    handleCurrencyChange(newCurrency);
    handleMenuClose();
  };

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{ color: "#FFF" }}>
        <Typography
          style={{
            marginRight: "5px",
            fontWeight: "bold",
            fontFamily: "Orbitron",
          }}
        >
          {currency}
        </Typography>
        <ArrowDropDown
          style={{
            fontSize: "30px",
            color: "#D3176D",
            transform: anchorEl ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            backgroundColor: "#0A0A0A",
            color: "#FFF",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        {["UZS", "USD"].map((money) => (
          <MenuItem
            key={money}
            onClick={() => onCurrencySelect(money)}
            style={{
              fontFamily: "Clash Display",
              color: currency === money ? "#D3176D" : "#FFF",
            }}
          >
            {currency === money && (
              <CheckIcon fontSize="small" style={{ marginRight: "8px" }} />
            )}
            {money}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CurrencySelector;
