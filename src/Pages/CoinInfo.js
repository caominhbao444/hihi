import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./CoinInfo.css";
import useAxios from "../Data/useAxios";
import { useParams } from "react-router-dom";
const CoinInfo = () => {
  const { id } = useParams();
  // let ConvertStringToHTML = function (str) {
  //   let parser = new DOMParser();
  //   let doc = parser.parseFromString(str, "text/html");
  //   return doc.body.innerHTML;
  // };

  useEffect(() => {
    fetchData(param);
  }, []);

  const { response, loading } = useAxios(`coins/${id}`);
  if (!response) return <></>;
  // let parser = new DOMParser();
  // if (!response.description.en) {
  //   const a = document.getElementById("des").innerHTML(response.description.en);
  //   console.log(a);
  // }
  // function parseHTML(html) {
  //   var t = document.createElement("template");
  //   t.innerHTML = html;
  //   return t.content;
  // }

  // var documentFragment = parseHTML("<p>Test</p>");
  // console.log(documentFragment);
  return (
    <Container fluid className="coindetail">
      <header className="pageinfo">
        <img src={response.image.large} />
        <h1>
          {response.name} ({response.symbol})
        </h1>
      </header>
      <div className="show-details">
        <div className="width">
          <h2>Details</h2>
          <div className="bd-black">
            <div className="show-detail">
              <h4> Market cap rank</h4>
              <span>{response.market_cap_rank}</span>
            </div>
            <div className="show-detail">
              <h4> 24h high</h4>
              <span>${response.market_data.high_24h.usd}</span>
            </div>
            <div className="show-detail">
              <h4> 24h low</h4>
              <span>${response.market_data.low_24h.usd}</span>
            </div>
            {/* <div className="show-detail">
              <h4> descriptipn</h4>
              <span id="des"></span>
            </div> */}
            <div>hello - {documentFragment}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CoinInfo;
