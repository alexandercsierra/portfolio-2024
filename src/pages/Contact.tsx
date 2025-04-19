import { Box, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import TextWithBold from "../components/TextWithBold";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant={"h1"} sx={{ fontWeight: "500", mb: 4 }}>
        <TextWithBold text={"Let's get in **touch**"} />
      </Typography>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        onSubmit={onSubmit}
      >
        <Box
          sx={{
            padding: "50px",
            bgcolor: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "800px",
            borderRadius: "25px",
          }}
          gap={3}
        >
          {/* <label htmlFor={"name"}>Name</label> */}
          <Box>
            <Typography
              sx={{
                color: "white",
                fontWeight: "800",
                fontSize: "1.2rem",
                ml: 2,
                mb: 1,
              }}
            >
              Name
            </Typography>
            <input
              name={"name"}
              value={form.name}
              onChange={handleChange}
              placeholder={"name"}
              style={{
                fontSize: "16px",
                borderRadius: "35px",
                width: "400px",
                padding: "10px 20px",
              }}
            />
          </Box>
          <Box>
            {/* <label htmlFor={"name"}>Email</label> */}
            <Typography
              sx={{
                color: "white",
                fontWeight: "800",
                fontSize: "1.2rem",
                ml: 2,
                mb: 1,
              }}
            >
              Email
            </Typography>
            <input
              name={"email"}
              type={"email"}
              value={form.email}
              onChange={handleChange}
              placeholder={"email"}
              style={{
                fontSize: "16px",
                borderRadius: "25px",
                width: "400px",
                padding: "10px 20px",
              }}
            />
          </Box>
          <Box>
            {/* <label htmlFor={"name"}>Message</label> */}
            <Typography
              sx={{
                color: "white",
                fontWeight: "800",
                fontSize: "1.2rem",
                ml: 2,
                mb: 1,
              }}
            >
              Message
            </Typography>
            <textarea
              rows={5}
              name={"message"}
              value={form.message}
              onChange={handleChange}
              placeholder={"message"}
              style={{
                fontSize: "16px",
                borderRadius: "25px",
                width: "400px",
                padding: "10px 20px",
                border: "1px solid #ccc",
              }}
            />
          </Box>
          <Button
            sx={{
              borderRadius: "25px",
              color: "primary.main",
              background: "white",
              fontWeight: "900",
              fontSize: "1.1rem",
              textTransform: "none",
              width: "200px",
            }}
            variant={"contained"}
            type={"submit"}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default Contact;
