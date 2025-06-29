// src/components/Influences.tsx
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface InfluenceTrans {
  title: string;
  url: string;
}

const Influences: FC = () => {
  const { t } = useTranslation("influences");
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  // pull section copy
  const sectionTitle       = t("sectionTitle");
  const sectionDescription = t("sectionDescription");
  // pull the array of items
  const items = t("items", { returnObjects: true }) as InfluenceTrans[];

  // split into two columns
  const half       = Math.ceil(items.length / 2);
  const firstHalf  = items.slice(0, half);
  const secondHalf = items.slice(half);

  return (
    <Box
      component="section"
      sx={{
        mb: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Title */}
      <Typography
        id="influences"
        variant="h1"
        component="h1"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "2rem", md: "3rem" },
          lineHeight: 1.1,
          mb: 1,
          background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {sectionTitle}
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{ mb: 4, maxWidth: 800, lineHeight: 1.7, textAlign: "center" }}
      >
        {sectionDescription}
      </Typography>

      {/* Two-column list */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: 1000,
          gap: 4,
          flexDirection: isMd ? "row" : "column",
        }}
      >
        {[firstHalf, secondHalf].map((column, colIdx) => (
          <List key={colIdx} disablePadding sx={{ flex: 1, minWidth: 0 }}>
            {column.map((item, idx) => (
              <ListItem key={idx} disablePadding sx={{ mb: 1.5 }}>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    textDecoration: "none",
                    color: "text.primary",
                    p: 1.5,
                    borderRadius: 2,
                    width: "100%",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: alpha(
                        theme.palette.primary.main,
                        0.08
                      ),
                      transform: "translateX(4px)",
                      boxShadow: 1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "50%",
                      mt: 1.2,
                      mr: 2,
                      flexShrink: 0,
                    }}
                  />

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 500, lineHeight: 1.4 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        color: "text.secondary",
                        mt: 0.5,
                        fontFamily: "monospace",
                      }}
                    >
                      {new URL(item.url)
                        .hostname.replace("www.", "")}
                    </Typography>
                  </Box>

                  <OpenInNewIcon
                    sx={{
                      fontSize: 18,
                      ml: "auto",
                      color: "text.secondary",
                      alignSelf: "center",
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        ))}
      </Box>
    </Box>
  );
};

export default Influences;
