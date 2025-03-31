import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";
import reviews from "../Data/reviews";

const CustomerReviewsCarousel = () => {
  const totalGroups = Math.ceil(reviews.length / 3); // Umumiy guruhlar soni (har 3 ta slide uchun 1 dot)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3, // Har safar 3 ta o‘tadi
    customPaging: (i) => (
      <Box
        sx={{
          width: { xs: 10, md: 12 },
          height: { xs: 10, md: 12 },
          bgcolor: "grey.500", // Default kulrang
          borderRadius: "2px",
          display: i < 3 ? "inline-block" : "none", // Faqat 3 ta dot ko‘rinadi
          mx: { xs: 0.5, md: 1 },
          cursor: "pointer",
          "&.slick-active": { bgcolor: "#D3176D" }, // Active bo‘lsa pushti
        }}
      />
    ),
    appendDots: (dots) => (
      <Box sx={{ mt: { xs: 2, md: 3 } }}>
        <ul style={{ margin: 0, padding: 0 }}>
          {dots.slice(0, Math.min(3, totalGroups))}
        </ul>
      </Box>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 0,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        bgcolor: "#1A1A1A",
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 1, sm: 2, md: 4 },
        width: "100%",
        textAlign: "center",
      }}
    >
      {/* Sarlavha */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Clash Display, sans-serif",
          color: "white",
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        Отзывы наших клиентов
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Clash Display, sans-serif",
          color: "grey.400",
          mb: 3,
          fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
        }}
      >
        Об этом лучше всего расскажут сами наши клиенты!
      </Typography>
      <Box
        sx={{
          width: { xs: "40px", md: "60px" },
          height: "3px",
          bgcolor: "#D3176D",
          mx: "auto",
          mb: { xs: 3, md: 5 },
        }}
      />

      {/* Carousel */}
      <Box
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: "1400px" },
          mx: "auto",
          px: { xs: 1, md: 0 },
        }}
      >
        <Slider {...settings}>
          {reviews.map((review) => (
            <Box key={review.id} sx={{ px: { xs: 1, sm: 2, md: 2.5 } }}>
              <Card
                sx={{
                  width: { xs: "100%", sm: 360, md: 420 },
                  height: { xs: "auto", md: 180 },
                  bgcolor: "#050505",
                  border: { xs: "2px solid white", md: "4px solid white" },
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  p: { xs: 1.5, md: 2 },
                  flexDirection: { xs: "column", sm: "row" },
                  mx: "auto",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Mijoz rasmi */}
                <Box
                  sx={{
                    width: { xs: 60, md: 80 },
                    height: { xs: 60, md: 80 },
                    border: "3px solid #D3176D",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: { xs: 0, sm: 2 },
                    mb: { xs: 2, sm: 0 },
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={review.image}
                    alt={review.name}
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: { xs: 40, md: 50 },
                      borderRadius: "4px",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Matnlar */}
                <CardContent
                  sx={{
                    textAlign: "left",
                    p: { xs: 1, md: 1.5 },
                    flexGrow: 1,
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Clash Display, sans-serif",
                      color: "white",
                      fontSize: { xs: "1rem", md: "1.125rem" },
                      mb: 0.5,
                    }}
                  >
                    {review.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Clash Display, sans-serif",
                      color: "grey.300",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      lineHeight: 1.6,
                      mb: 1,
                      textAlign: "left",
                    }}
                  >
                    {review.comment}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <StarIcon
                        key={i}
                        sx={{
                          color: i < review.rating ? "#D3176D" : "grey.500",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default CustomerReviewsCarousel;
