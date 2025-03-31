import { Box, Button, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)({
  textAlign: "center",
  color: "#fff",
  marginTop: "50px",
});

const ButtonsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px",
});

const StyledButton = styled(Button)({
  width: "68px",
  height: "68px",
  minWidth: "68px",
  background: "#1A1A1A",
  border: "4px solid #D3176D",
  color: "#fff",
  fontSize: "40px",
  fontWeight: "bold",
  fontFamily: "Orbitron",
  borderRadius: "8px",
  "&:hover": {
    background: "#D3176D",
    color: "#1A1A1A",
  },
});

const StepWrapper = styled(Box)({
  textAlign: "center",
  maxWidth: "200px",
});

const steps = [
  {
    number: "1",
    text: "Отправьте заявку на сайте или обратитесь к нам. Мы всегда рады помочь!",
  },
  {
    number: "2",
    text: "Наш менеджер поможет вам оформить заказ и согласует с вами все детали",
  },
  {
    number: "3",
    text: "Привезите свой ПК лично или закажите отправку курьером",
  },
  {
    number: "4",
    text: "Специалисты нашего сервисного центра в течение 24 часов проведут техническое обслуживание",
  },
  {
    number: "5",
    text: "Наш логист свяжется с вами для уточнения удобных даты и времени доставки компьютера",
  },
];

const ServiceButtons = () => {
  return (
    <Container>
      <Typography variant="h4">Этапы оформления ТО</Typography>
      <Divider
        sx={{
          backgroundColor: "#D3176D",
          height: "2px",
          width: "150px",
          margin: "20px auto",
        }}
      />

      <ButtonsWrapper>
        {steps.map((step, index) => (
          <StepWrapper key={index}>
            <StyledButton>{step.number}</StyledButton>
            <Typography variant="body2" sx={{ marginTop: "20px" }}>
              {step.text}
            </Typography>
          </StepWrapper>
        ))}
      </ButtonsWrapper>
    </Container>
  );
};

export default ServiceButtons;
