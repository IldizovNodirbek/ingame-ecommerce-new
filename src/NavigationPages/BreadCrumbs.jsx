import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, Button, styled } from "@mui/material";

const StyledDot = styled("span")({
  display: "inline-block",
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#D3176D",
  marginLeft: "5px",
});

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // URL’ni qismlarga ajratamiz

  // Sahifa nomlarini URL’ga moslashtirish uchun xarita
  const breadcrumbNames = {
    "": "Главная",
    category: "Категории",
    cart: "Корзина",
    checkout: "Оформление заказа",
    service1: "Название услуги 1",
    service2: "Название услуги 2",
  };

  // Breadcrumbs yo‘lini shakllantirish
  const breadcrumbs = [
    { name: "Главная", path: "/" }, // Har doim boshida "Главная" bo‘ladi
  ];

  pathnames.forEach((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    const name = breadcrumbNames[value] || value; // Agar nom topilmasa, xom URL ishlatiladi
    if (name !== "Главная") {
      // "Главная" ni takrorlamaslik uchun
      breadcrumbs.push({ name, path: to });
    }
  });

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1A1A1A",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        color: "#FFF",
        zIndex: 10,
        borderBottom: "1px solid #333",
      }}
    >
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path}>
          <NavLink to={breadcrumb.path}>
            <Button
              style={{
                color: index === breadcrumbs.length - 1 ? "#D3176D" : "#FFF", // Oxirgi elementni ajratib ko‘rsatamiz
                textTransform: "none",
                fontFamily: "Clash Display, sans-serif",
                fontSize: "1rem",
                padding: "0",
              }}
            >
              {breadcrumb.name}
              {index === breadcrumbs.length - 1 && <StyledDot />}
            </Button>
          </NavLink>
          {index < breadcrumbs.length - 1 && (
            <span style={{ color: "#B4B4B4" }}> &gt; </span>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Breadcrumbs;
