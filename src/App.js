import Header from "./components/header";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homeScreen";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
    <Header/>
    <Container>
      <main>
            <Outlet/>
      </main>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
