import { Box, Typography } from "@mui/material";
import GenericDialog from "../GenericDialog";
import { NavLink } from "../../Nav";

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
  return (
    <GenericDialog
      id={`checkout-modal`}
      //   title={"Checkout"}
      open={open}
      onCancel={onCancel}
      showCloseButton
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          p: 2,
        }}
        gap={3}
      >
        <Typography variant={"h4"} sx={{ textAlign: "center", width: "100%" }}>
          Thank you for your purchase!
        </Typography>
        <Typography sx={{}}>
          If you've gotten this far, thanks for indulging me little skills shop.
          I'm always looking for new opportunities to learn and grow, so if
          you're looking for an engineer, shoot me an email and we'll see what
          we can build together. I'm excited to hear from you!
        </Typography>
        <NavLink
          sx={{ margin: "20px auto" }}
          href={"mailto:alexandercsierra@gmail.com"}
          isCTA
        >
          Email me
        </NavLink>
      </Box>
    </GenericDialog>
  );
};

export default CheckoutModal;
