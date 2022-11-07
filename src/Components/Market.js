import useAxios from "../Data/useAxios";
import Coin from "./Coin";
import Table from "react-bootstrap/Table";

const Market = () => {
  const { response, loading } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  console.log("response", response);
  return (
    <>
      <section className="mt-10">
        <h2 className="text-center p-2">List Coin</h2>
        <Table striped bordered hover size="sm" className="text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Currentprice</th>
              <th>Change</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {response &&
              response.map((coin) => <Coin key={coin.id} coin={coin} />)}
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default Market;
