import { Box, Divider } from "@mui/material";

import Container from "./components/Container";
import Form from "./components/Form";
import './App.css';


function App() {
  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Container />
        <Divider
          sx={{
            marginTop: "2px",
            borderBottomWidth: "2px",
            flexDirection: "row",
          }}
        />
        <Form />
        
      </Box>
    </>
  );
}

export default App;
