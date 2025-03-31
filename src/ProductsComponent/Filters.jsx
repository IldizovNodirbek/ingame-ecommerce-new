import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from "@mui/material";
import styled from "styled-components";

const Filters = () => {
  const FilterContainer = styled(Box)`
    width: 20%;
    flex-shrink: 0;
    padding: 20px;
    color: white;
    height: fit-content;
  `;
  return (
    <FilterContainer>
      <Typography variant="h6">Цена</Typography>
      <input
        type="text"
        style={{
          width: "100%",
          background: "black",
          border: "1px solid white",
          color: "white",
          padding: "5px",
          boxSizing: "border-box",
        }}
      />
      <Divider sx={{ my: 2, background: "gray" }} />
      <Typography variant="h6">Бренды</Typography>
      {[
        "GIGABYTE Aorus",
        "ALIENWARE AURORA",
        "Lenovo Legion T7",
        "Acer Predator Orion",
        "ARENA 9604",
        "GAMER PRO RYZEN",
      ].map((brand) => (
        <FormControlLabel
          control={<Checkbox sx={{ color: "white" }} />}
          label={brand}
          sx={{ color: "white", display: "block" }}
          key={brand}
        />
      ))}
      <Divider sx={{ my: 2, background: "gray" }} />
      <Typography variant="h6">Мониторы</Typography>
      {["32", "27", "24"].map((size) => (
        <FormControlLabel
          control={<Checkbox sx={{ color: "white" }} />}
          label={size}
          sx={{ color: "white", display: "block" }}
          key={size}
        />
      ))}
      <Divider sx={{ my: 2, background: "gray" }} />
      <Typography variant="h6">Мышка</Typography>
      {["Игровая", "Офисная"].map((type) => (
        <FormControlLabel
          control={<Checkbox sx={{ color: "white" }} />}
          label={type}
          sx={{ color: "white", display: "block" }}
          key={type}
        />
      ))}
      <Divider sx={{ my: 2, background: "gray" }} />
      <Button
        variant="outlined"
        sx={{
          width: "100%",
          border: "3px solid #D3176D",
          color: "white",
          marginTop: "10px",
        }}
      >
        Применить
      </Button>
      <Typography
        sx={{
          textAlign: "center",
          color: "gray",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Сбросить фильтр
      </Typography>
    </FilterContainer>
  );
};

export default Filters;
