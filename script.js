async function fetchData() {
  const pairs = ["BTCUSDT", "ETHUSDT", "TRXUSDT", "SANDUSDT"];
  for (const pair of pairs) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.nobitex.ir/v2/orderbook/${pair}`);
    xhr.send();
    xhr.onload = function () {
      const record = JSON.parse(xhr.responseText);
      document.getElementById(`${pair.toLowerCase()}`).innerHTML = record['lastTradePrice'] / 10;
    };
  }
}
fetchData();
