import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CategoryProducts from "../ProductsComponent/CategoryProducts";
import { Box } from "@mui/material";
import styled from "styled-components";

// Styled Container
const PageContainer = styled(Box)`
  width: 100%;
  min-height: calc(100vh - 160px); // Header (80px) + Footer (80px) uchun
  display: flex;
  flex-direction: row;
  justify-content: center; // Kontentni markazlashtirish
  padding: 0 20px; // Gorizontal padding
  margin: 80px auto; // Tepadan va pastdan 80px, gorizontal markazda
  box-sizing: border-box;
  max-width: 1400px; // Maksimal kenglik chegarasi

  @media (max-width: 768px) {
    flex-direction: column; // Mobil ekranlarda vertikal tartib
    padding: 0 10px;
    margin: 60px auto; // Kichik ekranlarda marginni qisqartirish
  }
`;

const ProductsPage = () => {
  const [filterPrice, setFilterPrice] = useState(null);
  const { category } = useParams(); // URL'dan category ni olish

  return (
    <PageContainer>
      {/* Filter paneli CategoryProducts ichida bor, shuning uchun bu joy bo‘sh qoladi */}
      <Box sx={{ flexGrow: 1 }}>
        <CategoryProducts category={category} filterPrice={filterPrice} />
      </Box>
    </PageContainer>
  );
};

export default ProductsPage;
