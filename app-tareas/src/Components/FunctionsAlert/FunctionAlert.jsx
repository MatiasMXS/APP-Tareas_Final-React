import { Alert, Snackbar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import useAlert from "../../hooks/useAlert";

export const FuctionAlert = () => {
    const { openAlert, message, handleAlertClose } = useAlert()
    return ( <Snackbar
        open={openAlert}
        autoHideDuration={5000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "button", horizontal: "right" }} // Posición en la esquina superior derecha
        sx={{
          "& .MuiSnackbarContent-root": {
            width: "400px", // Ancho personalizado
            fontSize: "1.2rem", // Tamaño del texto
          },
        }}
      >
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          onClose={handleAlertClose}
          sx={{
            fontSize: "1.2rem", // Tamaño del texto en la alerta
            padding: "20px", // Más espacio interno
            borderRadius: "8px", // Bordes redondeados
          }}
        >
          {message}
        </Alert>
      </Snackbar> );
}

export default FuctionAlert;