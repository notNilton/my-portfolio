// src/pages/Home.tsx
import React, { FC } from "react";
import { Box, Divider, CssBaseline } from "@mui/material";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Influences from "../components/Influences";

import Footer from "../components/Footer";

import { projectData } from "../data/projects-data";

const Home: FC = () => (
  <Box>
    <Profile />
    <Divider sx={{ my: 4 }} />
    <Projects />
    <Divider sx={{ my: 4 }} />
    <Influences />
    <Divider sx={{ my: 4 }} />
    <Footer />
  </Box>
);

export default Home;
