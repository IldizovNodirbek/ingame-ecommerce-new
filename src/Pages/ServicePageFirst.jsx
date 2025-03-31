import { useState } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import ServiceMainImage1 from "../Images/services-main-img.png";
import LeftOverlayImage from "../Images/services-background-img.png";
import RightOverlayImage from "../Images/services-background-img.png";
import ServicesInfoImg1 from "../Images/services-info-img-1.jpg";
import ServicesInfoImg2 from "../Images/services-info-img-2.jpg";
import ServicesInfoImg3 from "../Images/services-info-img-3.jpg";
import ServicesInfoImg4 from "../Images/services-info-img-4.jpg";
import { Zap, Triangle, Crown, Bolt, ArrowRight } from "lucide-react";
import { Card, CardContent, IconButton } from "@mui/material";
import { motion } from "framer-motion";

function ServicePageFirst() {
  const StyledBackground = styled("div")(({ theme }) => ({
    marginTop: "108px",
    backgroundColor: "#1A1A1A",
    fontFamily: "Clash Display",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  }));

  const StyledContentContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(6),
    position: "relative",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const StyledTextContainer = styled("div")(({ theme }) => ({
    marginLeft: theme.spacing(12),
    maxWidth: "500px",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      maxWidth: "100%",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.between("sm", "md")]: {
      padding: theme.spacing(2), // iPad uchun qo‘shimcha bo‘sh joy
    },
  }));

  const StyledImageContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    maxWidth: "777px",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      maxWidth: "500px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      maxWidth: "450px", // iPad uchun optimal kenglik
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
    },
  }));

  const BackgroundImage = styled("div")(({ theme }) => ({
    position: "absolute",
    width: "100%",
    maxWidth: "777px",
    height: "auto",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    [theme.breakpoints.down("md")]: {
      maxWidth: "500px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      maxWidth: "450px", // iPad uchun
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
    },
  }));

  const MainImage = styled("img")(({ theme }) => ({
    position: "relative",
    width: "100%",
    maxWidth: "626px",
    height: "auto",
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      maxWidth: "360px", // iPad uchun
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "250px",
    },
  }));

  const cardsData = [
    { icon: <Zap size={40} />, text: "Проблемы с мощностью ?" },
    { icon: <Triangle size={40} />, text: "Неполадки в работе системы?" },
    { icon: <Crown size={40} />, text: "Не устраивает внешний вид?" },
    { icon: <Bolt size={40} />, text: "Долго добираться до офиса?" },
  ];

  const serviceCards = [
    {
      image: ServicesInfoImg1,
      title: "Увеличить мощность",
      text: "Подберем наиболее оптимальные комплектующие под задачи вашего ПК...",
    },
    {
      image: ServicesInfoImg2,
      title: "Провести ТО",
      text: "«Здоровый» компьютер – залог успеха в играх, работе и творчестве...",
    },
    {
      image: ServicesInfoImg4,
      title: "Устранить проблемы",
      text: "Опытные сотрудники проведут полную диагностику ПК и устранят проблему...",
    },
    {
      image: ServicesInfoImg3,
      title: "Улучшить дизайн",
      text: "Реализуем все ваши самые интересные задумки по дизайну ПК...",
    },
  ];

  const [flipped, setFlipped] = useState(Array(4).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlip = [...prev];
      newFlip[index] = !newFlip[index];
      return newFlip;
    });
  };

  return (
    <StyledBackground>
      <StyledContentContainer>
        <StyledTextContainer>
          <Typography
            variant="h2"
            component="h1"
            color="white"
            marginBottom="30px"
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3.75rem" } }}
          >
            Название услуги
          </Typography>
          <Typography
            variant="body2"
            color="#B2B2B2"
            textAlign="start"
            marginBottom="30px"
            sx={{ fontSize: { xs: "12px", sm: "14px", md: "15px" } }}
          >
            съешь же ещё этих мягких французских булок, да выпей чаю...
          </Typography>
          <Typography
            variant="body2"
            color="#B2B2B2"
            textAlign="start"
            marginBottom="30px"
            sx={{ fontSize: { xs: "12px", sm: "14px", md: "15px" } }}
          >
            съешь же ещё этих мягких французских булок, да выпей чаю...
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1A1A1A",
              border: "3px solid #D3176D",
              color: "white",
              marginTop: "30px",
              padding: { xs: "8px 16px", sm: "10px 20px" },
            }}
          >
            Заказать апгрейд
          </Button>
        </StyledTextContainer>

        <StyledImageContainer>
          <BackgroundImage
            style={{
              backgroundImage: `url(${LeftOverlayImage})`,
              left: "-50px",
              zIndex: 1,
            }}
          />
          <MainImage src={ServiceMainImage1} alt="Service Main" />
          <BackgroundImage
            style={{
              backgroundImage: `url(${RightOverlayImage})`,
              right: "-50px",
              zIndex: 1,
            }}
          />
        </StyledImageContainer>
      </StyledContentContainer>

      <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            animate={{ rotateY: flipped[index] ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ perspective: "1000px" }}
          >
            <Card
              sx={{
                width: { xs: 160, sm: 180, md: 200 }, // iPad uchun o‘rta o‘lcham
                height: 231,
                backgroundColor: "#1A1A1A",
                borderRadius: "12px",
                border: "3px solid #D3176D",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  transform: flipped[index] ? "rotateY(180deg)" : "none",
                }}
              >
                {flipped[index] ? (
                  <Typography variant="body2" color="white">
                    Описание услуги...
                  </Typography>
                ) : (
                  <>
                    {card.icon}
                    <Typography
                      variant="body1"
                      fontFamily="Clash Display"
                      marginTop={1}
                      sx={{ fontSize: { xs: "14px", sm: "15px", md: "16px" } }}
                    >
                      {card.text}
                    </Typography>
                  </>
                )}
              </CardContent>
              <IconButton
                onClick={() => handleFlip(index)}
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  backgroundColor: "#D3176D",
                  color: "white",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                }}
              >
                <ArrowRight />
              </IconButton>
            </Card>
          </motion.div>
        ))}
      </Box>

      <Typography
        variant="h4"
        color="white"
        marginTop={6}
        sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.125rem" } }}
      >
        Что мы можем лучше остальных?
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(2, 1fr)", // iPad uchun 2 ustun
          md: "repeat(2, 1fr)",
        }}
        gap={3}
        marginTop={5}
      >
        {serviceCards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "400px", md: "500px" }, // iPad uchun o‘rta kenglik
                height: "220px",
                backgroundColor: "#000",
                color: "white",
                display: "flex",
                alignItems: "center",
                padding: "16px",
              }}
            >
              <Box
                component="img"
                src={card.image}
                alt="Service Icon"
                width={{ xs: 100, sm: 120, md: 136 }} // iPad uchun o‘rta o‘lcham
                height={160}
                marginRight={2}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  marginBottom={1}
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.4rem", md: "1.5rem" },
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="start"
                  sx={{ fontSize: { xs: "12px", sm: "13px", md: "14px" } }}
                >
                  {card.text}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </StyledBackground>
  );
}

export default ServicePageFirst;
