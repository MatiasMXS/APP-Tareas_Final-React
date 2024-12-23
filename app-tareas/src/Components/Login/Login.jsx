import { ThemeProvider } from "@mui/material/styles";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import themeGlobal from "../../services/theme"; // Importa el tema

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "tarea" && password === "tarea") {
      navigate("/dashboard");
    } else {
      setError("Credenciales incorrectas. Intenta nuevamente.");
    }
  };

  return (
    <ThemeProvider theme={themeGlobal}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: themeGlobal.palette.backgroundLogin.default, // Fondo global
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{ color: "white", mb: 2,  }}
          >
            Planificador Personal
          </Typography>
        </Box>
        <Container
          sx={{
            width: 400,
            backgroundColor: themeGlobal.palette.secondary.main, // Color secundario
            borderRadius: 2,
            padding: 4,
            boxShadow: "7px 13px 37px #000",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "white",
              mb: 3,
              fontWeight: "bold",
            }}
          >
            Iniciar Sesión
          </Typography>
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              style: { backgroundColor: themeGlobal.palette.secondary.dark, color: "white" },
            }}
            InputLabelProps={{ style: { color: "white" } }}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: { backgroundColor: themeGlobal.palette.secondary.dark, color: "white" },
            }}
            InputLabelProps={{ style: { color: "white" } }}
          />
          {error && (
            <Typography color="error" variant="body2" mt={2}>
              {error}
            </Typography>
          )}
          <Box mt={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleLogin}
              sx={{
                backgroundColor: themeGlobal.palette.primary.main, // Color primario
                mt: 2,
                mb: 2,
                ":hover": {
                  backgroundColor: themeGlobal.palette.primary.dark, // Hover primario
                },
              }}
            >
              Ingresar
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
