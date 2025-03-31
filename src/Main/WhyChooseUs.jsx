import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import Slider from "react-slick";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useTranslation } from "react-i18next";

// Statik ma'lumotlar (9 ta video karta)
const videoCards = [
  {
    quote: "Ushbu monitor mening o‘yin tajribamni oshirdi!",
    name: "Jamshid Xolmatov",
    profession: "gamer", // Kasbni kalit sifatida ishlatamiz
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    quote: "Dizayn loyihalarim uchun ajoyib monitor!",
    name: "Zarina Karimova",
    profession: "designer",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    quote: "Arxitektura chizmalarim uchun eng yaxshi tanlov.",
    name: "Rustam Abdullaev",
    profession: "architect",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    quote: "Noutbukning tezligi meni hayratda qoldirdi!",
    name: "Malika Sobirova",
    profession: "gamer",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    quote: "Ish uchun qulay va sifatli mahsulotlar.",
    name: "Nodira Usmonova",
    profession: "designer",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    quote: "Professional loyihalar uchun ideal.",
    name: "Sherzod Tursunov",
    profession: "architect",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    quote: "O‘yinlar uchun eng zo‘r noutbuk!",
    name: "Gulnora Mirzayeva",
    profession: "gamer",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    quote: "Ranglar va aniqlik ajoyib!",
    name: "Botir Qodirov",
    profession: "designer",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    quote: "Ish jarayonimni tezlashtirdi.",
    name: "Ali Rahimov",
    profession: "architect",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const WhyChooseUsCarousel = () => {
  const { t } = useTranslation(); // Tarjima uchun hook

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging: (i) => (
      <Box
        sx={{
          width: 12,
          height: 12,
          bgcolor: "grey.500",
          borderRadius: "2px",
          display: "inline-block",
          mx: 0.5,
          cursor: "pointer",
        }}
        className={
          i === Math.floor(settings.currentSlide / 3) ? "slick-active" : ""
        }
      />
    ),
    appendDots: (dots) => (
      <Box sx={{ mt: 3 }}>
        <ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
      </Box>
    ),
    beforeChange: (_, next) => {
      settings.currentSlide = next; // Aktiv slaydni yangilash
    },
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Box sx={{ bgcolor: "#1A1A1A", py: 6, textAlign: "center" }}>
      <Typography
        variant="h3"
        sx={{
          color: "#FFFFFF",
          fontFamily: "Clash Display, sans-serif",
          fontWeight: "bold",
          mb: 2,
          fontSize: "2.5rem",
        }}
      >
        {t("whyChooseUs")}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#CCCCCC",
          fontFamily: "Clash Display, sans-serif",
          mb: 3,
          fontSize: "1.25rem",
        }}
      >
        {t("clientFeedback")}
      </Typography>
      <Box
        sx={{
          width: "60px",
          height: "3px",
          bgcolor: "#FF4081",
          mx: "auto",
          mb: 5,
        }}
      />

      {/* Carousel */}
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Slider {...settings}>
          {videoCards.map((card, index) => (
            <Box key={index} sx={{ px: 2 }}>
              {/* Qo'shtirnoq matni video ustida */}
              <Box
                sx={{
                  bgcolor: "rgba(255, 64, 129, 0.9)",
                  color: "#FFFFFF",
                  p: "10px 15px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  fontFamily: "Clash Display, sans-serif",
                  fontSize: "1rem",
                  textAlign: "center",
                  mb: 2,
                  mx: "auto",
                  maxWidth: "300px",
                }}
              >
                <FormatQuoteIcon sx={{ fontSize: "1.2rem" }} />
                <Typography sx={{ fontSize: "1rem" }}>{card.quote}</Typography>
                <FormatQuoteIcon
                  sx={{ fontSize: "1.2rem", transform: "scaleX(-1)" }}
                />
              </Box>
              <VideoCard card={card} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

const VideoCard = ({ card }) => {
  const { t } = useTranslation(); // Tarjima uchun hook
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  const handleMouseEnter = () => {
    if (!isPlaying) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (!isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Videoni boshiga qaytaradi
    }
  };

  const handlePlayToggle = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Card
      sx={{
        position: "relative",
        width: 300,
        height: 534,
        borderRadius: "16px",
        overflow: "hidden",
        bgcolor: "#111111",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
        mx: "auto",
      }}
    >
      {/* Video */}
      <Box
        component="video"
        ref={videoRef}
        src={card.videoSrc}
        loop
        muted
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Play Button */}
      <Button
        onClick={handlePlayToggle}
        sx={{
          position: "absolute",
          top: "65%",
          right: 20,
          transform: "translateY(-50%)",
          bgcolor: "#FF4081",
          color: "#FFFFFF",
          width: 50,
          height: 50,
          borderRadius: "50%",
          minWidth: 0,
          zIndex: 3,
          "&:hover": { bgcolor: "#FF6091" },
        }}
      >
        {isPlaying ? (
          <PauseIcon sx={{ fontSize: "2rem" }} />
        ) : (
          <PlayArrowIcon sx={{ fontSize: "2rem" }} />
        )}
      </Button>

      {/* Pastki kontent */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          bgcolor: "rgba(0, 0, 0, 0.7)",
          p: 3,
          color: "#FFFFFF",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Clash Display, sans-serif",
            fontSize: "1.5rem",
            fontWeight: "bold",
            mb: 0.5,
          }}
        >
          {card.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Clash Display, sans-serif",
            fontSize: "1rem",
            color: "#CCCCCC",
            mb: 2,
          }}
        >
          {t(`professions.${card.profession}`)}{" "}
          {/* Kasbni dinamik tarjima qilish */}
        </Typography>
      </Box>
    </Card>
  );
};

export default WhyChooseUsCarousel;
