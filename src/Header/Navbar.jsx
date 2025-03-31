import React, { useEffect, useState } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  Divider,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Menu as MenuIcon, Close, ArrowDropDown } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
import SearchState from "./Search";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../SwitchMode/LanguageSelector";
import CurrencySelector from "../SwitchMode/CurrencySelector";
import ContactModal from "../Modal/ContactModal";

const StyledDot = styled("span")({
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#D3176D",
  marginLeft: "5px",
});

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();
  const { totalQuantity } = useSelector((state) => state.cart);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleProductsDropdown = () =>
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  const handleServicesClick = () => setShowSubmenu(!showSubmenu);
  const handleNavigate = (path) => {
    setShowSubmenu(false);
    navigate(path);
  };
  const handleAboutClick = () => navigate("/about");
  const handleCartClick = () => navigate("/cart");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "ru";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const breadcrumbNames = {
    "": t("home"),
    category: t("category"),
    cart: t("cart"),
    checkout: t("checkout"),
    service1: t("service1"),
    service2: t("service2"),
    about: t("about"),
    products: t("products"),
  };

  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbs = [{ name: t("home"), path: "/" }];
  pathnames.forEach((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    const name = breadcrumbNames[value] || value;
    if (name !== t("home")) breadcrumbs.push({ name, path: to });
  });

  const showBreadcrumbs = location.pathname !== "/";

  const drawerContent = (
    <Box
      sx={{
        width: { xs: "80vw", sm: 250 },
        backgroundColor: "#0F0F0F",
        color: "#FFF",
        p: 2,
        height: "100vh", // To‘liq ekran balandligi
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Kontentni yuqori va pastga taqsimlash
      }}
    >
      <Box>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "#FFF" }}>
            <Close sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
        <List sx={{ px: 1 }}>
          {" "}
          {/* Yonlardan siqilishni oldini olish uchun padding */}
          <ListItem>
            <Button
              disabled
              sx={{
                color: "#FFF",
                textTransform: "none",
                width: "100%",
                justifyContent: "flex-start",
                fontSize: "1rem",
                "&.Mui-disabled": {
                  color: "#888",
                  opacity: 0.6,
                  cursor: "not-allowed",
                },
              }}
            >
              {t("products")}
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{
                color: "#FFF",
                textTransform: "none",
                width: "100%",
                justifyContent: "flex-start",
                fontSize: "1rem",
              }}
              onClick={handleServicesClick}
            >
              {t("services")}
            </Button>
            {showSubmenu && (
              <Box sx={{ pl: 2, display: "flex", flexDirection: "column" }}>
                <Button
                  sx={{
                    color: "#FFF",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    fontSize: "1rem",
                  }}
                  onClick={() => handleNavigate("/services/service1")}
                >
                  {t("service1")}
                </Button>
                <Button
                  sx={{
                    color: "#FFF",
                    textTransform: "none",
                    justifyContent: "flex-start",
                    fontSize: "1rem",
                  }}
                  onClick={() => handleNavigate("/services/service2")}
                >
                  {t("service2")}
                </Button>
              </Box>
            )}
          </ListItem>
          <ListItem>
            <Button
              sx={{
                color: "#FFF",
                textTransform: "none",
                width: "100%",
                justifyContent: "flex-start",
                fontSize: "1rem",
              }}
              onClick={handleAboutClick}
            >
              {t("about")}
            </Button>
          </ListItem>
          <ListItem>
            <Button
              sx={{
                color: "#FFF",
                textTransform: "none",
                width: "100%",
                justifyContent: "flex-start",
                fontSize: "1rem",
              }}
              onClick={handleCartClick}
            >
              {t("cart")}
            </Button>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ px: 1, pb: 2 }}>
        {" "}
        {/* Pastki qism uchun padding */}
        <Divider sx={{ backgroundColor: "gray", mb: 2 }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <LanguageSelector />
          <CurrencySelector />
          <Button
            sx={{
              backgroundColor: "#D3176D",
              color: "#FFF",
              textTransform: "none",
              width: "100%",
              py: 1,
              fontSize: "1rem",
            }}
            onClick={() => setModalOpen(true)}
          >
            {t("contact")}
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#1A1A1A", zIndex: 1200 }}
      >
        <Toolbar sx={{ px: { xs: 1, md: 2 }, justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              color: "#FFF",
              textDecoration: "none",
              fontFamily: "Orbitron, sans-serif",
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              mr: 2,
            }}
          >
            <span style={{ color: "#D3176D" }}>InGame</span>.uz
          </Typography>

          {/* Desktop navigatsiyalar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              sx={{ color: "#FFF", textTransform: "none", fontSize: "16px" }}
              endIcon={
                <ArrowDropDown sx={{ color: "#D3176D", fontSize: 30 }} />
              }
              onClick={toggleProductsDropdown}
            >
              {t("products")}
            </Button>
            <Button
              sx={{ color: "#FFF", textTransform: "none", fontSize: "16px" }}
              onClick={handleServicesClick}
            >
              {t("services")}
            </Button>
            <Button
              sx={{ color: "#FFF", textTransform: "none", fontSize: "16px" }}
              onClick={handleAboutClick}
            >
              {t("about")}
            </Button>
          </Box>

          {/* Ikonkalar va Hamburger (Mobil uchun) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
            }}
          >
            <IconButton sx={{ color: "#FFF" }} onClick={toggleSearch}>
              <SearchIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
            </IconButton>
            <IconButton
              onClick={handleCartClick}
              sx={{ color: "#FFF", position: "relative" }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
              {totalQuantity > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: -5,
                    right: -5,
                    bgcolor: "#D3176D",
                    borderRadius: "50%",
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    color: "#FFF",
                  }}
                >
                  {totalQuantity}
                </Box>
              )}
            </IconButton>
            {isMobile && (
              <IconButton onClick={toggleDrawer(true)} sx={{ color: "#FFF" }}>
                <MenuIcon sx={{ fontSize: 28 }} />
              </IconButton>
            )}
            {!isMobile && (
              <>
                <Button
                  sx={{
                    backgroundColor: "transparent",
                    fontFamily: "Clash Display sans-serif",
                    fontSize: "1.2rem",
                    color: "#FFF",
                    border: "1px solid #FFF",
                    textTransform: "none",
                    px: 3,
                    py: 0.5,
                  }}
                  onClick={() => setModalOpen(true)}
                >
                  {t("contact")}
                </Button>
                <LanguageSelector />
                <CurrencySelector />
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer (Hamburger menyusi) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#0F0F0F", // Drawer fon rangi aniq belgilandi
            width: { xs: "80vw", sm: 250 },
            boxSizing: "border-box", // Paddingni hisobga olish uchun
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Breadcrumbs */}
      {showBreadcrumbs && (
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#1A1A1A",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            color: "#FFF",
            position: "fixed",
            top: { xs: "56px", sm: "64px" },
            zIndex: 1100,
            borderBottom: "1px solid #333",
          }}
        >
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.path}>
              <NavLink to={breadcrumb.path}>
                <Button
                  style={{
                    color:
                      index === breadcrumbs.length - 1 ? "#D3176D" : "#FFF",
                    textTransform: "none",
                    fontFamily: "Clash Display, sans-serif",
                    fontSize: "1rem",
                    padding: "0",
                    minWidth: "auto",
                  }}
                >
                  {breadcrumb.name}
                  {index === breadcrumbs.length - 1 && <StyledDot />}
                </Button>
              </NavLink>
              {index < breadcrumbs.length - 1 && (
                <span style={{ color: "#B4B4B4", fontSize: "1rem" }}>
                  {">"}
                </span>
              )}
            </React.Fragment>
          ))}
        </Box>
      )}

      {/* Services Submenu (Desktop uchun) */}
      {showSubmenu && !isMobile && (
        <Box
          sx={{
            position: "fixed",
            top: "64px",
            left: "20%",
            width: "200px",
            backgroundColor: "#1A1A1A",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            color: "#FFF",
            zIndex: 1150,
            border: "1px solid #333",
            borderRadius: "5px",
          }}
        >
          <NavLink to="/services/service1">
            <Button
              style={{
                color: "#FFF",
                textTransform: "none",
                marginBottom: "10px",
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              {t("service1")} <StyledDot />
            </Button>
          </NavLink>
          <NavLink to="/services/service2">
            <Button
              style={{
                color: "#FFF",
                textTransform: "none",
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              {t("service2")} <StyledDot />
            </Button>
          </NavLink>
        </Box>
      )}

      {/* Search komponenti */}
      {showSearch && (
        <Box
          sx={{
            position: "fixed",
            top: { xs: "56px", sm: "64px" },
            left: 0,
            width: "100%",
            zIndex: 1200,
            backgroundColor: "#D3176D",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box sx={{ width: { xs: "90%", md: "50%" }, maxWidth: "100%" }}>
            <SearchState
              open={showSearch}
              onClose={() => setShowSearch(false)}
            />
          </Box>
        </Box>
      )}

      <ContactModal open={modalOpen} handleClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;
