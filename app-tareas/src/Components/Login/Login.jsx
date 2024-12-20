import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column", // Cambiado para alinear verticalmente
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
  position: "relative",
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  position: "absolute", // Para que el título se ubique en la parte superior
  top: "10%", // Ajusta según sea necesario
  width: "100%",
  textAlign: "center",
}));

const LoginBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  width: "100%",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  border: "2px solid #ddd",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2196f3",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1976d2",
  },
}));

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      navigate("/dashboard");
    } else {
      setError("Credenciales incorrectas. Intenta nuevamente.");
    }
  };

  return (
    <LoginContainer>
      <TitleContainer>
        <Typography variant="h2" component="h2">
          Planificador Personal
        </Typography>
      </TitleContainer>
      <LoginBox>
        <Typography variant="h4" component="h1" textAlign="center" mb={3}>
          Iniciar Sesión
        </Typography>
        <TextField
          label="Usuario"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2" mt={2}>
            {error}
          </Typography>
        )}
        <Box mt={3}>
          <StyledButton variant="contained" fullWidth onClick={handleLogin}>
            Ingresar
          </StyledButton>
        </Box>
      </LoginBox>
    </LoginContainer>
  );
};
