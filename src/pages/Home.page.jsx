import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const coinsList = [
  "bitcoin",
  "ethereum",
  "tether",
  "binancecoin",
  "usd-coin",
  "ripple",
  "cardano",
  "dogecoin",
  "polygon",
  "solana",
  "litecoin",
  "tron",
  "avalanche-2",
  "shiba-inu",
  "dai",
];

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(30); // شمارنده 30 ثانیه

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: coinsList.join(","),
              order: "market_cap_desc",
              per_page: 15,
              page: 1,
            },
          }
        );
        setCoins(response.data);
        setLoading(false);
        setTimer(30); // بعد از آپدیت، شمارنده رو ریست کن
        console.log("Coins updated at", new Date().toLocaleTimeString());
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins(); // اولین بار اجرا
    const fetchInterval = setInterval(fetchCoins, 30000); // آپدیت هر ۳۰ ثانیه
    return () => clearInterval(fetchInterval);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 30)); // هر ثانیه کم می‌کنه و بعد از رسیدن به 0 ریست می‌کنه
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="container mt-2">
      <div className="mb-2">
        <strong>Next update in: {timer} s</strong>
      </div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Coin</th>
                <th>Symbol</th>
                <th>Price (USD)</th>
                <th>Market Cap</th>
                <th>24h Change</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, index) => (
                <tr key={coin.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{ width: "25px", marginRight: "10px" }}
                    />
                    {coin.name}
                  </td>
                  <td>{coin.symbol.toUpperCase()}</td>
                  <td>${coin.current_price.toLocaleString()}</td>
                  <td>${coin.market_cap.toLocaleString()}</td>
                  <td
                    style={{
                      color:
                        coin.price_change_percentage_24h >= 0
                          ? "green"
                          : "red",
                    }}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
