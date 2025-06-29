import React, { FC } from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Button,
  Chip,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { Terminal, Code, GitHub } from "@mui/icons-material";

// No Profile type import; expecting `profile` prop shape from parent
export const Profile: FC<{ profile: any }> = ({ profile }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Paper
      elevation={4}
      sx={{
        overflow: "hidden",
        borderRadius: 4,
        p: { xs: 2, md: 2 },
        mx: { xs: 2, md: 2 },
        mt: 2,
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,245,242,0.9) 100%)"
            : "linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(42,42,42,0.9) 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMd ? "row" : "column",
          alignItems: "center",
          textAlign: isMd ? "left" : "center",
          gap: 4,
        }}
      >
        {/* Left: Avatar & Name */}
        <Box flexShrink={0}>
          <Avatar
            src={profile.avatar}
            sx={{
              width: 140,
              height: 140,
              mb: isMd ? 0 : 2,
              border: `4px solid ${theme.palette.secondary.main}`,
              boxShadow: 3,
            }}
          />
        </Box>

        {/* Right: Details */}
        <Box flex={1}>
          <Typography
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
            {profile.name}
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            {profile.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            {profile.about.join(" ")}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mb: 3 }}
            justifyContent={isMd ? "flex-start" : "center"}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Terminal />}
              href="mailto:nilton.naab@gmail.com"
              sx={{ px: 5, py: 1.5, borderRadius: 3 }}
            >
              Contact Me
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHub />}
              href="https://github.com/notnilton"
              target="_blank"
              rel="noopener"
              sx={{ px: 5, py: 1.5, borderRadius: 3 }}
            >
              My GitHub
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<Code />}
              href="#projects"
              sx={{ px: 5, py: 1.5, borderRadius: 3 }}
            >
              My Projects
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<Code />}
              href="#influences"
              sx={{ px: 5, py: 1.5, borderRadius: 3 }}
            >
              My Influences
            </Button>
          </Stack>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              mb: 4,
            }}
          >
            {profile.skills.map((skill: string) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  backgroundColor: alpha(theme.palette.secondary.main, 0.2),
                  color: theme.palette.secondary.dark,
                  fontSize: "0.85rem",
                  py: 0.5,
                  px: 1.5,
                }}
              />
            ))}
          </Box>

          {/* Status Bar */}
          <Box>
            <Box
              sx={{
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
                p: 2,
                px: 3,
                borderRadius: 2,
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                boxShadow: 2,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: 4,
                },
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: profile.status.available
                    ? theme.palette.success.main
                    : theme.palette.error.main,
                  animation: "pulse 1.5s infinite",
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.2)" },
                    "100%": { transform: "scale(1)" },
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.primary }}
              >
                {profile.status.available
                  ? `Available for work • Currently: ${profile.status.currentProject}`
                  : "Not currently available for new projects"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
