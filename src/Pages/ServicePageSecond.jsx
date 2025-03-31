import { Box, Typography, styled } from "@mui/material";
import {
  Security,
  Speed,
  MonetizationOn,
  AccessTime,
  Star,
  CheckCircle,
} from "@mui/icons-material";
import ServiceBackgroundImage2 from "../Images/services-background-img-2.png";
import ServicesMainImage2 from "../Images/services-main-img-2.png";
import LaptopImage from "../Images/service-laptop-img.png";
import ServicesLaptopImage from "../Images/services-laptop-img-2.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FolderIcon from "@mui/icons-material/Folder";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import WarningIcon from "@mui/icons-material/Warning";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ServiceRemote1 from "../Images/services-remote-1.jpg";
import ServiceRemote2 from "../Images/services-remote-2.jpg";
import ServiceRemote3 from "../Images/services-remote-3.jpg";
import ServiceRemote4 from "../Images/services-remote-4.jpg";
import ServiceRemote5 from "../Images/service-main-remote-5.jpg";
import ServiceCards from "../Components/ServiceCards";
import ServiceButtons from "../Components/ServiceButtons";

function ServicePageSecond() {
  const StyledBackground = styled("div")(({ theme }) => ({
    marginTop: "108px",
    backgroundColor: "#0F0F0F",
    fontFamily: "Clash Display",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(5),
    color: "white",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  }));

  const StyledContentContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const StyledTextContainer = styled("div")(({ theme }) => ({
    maxWidth: "500px",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const StyledImageContainer = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    maxWidth: "740px",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      maxWidth: "500px",
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
    left: "-50px",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      maxWidth: "500px",
      left: "-30px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      left: "-20px",
    },
  }));

  const MainImage = styled("img")(({ theme }) => ({
    position: "relative",
    width: "100%",
    maxWidth: "631px",
    height: "auto",
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "250px",
    },
  }));

  const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  }));

  const SectionText = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    textAlign: "center",
    maxWidth: "800px",
    color: "#B2B2B2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "15%",
    height: "3px",
    backgroundColor: "#D3176D",
    margin: theme.spacing(2, "auto"),
    [theme.breakpoints.down("sm")]: {
      width: "30%",
    },
  }));

  const StyledFeatureContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1000px",
    marginTop: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const StyledLaptopImage = styled("img")(({ theme }) => ({
    width: "100%",
    maxWidth: "480px",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "350px",
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "250px",
    },
  }));

  const FeatureGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gap: theme.spacing(2),
    marginBottom: theme.spacing(16),
  }));

  const FeatureItem = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });

  const IconWrapper = styled("div")({
    color: "#D3176D",
  });

  const FeatureText = styled(Typography)(({ theme }) => ({
    color: "#FFFFFF",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  }));

  const CardContainer = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: {
      xs: "fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(4, 1fr)",
    },
    gap: theme.spacing(2),
    marginTop: theme.spacing(6),
    justifyContent: "center",
    width: "100%",
    maxWidth: "1100px",
  }));

  const Card = styled("div")(({ theme }) => ({
    backgroundColor: "#000000",
    padding: theme.spacing(2),
    borderRadius: "8px",
    textAlign: "center",
    width: "100%",
    maxWidth: "255px",
    height: "244px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  }));

  const CardImage = styled("img")({
    width: "100%",
    maxWidth: "215px",
    height: "160px",
    borderRadius: "5px",
    objectFit: "cover",
  });

  const CardText = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(3),
    fontSize: "17px",
    color: "#FFFFFF",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  }));

  const Section = styled("div")(({ theme }) => ({
    textAlign: "center",
    marginTop: theme.spacing(6),
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "32px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  }));

  const Paragraph = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    color: "#ccc",
    maxWidth: "800px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  }));

  const ContentWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const IconsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  }));

  const IconTextWrapper = styled("div")(({ theme }) => ({
    fontFamily: "Clash Display",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    color: "#fff",
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  }));

  const MainImageBetween = styled("img")(({ theme }) => ({
    width: "100%",
    maxWidth: "448px",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "250px",
    },
  }));

  const StyledBox = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    background: "#1A1A1A",
    marginTop: theme.spacing(5),
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(5, 0),
  }));

  const BoxWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(6),
    alignItems: "center",
    padding: theme.spacing(0, 12),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: theme.spacing(0, 2),
    },
  }));

  const Image = styled("img")(({ theme }) => ({
    width: "100%",
    maxWidth: "592px",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
    },
  }));

  const TextContent = styled("div")(({ theme }) => ({
    color: "#fff",
    maxWidth: "600px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  const StatsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(6),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(3),
    },
  }));

  const StatItem = styled("div")({
    textAlign: "center",
  });

  return (
    <StyledBackground>
      <StyledContentContainer>
        <StyledTextContainer>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" } }}
          >
            Название услуги
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#B2B2B2",
              marginTop: "20px",
              fontSize: { xs: "12px", sm: "14px", md: "15px" },
            }}
          >
            съешь же ещё этих мягких французских булок, да выпей чаю...
          </Typography>
        </StyledTextContainer>
        <StyledImageContainer>
          <BackgroundImage
            style={{ backgroundImage: `url(${ServiceBackgroundImage2})` }}
          />
          <MainImage src={ServicesMainImage2} alt="Main Service Image 2" />
        </StyledImageContainer>
      </StyledContentContainer>

      <SectionTitle>Забота о вашем компьютере</SectionTitle>
      <SectionText>
        Компьютер, так же, как и любая другая машина, нуждается в регулярном...
      </SectionText>
      <Divider />

      <StyledFeatureContainer>
        <StyledLaptopImage src={LaptopImage} alt="Laptop" />
        <FeatureGrid>
          <FeatureItem>
            <IconWrapper>
              <AccessTimeIcon sx={{ fontSize: { xs: 40, md: 50 } }} />
            </IconWrapper>
            <FeatureText>Сокращение срока службы ПК</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <FolderIcon sx={{ fontSize: { xs: 40, md: 50 } }} />
            </IconWrapper>
            <FeatureText>
              Потеря ценных данных из-за вирусных программ
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <TrendingDownIcon sx={{ fontSize: { xs: 40, md: 50 } }} />
            </IconWrapper>
            <FeatureText>Снижение работоспособности компьютера</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <WarningIcon sx={{ fontSize: { xs: 40, md: 50 } }} />
            </IconWrapper>
            <FeatureText>Короткое замыкание</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <MonetizationOnIcon sx={{ fontSize: { xs: 40, md: 50 } }} />
            </IconWrapper>
            <FeatureText>Дорогостоящий ремонт</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <ThermostatIcon sx={{ fontSize: { xs: 40, md: 50 } }} />
            </IconWrapper>
            <FeatureText>Перегрев и поломка комплектующих</FeatureText>
          </FeatureItem>
        </FeatureGrid>
      </StyledFeatureContainer>

      <Typography
        variant="h4"
        sx={{ marginTop: 6, fontSize: { xs: "1.5rem", md: "2.125rem" } }}
      >
        Проблемы, возникающие при самостоятельном ремонте
      </Typography>
      <Divider />
      <CardContainer>
        <Card>
          <CardImage src={ServiceRemote1} alt="Card 1" />
          <CardText>Риск поражения током</CardText>
        </Card>
        <Card>
          <CardImage src={ServiceRemote2} alt="Card 2" />
          <CardText>Потеря важных данных</CardText>
        </Card>
        <Card>
          <CardImage src={ServiceRemote3} alt="Card 3" />
          <CardText>Потеря времени</CardText>
        </Card>
        <Card>
          <CardImage src={ServiceRemote4} alt="Card 4" />
          <CardText>Непредвиденные траты</CardText>
        </Card>
      </CardContainer>

      <Section>
        <Title>Почему важно регулярно проходить ТО</Title>
        <Paragraph>
          Профессиональное техническое обслуживание компьютеров в HYPERPC...
        </Paragraph>
        <Divider />
        <ContentWrapper>
          <IconsWrapper>
            <IconTextWrapper>
              <Security sx={{ fontSize: { xs: 40, md: 48 } }} />
              <span>Избавляет от вредоносных и неиспользуемых программ</span>
            </IconTextWrapper>
            <IconTextWrapper>
              <Speed sx={{ fontSize: { xs: 40, md: 48 } }} />
              <span>Повышает производительность компьютера (до 15%)</span>
            </IconTextWrapper>
            <IconTextWrapper>
              <MonetizationOn sx={{ fontSize: { xs: 40, md: 48 } }} />
              <span>Экономит ваши время, деньги и нервы</span>
            </IconTextWrapper>
          </IconsWrapper>
          <MainImageBetween src={ServicesLaptopImage} alt="Main Service" />
          <IconsWrapper>
            <IconTextWrapper>
              <AccessTime sx={{ fontSize: { xs: 40, md: 48 } }} />
              <span>Увеличивает срок службы компьютера</span>
            </IconTextWrapper>
            <IconTextWrapper>
              <Star sx={{ fontSize: { xs: 40, md: 48 } }} />
              <span>Поддерживает ПК в опрятном виде</span>
            </IconTextWrapper>
            <IconTextWrapper>
              <CheckCircle sx={{ fontSize: { xs: 40, md: 48 } }} />
              <span>Предупреждает поломку комплектующих</span>
            </IconTextWrapper>
          </IconsWrapper>
        </ContentWrapper>
      </Section>

      <Typography
        variant="h4"
        sx={{ marginTop: 6, fontSize: { xs: "1.5rem", md: "2.125rem" } }}
      >
        Пакеты обслуживания
      </Typography>
      <SectionText>
        Мы предоставляем своим клиентам оптимальные по цене и набору опций...
      </SectionText>
      <ServiceCards />

      <StyledBox>
        <BoxWrapper>
          <Image src={ServiceRemote5} />
          <TextContent>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "sans-serif",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "36px" },
              }}
            >
              О сервисе <span style={{ fontFamily: "Orbitron" }}>InGame</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "justify",
                marginTop: "10px",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              Мы занимаемся компьютерами более 13 лет и уже наизусть выучили
              их...
            </Typography>
            <StatsWrapper>
              <StatItem>
                <Typography
                  variant="h4"
                  fontFamily="Orbitron"
                  sx={{ fontSize: { xs: "1.5rem", md: "2.125rem" } }}
                >
                  2324
                </Typography>
                <Typography variant="body2">проведенных ТО</Typography>
              </StatItem>
              <StatItem>
                <Typography
                  variant="h4"
                  fontFamily="Orbitron"
                  sx={{ fontSize: { xs: "1.5rem", md: "2.125rem" } }}
                >
                  1 год
                </Typography>
                <Typography variant="body2">гарантия на работы</Typography>
              </StatItem>
              <StatItem>
                <Typography
                  variant="h4"
                  fontFamily="Orbitron"
                  sx={{ fontSize: { xs: "1.5rem", md: "2.125rem" } }}
                >
                  23
                </Typography>
                <Typography variant="body2">специалистов</Typography>
              </StatItem>
            </StatsWrapper>
          </TextContent>
        </BoxWrapper>
      </StyledBox>

      <ServiceButtons />
    </StyledBackground>
  );
}

export default ServicePageSecond;
