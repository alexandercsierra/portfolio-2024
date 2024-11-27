import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import { NavLink } from "react-router-dom";
import { accentColor } from "../constants/colors";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export default function PositionedSnackbar({
  open,
  setOpen,
  message,
  severity = "success",
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  message: string;
  severity: "success" | "error" | "warning" | "info";
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        // style={{ brderRadius: "35px", background: accentColor }}
        // sx={{ borderRadius: "35px", background: accentColor }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        // message={message}
        key={"cart"}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{
            borderRadius: "35px",
            background: "white",
            // color: "white",
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
