// src/components/Projects.tsx
import React, { FC } from "react";
import {
  Box,
  Typography,
  CardMedia,
  Stack,
  Button,
  Chip,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { MyProject } from "../data/projects-data";

interface ProjectsProps {
  projects: MyProject[];
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

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
      {/* Section Title */}
      <Typography
        id="projects"
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
        Main Projects
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4, maxWidth: 1000, lineHeight: 1.7, textAlign: "center" }}
      >
        These are my main projects that showcase my skills and interests in
        software development, design, and problem-solving.
      </Typography>
      {/* Grid of cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMd ? "repeat(2, 1fr)" : "1fr",
          gap: 4,
        }}
      >
        {projects.map((proj) => {
          const href = proj.liveUrl ?? proj.githubUrl ?? "#";

          return (
            <Paper
              key={proj.id}
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height={isMd ? 200 : 180}
                image={proj.imageUrl}
                alt={`${proj.title} screenshot`}
                sx={{ objectFit: "cover" }}
              />

              <Box
                sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {proj.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    flex: 1,
                    mb: 2,
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  {proj.description}
                </Typography>

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  spacing={1}
                  sx={{ mb: 2 }}
                >
                  {proj.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontSize: "0.75rem",
                        py: 0.5,
                        px: 1,
                      }}
                    />
                  ))}
                </Stack>

                <Button
                  variant="contained"
                  size="medium"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: "auto", alignSelf: "flex-start" }}
                >
                  Know More
                </Button>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
