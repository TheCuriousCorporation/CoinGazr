$(function(){
	function getUSD(){
		var jsonURL = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
		$.getJSON(jsonURL, function(result){
			var rate = result.bpi.USD.rate;
			$('.usd').html('<h2>$1.00 BTC = ' + '$' + rate + ' USD</h2>');
			document.title = 'Bitcoin = ' + rate;
		});
	}
	var timer = setInterval(getUSD, 60000);
	getUSD();

	function getHKD(){
		var jsonURL = 'https://api.coindesk.com/v1/bpi/currentprice/HKD.json';
		$.getJSON(jsonURL, function(result){
			var rate = result.bpi.HKD.rate;
			$('.hkd').html('<h2>$1.00 BTC = ' + '$' + rate + ' HKD</h2>');
		});
	}
	var timer = setInterval(getHKD, 60000);
	getHKD();

	function getEUR(){
		var jsonURL = 'https://api.coindesk.com/v1/bpi/currentprice/EUR.json';
		$.getJSON(jsonURL, function(result){
			var rate = result.bpi.EUR.rate;
			$('.eur').html('<h2>$1.00 BTC = ' + '€' + rate + ' EURO</h2>');
		});
	};
	var timer = setInterval(getEUR, 60000);
	getEUR();

	function getCAD(){
		var jsonURL = "https://api.coindesk.com/v1/bpi/currentprice/CAD.json";
		$.getJSON(jsonURL, function(result){
			var rate = result.bpi.CAD.rate;
			$('.cad').html('<h2>$1.00 BTC = ' + '$' + rate + ' CAD</h2>');
		})
	}
	var timer = setInterval(getCAD, 60000);
	getCAD();
});