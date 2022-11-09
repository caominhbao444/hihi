import useAxios from "../Data/useAxios";
import Coin from "./Coin";
import Table from "react-bootstrap/Table";
import "./Market.css";
import Container from "react-bootstrap/esm/Container";
const Market = () => {
  const { response, loading } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  console.log(response);
  return (
    <div className="market">
      <h2 className="text-center p-2">List Coin</h2>
      <Container className="pb-3">
        <Table striped bordered hover size="sm" className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Currentprice</th>
              <th>Change</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {response &&
              response.map((coin, index) => <Coin key={coin.id} coin={coin} />)}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Market;
