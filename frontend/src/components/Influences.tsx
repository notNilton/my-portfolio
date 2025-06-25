// src/components/Influences.tsx
import React, { FC } from "react";
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
import { Influence, influences } from "../data/influences-data";

interface InfluencesProps {
  items?: Influence[];
}

const Influences: FC<InfluencesProps> = ({ items = influences }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  // split into two halves
  const half = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, half);
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
      <Typography
        variant="h4"
        component="h2"
        id="influences"
        sx={{
          mb: 4,
          fontWeight: 700,
          background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        My Intellectual Influences
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, maxWidth: 800, lineHeight: 1.7, textAlign: "center" }}
      >
        These works have profoundly shaped my thinking across technology,
        philosophy, and economics.
      </Typography>

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
          <List
            key={colIdx}
            disablePadding
            sx={{ flex: 1, minWidth: 0 }} // minWidth=0 for proper flex shrinking
          >
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
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
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
                      {new URL(item.url).hostname.replace("www.", "")}
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
