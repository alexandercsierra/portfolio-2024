import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import GenericDialog from "../GenericDialog";
import Confetti from "react-dom-confetti";
import CTA from "../CTA";

const confettiConfig = {
  angle: 90,
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  dragFriction: 0.2,
  duration: 3000,
  elementCount: 70,
  height: "10px",
  spread: 200,
  stagger: 3,
  startVelocity: 40,
  width: "10px",
  perspective: "500px",
};
interface Product {
  name: string;
  image?: string;
  description?: string;
  subtitle: string;
  price?: number;
}

const CheckoutModal = ({
  open,
  onCancel,
}: {
  productList: Product[];
  open: boolean;
  onCancel: () => void;
}) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    let timeout: number | null = null;
    let timeout2: number | null = null;
    if (open) {
      timeout = setTimeout(() => {
        setShowConfetti(true);
        timeout2 = setTimeout(() => {
          setShowConfetti(false);
        }, 500);
      }, 500);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
      if (timeout2) clearTimeout(timeout2);
    };
  }, [open]);
  return (
    <GenericDialog
      id={`checkout-modal`}
      open={open}
      onCancel={onCancel}
      showCloseButton
      paperStyles={{
        overflow: "hidden",
      }}
    >
      <Box sx={{ zIndex: 5000, position: "absolute" }}>
        <Confetti active={showConfetti} config={confettiConfig} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          p: 2,
        }}
        gap={3}
      >
        <Typography variant={"h4"} sx={{ textAlign: "center", width: "100%" }}>
          Thanks for your purchase!
        </Typography>
        <Typography sx={{ textAlign: "left" }}>
          If you've gotten this far, thanks for indulging me! I'm always looking
          for new opportunities to learn and grow, so if you're looking for an
          engineer, shoot me an email and we'll see what we can build together.
          I'm excited to hear from you!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CTA
            href={"mailto:alexandercsierra@gmail.com"}
            text="Email me"
            style={{ py: 0.5, mb: 0, width: "90%" }}
          />
          <Typography variant={"caption"}>
            alexandercsierra@gmail.com
          </Typography>
        </Box>
      </Box>
    </GenericDialog>
  );
};

export default CheckoutModal;
