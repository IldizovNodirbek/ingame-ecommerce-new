import React from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import CheckIcon from "@mui/icons-material/Check";
import i18n from "../SwitchMode/Languages";

const LanguageSelector = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const currentLang = i18n.language === "ru" ? "Rus" : "Uzb";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang === "Rus" ? "ru" : "uz");
    handleClose();
  };

  return (
    <div>
      <Button
        style={{
          color: "#FFF",
          fontWeight: "bold",
          fontFamily: "Orbitron",
        }}
        endIcon={
          <ArrowDropDown
            style={{
              fontSize: "30px",
              color: "#D3176D",
              transform: anchorEl ? "rotate(-180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        }
        onClick={handleClick}
      >
        {currentLang}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#0A0A0A",
            color: "#FFF",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        {["Uzb", "Rus"].map((lang) => (
          <MenuItem
            key={lang}
            onClick={() => changeLanguage(lang)}
            style={{
              fontFamily: "Clash Display",
              color: currentLang === lang ? "#D3176D" : "#FFF",
            }}
          >
            {currentLang === lang && (
              <CheckIcon fontSize="small" style={{ marginRight: "8px" }} />
            )}
            {lang}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageSelector;
