import { FC } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Chip,
  Divider,
  Avatar,
  List,
  ListItem,
  Link,
  useTheme,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Terminal,
  Code,
  Email,
  OpenInNew,
} from "@mui/icons-material";
import { alpha } from "@mui/material/styles";
import { projects } from "../data/projects";
// import {profile } from "../data/profile"; // Assuming you have a profile data file
import { influences } from "../data/influences"; // Assuming you have a influences data file
import { CardMedia } from "@mui/material";

const Home: FC = () => {
  const theme = useTheme();

  const profile = {
    name: "Nilton Santos",
    title: "Solutions Designer & Full Stack Developer",
    bio: "I build exceptional digital experiences with modern technologies.",
    skills: [
      // Frontend
      "React 18",
      "TypeScript 5",
      "Material-UI v5",
      "TanStack Query",
      "Zustand",
      "Framer Motion",

      // Backend
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "Python",

      // Databases
      "PostgreSQL 16",
      "SQLite",

      // DevOps & Cloud
      "Docker",
      "Kubernetes",

      // Tools
      "Git",
    ],
    languages: ["English", "Spanish", "Portuguese"],
    status: {
      available: true,
      currentProject:
        "RADARE - Reconciliation and Data Analysis in a Responsive Environment",
    },
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 4 }, py: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 3,
          mb: 2,
          px: 2,
          py: 2,
        }}
      >
        {/* <Avatar
          src="/path-to-your-image.jpg"
          sx={{
            width: 120,
            height: 120,
            mb: 3,
            border: `3px solid ${theme.palette.primary.main}`,
          }}
        /> */}

        <Typography
          variant="h1"
          component="h1"
          sx={{
            mb: 3,
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          {profile.name}
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: "text.secondary",
            mb: 2,
            maxWidth: "600px",
          }}
        >
          {profile.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: "1.1rem",
            lineHeight: 1.7,
            maxWidth: "680px",
          }}
        >
          {profile.bio}
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<Terminal />}
            href="#contact"
            sx={{ px: 4 }}
          >
            Contact Me
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<Code />}
            href="#projects"
            sx={{ px: 4 }}
          >
            View Projects
          </Button>
        </Stack>

        <Box
          sx={{
            maxWidth: "800px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {profile.skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                fontSize: "0.8rem",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Status Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 8,
        }}
      >
        <Box
          sx={{
            backgroundColor: alpha(theme.palette.primary.main, 0.05),
            p: 3,
            px: 4,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            maxWidth: "fit-content",
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderColor: alpha(theme.palette.primary.main, 0.2),
            },
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: profile.status.available ? "#4CAF50" : "#F44336",
              animation: "pulse 1.5s infinite",
              "@keyframes pulse": {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.1)" },
                "100%": { transform: "scale(1)" },
              },
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {profile.status.available
              ? `Available for work • Currently: ${profile.status.currentProject}`
              : "Not currently available for new projects"}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* About Section */}
      <Box
        id="about"
        sx={{
          mb: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 3,
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          About Me
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          I'm a passionate developer with 5 years of experience building web
          applications. My expertise lies in creating responsive, accessible,
          and performant applications using modern JavaScript frameworks.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          When I'm not coding, you can find me hiking, reading sci-fi novels, or
          experimenting with new cooking recipes.
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Projects Section */}
      <Box
        id="projects"
        sx={{
          mb: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 3,
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          My Projects
        </Typography>

        <Stack spacing={6}>
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                alignItems: "center",
                p: 3,
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.03),
                  transform: "translateY(-2px)",
                },
              }}
            >
              {/* Project Image - Takes 40% width on desktop, full width on mobile */}
              <Box
                sx={{
                  width: { xs: "100%", md: "40%" },
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                  minHeight: 200,
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={project.imageUrl || "/default-project-image.jpg"}
                  alt={`${project.title} screenshot`}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    minHeight: 200,
                    transition: "transform 0.5s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                />
              </Box>

              {/* Project Content - Takes 60% width on desktop, full width on mobile */}
              <Box
                sx={{
                  width: { xs: "100%", md: "60%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mb: 1.5,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 2.5,
                    lineHeight: 1.7,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {project.description}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ mb: 3.5 }}
                  flexWrap="wrap"
                  useFlexGap
                >
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontWeight: 500,
                        "& .MuiChip-label": {
                          px: 1,
                        },
                      }}
                    />
                  ))}
                </Stack>

                <Stack direction="row" spacing={2} sx={{ mt: "auto" }}>
                  {project.githubUrl && (
                    <Button
                      variant="outlined"
                      size="medium"
                      startIcon={<GitHub />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textTransform: "none",
                        px: 3,
                        borderRadius: 1,
                      }}
                    >
                      View Code
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button
                      variant="contained"
                      size="medium"
                      startIcon={<OpenInNew />}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textTransform: "none",
                        px: 3,
                        borderRadius: 1,
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Influences Section */}
      <Box
        id="influences"
        sx={{
          mb: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 4,
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          My Intellectual Influences
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, maxWidth: 800, lineHeight: 1.7 }}
        >
          These works have profoundly shaped my thinking across technology,
          philosophy, and economics.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          {/* Column 1 */}
          <Box
            sx={{
              flex: 1,
              minWidth: 300,
              maxWidth: "calc(50% - 16px)",
            }}
          >
            <List disablePadding>
              {influences
                .slice(0, Math.ceil(influences.length / 2))
                .map((item, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 1.5 }}>
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
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                            lineHeight: 1.4,
                          }}
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
                      <OpenInNew
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
          </Box>

          {/* Column 2 */}
          <Box
            sx={{
              flex: 1,
              minWidth: 300,
              maxWidth: "calc(50% - 16px)",
            }}
          >
            <List disablePadding>
              {influences
                .slice(Math.ceil(influences.length / 2))
                .map((item, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 1.5 }}>
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
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                            lineHeight: 1.4,
                          }}
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
                      <OpenInNew
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
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
            fontStyle: "italic",
            color: "text.secondary",
            textAlign: "center",
          }}
        >
          This living document grows with me. Last updated{" "}
          {new Date().toLocaleDateString()}.
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: { xs: 2, md: 0 },
          py: 8,
          backgroundColor: alpha(theme.palette.primary.main, 0.03),
          borderRadius: 4,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.1)",
            borderColor: alpha(theme.palette.primary.main, 0.2),
          },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 3,
            fontWeight: 700,
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          Let's Connect
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: 4,
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.8,
            color: "text.secondary",
          }}
        >
          Whether you have an exciting project opportunity, want to collaborate,
          or just chat about the latest in technology, I'd love to hear from
          you.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
            mb: 4,
            width: "100%",
            maxWidth: 800,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: "background.paper",
              boxShadow: 1,
              flex: 1,
              maxWidth: 400,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 3,
              },
            }}
          >
            <Stack direction="row" spacing={2} justifyContent="center">
              <Email
                sx={{
                  fontSize: 40,
                  color: theme.palette.primary.main,
                }}
              />
            </Stack>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Email Me
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              For direct inquiries and opportunities
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<Email />}
              href="mailto:nilton.naab@gmail.com"
              fullWidth
              sx={{
                borderRadius: 2,
                py: 1.5,
              }}
            >
              nilton.naab@gmail.com
            </Button>
          </Box>

          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: "background.paper",
              boxShadow: 1,
              flex: 1,
              maxWidth: 400,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 3,
              },
            }}
          >
            <Stack direction="row" spacing={2} justifyContent="center">
              <GitHub
                sx={{
                  fontSize: 40,

                  color: theme.palette.mode === "light" ? "#000" : "#fff",
                }}
              />
              <LinkedIn
                sx={{
                  fontSize: 40,

                  color: "#0077B5",
                }}
              />
            </Stack>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Social Profiles
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Connect with me on professional networks
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHub />}
                href="https://github.com/notNilton"
                target="_blank"
                rel="noopener"
                fullWidth
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                }}
              >
                GitHub
              </Button>
              <Button
                variant="contained"
                size="large"
                startIcon={<LinkedIn />}
                href="https://linkedin.com/in/notNilton"
                target="_blank"
                rel="noopener"
                fullWidth
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  backgroundColor: "#0077B5",
                  "&:hover": {
                    backgroundColor: "#006097",
                  },
                }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
