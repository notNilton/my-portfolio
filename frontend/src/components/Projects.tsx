// src/components/Projects.tsx
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Chip, Paper } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

// Import all your images directly
import radareImg from "../assets/projects/radare_1.png";
import aiicpImg1 from "../assets/projects/aiicp_1.png";
import aiicpImg2 from "../assets/projects/aiicp_2.png";
import aiicpImg3 from "../assets/projects/aiicp_3.png";
import lensegImg1 from "../assets/projects/lenseg_1.png";
import lensegImg2 from "../assets/projects/lenseg_2.png";

interface ProjectTrans {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

const Projects: FC = () => {
  const { t } = useTranslation("projects");
  const theme = useTheme();

  // Section header
  const sectionTitle       = t("sectionTitle");
  const sectionDescription = t("sectionDescription");

  // Pull the array of translated projects from i18n
  const items = t("items", { returnObjects: true }) as ProjectTrans[];

  // Map project IDs to their imported images
  const imagesMap: Record<number, string[]> = {
    1: [radareImg],
    2: [aiicpImg1, aiicpImg2, aiicpImg3],
    3: [lensegImg1, lensegImg2],
  };

  return (
    <Box
      component="section"
      sx={{
        mb: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 1000,
        mx: "auto",
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Section Title */}
      <Typography
        id="projects"
        variant="h1"
        component="h1"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "1.75rem", md: "2.5rem" },
          lineHeight: 1.1,
          mb: 2,
          background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {sectionTitle}
      </Typography>

      {/* Section Description */}
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          maxWidth: 800,
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        {sectionDescription}
      </Typography>

      {/* Projects Grid */}
      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 5,
        }}
      >
        {items.map((proj) => {
          const imgs     = imagesMap[proj.id] || [];
          const firstImg = imgs[0];

          return (
            <Paper
              key={proj.id}
              elevation={3}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  pt: "100%", // 1:1 aspect ratio
                }}
              >
                <Box
                  component="img"
                  src={firstImg}
                  alt={`${proj.title} screenshot`}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Project Info */}
              <Box
                sx={{
                  p: 2,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {proj.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    flex: 1,
                    mb: 2,
                    color: "text.secondary",
                    lineHeight: 1.5,
                    fontSize: "0.9rem",
                  }}
                >
                  {proj.description}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {proj.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: alpha(theme.palette.primary.main, 0.15),
                        color: theme.palette.primary.main,
                        fontSize: "0.7rem",
                        py: 0.4,
                        px: 0.8,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
