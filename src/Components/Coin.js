import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Coin.css";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { Up } from "./SoFunc";
import { Down } from "./SoFunc";
const Coin = ({ coin }) => {
  return (
    <tr>
      <td>{coin.id}</td>

      <td className="d-flex justify-content-center">
        <img className="imgCoin" src={coin.image} />
        <Link style={{ textDecoration: "none" }} to={`/coins/${coin.id}`}>
          <p style={{ color: "black" }}>{coin.name}</p>
        </Link>

        <span className="text-center">({coin.symbol})</span>
      </td>

      <td>${coin.current_price}</td>
      <td
        className={`${
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        } `}
      >
        {coin.price_change_percentage_24h < 0 ? (
          <FontAwesomeIcon icon={faDownLong} />
        ) : (
          <FontAwesomeIcon icon={faUpLong} />
        )}
        {coin.price_change_percentage_24h}
      </td>
      <td>
        <Button>Buy</Button>
      </td>
    </tr>
  );
};

export default Coin;
