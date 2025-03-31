import { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
  Checkbox,
  Button,
  Divider,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BuildIcon from "@mui/icons-material/Build";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import GridViewIcon from "@mui/icons-material/GridView";
import EditIcon from "@mui/icons-material/Edit";

const services = [
  {
    category: "Стандартное охлаждение",
    items: [
      {
        title: "HYPERPC SERVICE STANDARD PLUS",
        description: "Расширенный и наиболее оптимальный пакет обслуживания",
        features: [
          { icon: <SearchIcon />, text: "Комплексная диагностика" },
          { icon: <BuildIcon />, text: "Чистка системы охлаждения" },
        ],
        price: "от 2 000 000 сум",
        duration: "до 7 дней",
      },
      {
        title: "HYPERPC SERVICE STANDARD PREMIUM",
        description: "Полный набор услуг для решения комплексных проблем",
        features: [
          { icon: <BatteryChargingFullIcon />, text: "Замена термоинтерфейса" },
          { icon: <ShoppingCartIcon />, text: "Комплексная диагностика" },
        ],
        price: "от 2 500 000 сум",
        duration: "до 10 дней",
      },
    ],
  },
  {
    category: "Кастомное охлаждение",
    items: [
      {
        title: "HYPERPC SERVICE CUSTOM PLUS",
        description: "Расширенный и наиболее оптимальный пакет обслуживания",
        features: [
          { icon: <SearchIcon />, text: "Комплексная диагностика" },
          { icon: <BuildIcon />, text: "Замена охлаждающей жидкости" },
        ],
        price: "от 3 000 000 сум",
        duration: "до 10 дней",
      },
      {
        title: "HYPERPC SERVICE CUSTOM PREMIUM",
        description: "Полный набор услуг для решения комплексных проблем",
        features: [
          { icon: <GridViewIcon />, text: "Замена термопрокладок" },
          { icon: <EditIcon />, text: "Отчет об обслуживании" },
        ],
        price: "от 3 500 000 сум",
        duration: "до 12 дней",
      },
    ],
  },
  {
    category: "Дополнительные услуги",
    items: [
      {
        title: "HYPERPC SERVICE ADDITIONAL PLUS",
        description: "Расширенный и наиболее оптимальный пакет обслуживания",
        features: [
          { icon: <SearchIcon />, text: "Комплексная диагностика" },
          { icon: <BuildIcon />, text: "Чистка системы охлаждения" },
        ],
        price: "от 2 000 000 сум",
        duration: "до 7 дней",
      },
      {
        title: "HYPERPC SERVICE ADDITIONAL PREMIUM",
        description: "Полный набор услуг для решения комплексных проблем",
        features: [
          { icon: <BatteryChargingFullIcon />, text: "Замена термоинтерфейса" },
          { icon: <ShoppingCartIcon />, text: "Комплексная диагностика" },
        ],
        price: "от 2 500 000 сум",
        duration: "до 10 дней",
      },
    ],
  },
];

const CardsWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginTop: "40px",
  flexWrap: "wrap",
});

export default function ServiceCard() {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(
    services.map((category) => category.items.map(() => false))
  );

  const handleCheckboxChange = (categoryIndex, itemIndex) => {
    const newCheckboxes = [...selectedCheckboxes];
    newCheckboxes[categoryIndex][itemIndex] =
      !newCheckboxes[categoryIndex][itemIndex];
    setSelectedCheckboxes(newCheckboxes);
  };

  return (
    <Box sx={{ width: "100%", p: 3, bgcolor: "#0F0F0F", color: "white" }}>
      <Tabs
        value={tabIndex}
        onChange={(e, newValue) => setTabIndex(newValue)}
        centered
        textColor="inherit"
        indicatorColor="secondary"
      >
        {services.map((service, index) => (
          <Tab key={index} label={service.category} />
        ))}
      </Tabs>
      <CardsWrapper>
        {services[tabIndex].items.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: 375,
              height: 611,
              bgcolor: "#1E1E1E",
              color: "white",
              p: 2,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontFamily: "Orbitron", textAlign: "center" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center", mb: 2 }}>
                {item.description}
              </Typography>
              {item.features.map((feature, idx) => (
                <Box
                  key={idx}
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  {feature.icon}
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {feature.text}
                  </Typography>
                </Box>
              ))}
              <Divider sx={{ bgcolor: "#ff4081", my: 2 }} />
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Checkbox
                  sx={{ color: "white" }}
                  checked={selectedCheckboxes[tabIndex][index]}
                  onChange={() => handleCheckboxChange(tabIndex, index)}
                />
                <Typography variant="body2">
                  Заказать забор и возврат ПК
                </Typography>
              </Box>
              <Typography variant="body2">Стоимость: {item.price}</Typography>
              <Typography variant="body2">
                Срок работы: {item.duration}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  borderColor: "#ff4081",
                  color: "#ff4081",
                  width: "100%",
                }}
              >
                Заказать
              </Button>
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </Box>
  );
}
