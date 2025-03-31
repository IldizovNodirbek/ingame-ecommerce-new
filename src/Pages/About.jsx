import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import styled from "styled-components";
import AboutHeader from "../Images/about-header-img.jpg";

const Container = styled(Box)`
  background-color: #1a1a1a;
  color: white;
  padding: 60px 5%;
  min-height: 100vh;
`;

const Section = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled(Typography)`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: bold;
  margin-bottom: 20px;
`;

const Paragraph = styled(Typography)`
  font-size: clamp(16px, 2.5vw, 18px);
  line-height: 1.6;
  margin: 15px 0;
`;

const CenterImage = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 40px 0;
  border-radius: 8px;
  object-fit: cover;
`;

const DividerStyled = styled(Divider)`
  width: 50%;
  max-width: 300px;
  background-color: #d3176d;
  margin: 30px auto;
`;

const SmallImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 50%;
  margin: 20px 20px 20px 0;
  object-fit: cover;

  @media (max-width: 768px) {
    margin: 20px auto;
    display: block;
  }
`;

const QuoteBox = styled(Box)`
  border: 2px solid #d3176d;
  padding: 25px;
  position: relative;
  max-width: 900px;
  margin: 40px auto;
  border-radius: 8px;
`;

const QuoteIcon = styled.span`
  font-size: 40px;
  color: #d3176d;
  position: absolute;
  top: -20px;
  right: 20px;
`;

const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const AboutPage = () => {
  return (
    <Container>
      <Section>
        <Title>О компании</Title>
        <Paragraph>
          Компания INGAME была основана в 2017 году. Мы — официальный партнер
          таких известных технологических гигантов, как NVIDIA, ASUS ROG,
          Cougar, Huntkey. Главный офис INGAME и производственный центр
          расположены в Ташкенте. Шоурум с компьютерами и периферией находится
          также в Ташкенте. Мы осуществляем доставку компьютеров по всему
          Узбекистану и миру. Наша компания работает как с частными, так и с
          юридическими лицами.
        </Paragraph>
      </Section>

      <CenterImage src={AboutHeader} alt="Компания INGAME" />

      <Section>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontSize: "clamp(24px, 4vw, 36px)", mb: 2 }}
        >
          Про нас
        </Typography>
        <DividerStyled />
        <FlexBox>
          <SmallImage src="/path/to/owner-image.jpg" alt="Шахзод Шодиев" />
          <Box flex="1" minWidth="300px">
            <Paragraph>
              Здравствуйте, я – Шахзод Шодиев, основатель компании inGame. Я
              прошел все этапы работы: сам продавал, собирал и доставлял
              компьютеры клиентам. Как никто другой знаю, как это делать
              правильно. За 7 лет работы мы построили компанию одним из лучших
              производителей компьютеров премиум-класса в Узбекистане. За это
              время мы собрали мощную команду единомышленников, с которыми
              дружим и работаем с самого основания компании.
            </Paragraph>
          </Box>
        </FlexBox>
      </Section>

      <QuoteBox>
        <QuoteIcon>“</QuoteIcon>
        <Typography variant="h5" sx={{ fontSize: "clamp(20px, 3vw, 26px)" }}>
          Наша миссия
        </Typography>
        <Paragraph>
          Создавать лучшие компьютеры, которые будут дарить геймерам и
          творческим профессионалам удовольствие от использования. inGame — это
          восхитительный дизайн, высокая производительность, безупречное
          качество и персональный сервис.
        </Paragraph>
      </QuoteBox>

      <Section>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontSize: "clamp(24px, 4vw, 36px)", mb: 2 }}
        >
          Почему стоит выбрать нас?
        </Typography>
        <DividerStyled />
        <Paragraph>
          Мы сотрудничаем с мировыми лидерами технологий, такими как NVIDIA,
          Intel, Microsoft, и реализовали успешные проекты с игровыми
          компаниями: Wargaming, Ubisoft, Electronic Arts, Bethesda и
          Mail.Games.
        </Paragraph>
        <Paragraph>
          Наши офисы и шоурумы расположены в Ташкенте, а доставка доступна по
          всему Узбекистану и миру. Мы работаем как с частными клиентами, так и
          с юридическими лицами, предлагая индивидуальный подход каждому.
        </Paragraph>
      </Section>

      <Section>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontSize: "clamp(24px, 4vw, 36px)", mb: 2 }}
        >
          Гарантии
        </Typography>
        <DividerStyled />
        <Paragraph>
          Мы предоставляем полную гарантию на все наши продукты и услуги,
          обеспечивая высочайшее качество сборки и надежность. Наша цель — ваше
          удовлетворение и уверенность в каждом приобретении.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default AboutPage;
