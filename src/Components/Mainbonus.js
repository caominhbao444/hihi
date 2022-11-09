import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useAxios from "../Data/useAxios";
import "./Mainbonus.css";
const Mainbonus = () => {
  const { response, loading } = useAxios(
    "coins/markets?vs_currency=usd&ids=dogecoin%2Cbitcoin%2Cmonero%2Czcash&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  console.log(response);

  return (
    <div className="cover">
      <div className="cover_top">
        <h1>Future of</h1>
        <h1>The World</h1>
        <p>
          Making money is art and working is art and good business is the best
          art.
        </p>
        <Link className="regis-button" to="/signup">
          Register Now
        </Link>
      </div>
      <div className="cover_mid cover-gird">
        {response &&
          response.map((response) => (
            <div className="girds">
              <div className="gird_top">
                <img src={response.image} alt="coin" />
                <div className="gird_first-head">
                  <h2>({response.name}) BUSD</h2>
                </div>
                <div
                  className={`${
                    response.price_change_percentage_24h > 0
                      ? "text-success"
                      : "text-danger"
                  }  "gird_first-head"`}
                >
                  <p>
                    {Math.round(response.price_change_percentage_24h * 100) /
                      100}
                    %
                  </p>
                </div>
              </div>
              <div className="gird_mid">
                <h1
                  className={`${
                    response.current_price > response.high_24h
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {Math.round(response.current_price * 100) / 100}
                </h1>
                <p>$504.3</p>
                <Link className="move" to={`/coins/${response.id}`}>
                  <FontAwesomeIcon icon={faCircleRight} />
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div></div>
    </div>
  );
};

export default Mainbonus;
