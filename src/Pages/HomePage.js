import Market from "../Components/Market";
import Mainbonus from "../Components/Mainbonus";
import Container from "react-bootstrap/Container";
import "./HomePage.css";
const HomePage = () => {
  return (
    <Container fluid className="homePage">
      {/* <Mainbonus /> */}
      <Market />
    </Container>
  );
};

export default HomePage;
