import { Container } from "@mui/material";
import Nav from "./components/Nav";

import Upload from "./components/upload/Upload";
import ImagesList from "./components/imagesList/ImagesList";



function App() {
  return (
    <Container maxWidth="lg" sx={{textAlign:'center', mt:'3rem'}}>
      <Nav/>
      <Upload/>
      <ImagesList/>
    </Container>
  );
}

export default App;
