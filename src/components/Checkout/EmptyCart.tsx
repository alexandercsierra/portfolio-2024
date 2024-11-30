import { Typography, Box } from "@mui/material";
import CTA from "../CTA";

const EmptyCart = () => {
  return (
    <Box
      gap={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // height: "50vh",
        background: "white",
        width: "50%",
        height: "300px",
        borderRadius: "25px",
        padding: 4,
        mt: 6,
        // padding: "50px auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Typography variant={"h3"}>Nothing here yet....</Typography>
      <Typography>try adding more skills from the shop page</Typography>
      <CTA
        href={"/store"}
        text={"Go Shopping"}
        style={{ height: "20px", width: "200px" }}
      />
    </Box>
  );
};

export default EmptyCart;
