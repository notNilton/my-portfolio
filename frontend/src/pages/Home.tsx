// src/pages/Home.tsx
import React, { FC } from "react";
import { Box, Divider, CssBaseline } from "@mui/material";
import { Profile } from "../components/Profile";
import { Projects } from "../components/Projects";
import Influences from "../components/Influences";

import Footer from "../components/Footer";

import { profileData } from "../data/profile-data";
import { myProjectsData } from "../data/projects-data";

const Home: FC = () => (
  <Box>
    <Profile profile={profileData} />
    <Divider sx={{ my: 4 }} />
    <Projects projects={myProjectsData} />
    <Divider sx={{ my: 4 }} />
    <Influences />
    <Divider sx={{ my: 4 }} />
    <Footer />
  </Box>
);

export default Home;
