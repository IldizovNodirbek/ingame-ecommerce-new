import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "#131212",
        color: "#777676",
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 12 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        gap: { xs: 3, md: 4 },
      }}
    >
      {/* Left Section: Контакты */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "white",
            mb: 2,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          {t("contactsTitle")}
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemIcon>
              <PhoneIcon
                sx={{ color: "#777676", fontSize: { xs: 20, md: 24 } }}
              />
            </ListItemIcon>
            <ListItemText
              primary={t("contacts.phone")}
              sx={{
                color: "#777676",
                "& .MuiTypography-root": {
                  fontSize: { xs: "14px", md: "16px" },
                },
              }}
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <AccessTimeIcon
                sx={{ color: "#777676", fontSize: { xs: 20, md: 24 } }}
              />
            </ListItemIcon>
            <ListItemText
              primary={t("contacts.workingHours")}
              sx={{
                color: "#777676",
                "& .MuiTypography-root": {
                  fontSize: { xs: "14px", md: "16px" },
                },
              }}
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <LocationOnIcon
                sx={{ color: "#777676", fontSize: { xs: 20, md: 24 } }}
              />
            </ListItemIcon>
            <ListItemText
              primary={t("contacts.location")}
              sx={{
                color: "#777676",
                "& .MuiTypography-root": {
                  fontSize: { xs: "14px", md: "16px" },
                },
              }}
            />
          </ListItem>
        </List>
      </Box>

      {/* Right Section: Соц. сети */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "white",
            mb: 2,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          {t("socialMediaTitle")}
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemIcon>
              <InstagramIcon
                sx={{ color: "#777676", fontSize: { xs: 20, md: 24 } }}
              />
            </ListItemIcon>
            <ListItemText
              primary={t("socialMedia.instagram")}
              sx={{
                color: "#777676",
                "& .MuiTypography-root": {
                  fontSize: { xs: "14px", md: "16px" },
                },
              }}
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <TelegramIcon
                sx={{ color: "#777676", fontSize: { xs: 20, md: 24 } }}
              />
            </ListItemIcon>
            <ListItemText
              primary={t("socialMedia.telegram")}
              sx={{
                color: "#777676",
                "& .MuiTypography-root": {
                  fontSize: { xs: "14px", md: "16px" },
                },
              }}
            />
          </ListItem>
        </List>
      </Box>

      {/* Location Section - Yandex Maps iframe */}
      <Box
        sx={{
          flex: 1,
          width: { xs: "100%", md: "auto" },
          maxWidth: { md: "507px" },
          height: "auto",
          minHeight: { xs: "150px", md: "190px" },
          backgroundColor: "#0F0F0F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: 2,
          color: "#777676",
          fontSize: { xs: "14px", md: "16px" },
          mt: { xs: 3, md: 0 },
          p: 2,
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://yandex.com/map-widget/v1/?ll=69.271787%2C41.339578&z=17&mode=placemark&oid=216647171785"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ingame Store Location"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Footer;
