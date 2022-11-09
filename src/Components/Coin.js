import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Coin.css";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
const Coin = ({ coin }) => {
  return (
    <tr>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className="d-flex justify-content-center">
          <Link
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
            to={`/coins/${coin.id}`}
          >
            <img className="imgCoin" src={coin.image} alt="{coin.image}" />
            <p style={{ color: "black", marginBottom: 0 }}>{coin.name}</p>
            <span className="text-center text-black ">({coin.symbol})</span>
          </Link>
        </div>
      </td>
      {/* <td className="d-flex justify-content-center">
        <img className="imgCoin" src={coin.image} />
        <Link
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
          to={`/coins/${coin.id}`}
        >
          <p style={{ color: "black", marginBottom: 0 }}>{coin.name}</p>
          <span className="text-center text-black ">({coin.symbol})</span>
        </Link>
      </td> */}

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
      <td className="contact">
        <Link to={`/coins/${coin.id}`}>
          <Button className="buy">Buy</Button>
        </Link>
        <Link to={`/coins/${coin.id}`}>
          <Button className="view">View</Button>
        </Link>
      </td>
    </tr>
  );
};

export default Coin;
