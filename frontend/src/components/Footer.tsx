// src/components/Footer.tsx
import React, { FC } from "react";
import { Box, Typography, Link, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import pkg from "../../package.json";

const currentYear = new Date().getFullYear();
const { version } = pkg;

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 2,
        py: 2,
        px: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {currentYear} Nilton Aguiar dos Santos — version: {version}
      </Typography>
    </Box>
  );
};

export default Footer;
