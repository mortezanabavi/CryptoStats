async function fetchData() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET",  "https://api.nobitex.ir/v2/orderbook/BTCUSDT");
	xhr.send();
	xhr.onload = function () {
		var record= JSON.parse(xhr.responseText);
		document.getElementById("btcusdt").innerHTML=record['lastTradePrice']/10;
	};
	let xhr2 = new XMLHttpRequest();
	xhr2.open("GET",  "https://api.nobitex.ir/v2/orderbook/ETHUSDT");
	xhr2.send();
	xhr2.onload = function () {
		var record2 = JSON.parse(xhr2.responseText);
		document.getElementById("ethusdt").innerHTML=record2['lastTradePrice']/10;
	};
	let xhr3 = new XMLHttpRequest();
	xhr3.open("GET",  "https://api.nobitex.ir/v2/orderbook/TRXUSDT");
	xhr3.send();
	xhr3.onload = function () {
		var record3 = JSON.parse(xhr3.responseText);
		document.getElementById("trxusdt").innerHTML=record3['lastTradePrice']/10;
	};
	let xhr4 = new XMLHttpRequest();
	xhr4.open("GET",  "https://api.nobitex.ir/v2/orderbook/SANDUSDT");
	xhr4.send();
	xhr4.onload = function () {
		var record4 = JSON.parse(xhr4.responseText);
		document.getElementById("sandusdt").innerHTML=record4['lastTradePrice']/10;
	};
	
}
fetchData();