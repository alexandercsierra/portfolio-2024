import React from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { SxProps } from "@mui/system";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export interface IGenericModalProps {
  id: string;
  open: boolean;
  title?: string;
  children?: React.ReactNode;
  onCancel?: (event?: unknown, reason?: string) => void;
  sx?: SxProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paperStyles?: any;
  dialogContentStyles?: SxProps;
  borderRadius?: string;
  backgroundImgPath?: string;
  showCloseButton?: boolean;
  closeButtonColor?: string;
  keepMounted?: boolean;
}

// if there is an onCancel, it should be automatically called here when user presses the escape key, no need to add a keyPress handler for that, neat!
// eslint-disable-next-line max-lines-per-function
const GenericDialog = ({
  id,
  open,
  title,
  children,
  onCancel,
  sx = {},
  paperStyles = {},
  dialogContentStyles = {},
  backgroundImgPath,
  showCloseButton = false,
  keepMounted = false,
}: IGenericModalProps): JSX.Element => {
  return (
    <Dialog
      keepMounted={keepMounted}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description`}
      onClose={onCancel}
      open={open}
      PaperProps={{
        style: {
          maxWidth: "none",
          backgroundImage: `url(${backgroundImgPath})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: { xs: "0 auto", sm: "inherit" },
          boxSizing: "border-box",
          borderRadius: "25px",
          border: "2px solid #000",
          width: "600px",
          boxShadow: { xs: "6px 6px 0px #000000", sm: "8px 8px 0px #000000" },
          padding: { xs: 1.5, sm: 3, md: 4 },
          ...paperStyles,
        },
      }}
      sx={{
        textAlign: "center",
        ...sx,
      }}
    >
      <DialogTitle id={`${id}-title`} sx={{ padding: "10px" }}>
        {showCloseButton && (
          <Box display="flex" alignItems="center" width="100%">
            <IconButton onClick={onCancel} sx={{ marginLeft: "auto" }}>
              <HighlightOffIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        )}
        <Typography component="span" variant="h5" sx={{ fontWeight: "600" }}>
          {title || ""}
        </Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          ...dialogContentStyles,
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default GenericDialog;
