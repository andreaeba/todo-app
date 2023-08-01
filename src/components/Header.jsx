import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Logo from "../assets/logo-todo.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ContainerCards } from "./ContainerCards";

export default function Header({ children }) {

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: "#cfe8fc" }}>
          <Box>
            <img src={Logo} />
          </Box>

          <Box
            bgcolor="white"
            p={1}
            border="1px solid red"
            borderRadius={2}
            m={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Box display="flex" flexDirection="column" alignItems="start">
              <Typography variant="h5" component="h5" fontWeight={600}>
                Hi, Andrea
              </Typography>
              <Typography variant="body2">
                You have 5 tasks to accomplish today!
              </Typography>
            </Box>

            <AccountCircleIcon sx={{ fontSize: 50 }} />
          </Box>

          {children}

        
        </Box>
      </Container>
    </>
  );
}
