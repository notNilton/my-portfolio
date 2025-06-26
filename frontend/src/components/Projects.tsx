// src/components/Projects.tsx
import React, { FC } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  Paper,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { ProjectData } from "../data/projects-data";

interface ProjectsProps {
  projects: ProjectData[];
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        mb: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        /* constrain width and center horizontally */
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
        Main Projects
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, maxWidth: 800, lineHeight: 1.6, textAlign: "center" }}
      >
        These are my main projects that showcase my skills and interests in
        software development, design, and problem-solving.
      </Typography>

      {/* Responsive grid */}
      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 5,
        }}
      >
        {projects.map((proj) => {
          const href = proj.liveUrl ?? proj.githubUrl ?? "#";
          const firstImage = proj.images[0];

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
              {/* First image only, 1:1 */}
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  pt: "100%", // 1:1 ratio
                }}
              >
                <Box
                  component="img"
                  src={firstImage}
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

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
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

                {/* <Button
                  variant="contained"
                  size="small"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: "auto", alignSelf: "center" }}
                >
                  Know More
                </Button> */}
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
