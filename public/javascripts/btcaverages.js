
$(document).ready(function(){
  $.ajax({
    url: "https://api.bitcoinaverage.com/all"
  }).then(function(data){
    $('.btcUSA').append("<h3>" + data.USD.exchanges.btce.display_name + "</h3>"); 
    $('.bidUSD').append("$" + data.USD.exchanges.btce.rates.bid);
    $('.AskUSD').append("$" + data.USD.exchanges.btce.rates.ask);
    $('.priceUSD').append("$" + data.USD.exchanges.btce.rates.last);
    $('.priceVolumeUSD').append(data.USD.exchanges.btce.volume_percent + "%");
    $('.bitfinex').append("<h3>" + data.USD.exchanges.bitfinex.display_name + "</h3>");
    $('.finBid').append("$" + data.USD.exchanges.bitfinex.rates.bid);
    $('.finAsk').append("$" + data.USD.exchanges.bitfinex.rates.ask);
    $('.priceFin').append("$" + data.USD.exchanges.bitfinex.rates.last);
    $('.priceVolumeFIN').append(data.USD.exchanges.bitfinex.volume_percent + "%");
    $('.bitstamp').append("<h3>" + data.USD.exchanges.bitstamp.display_name + "</h3>");
    $('.itBid').append("$" + data.USD.exchanges.bitstamp.rates.bid);
    $('.itAsk').append("$" + data.USD.exchanges.bitstamp.rates.ask);
    $('.itFin').append("$" + data.USD.exchanges.bitstamp.rates.last);
    $('.itVolumeFIN').append(data.USD.exchanges.bitstamp.volume_percent + "%");
    $('.localbitcoins').append("<h3>"+ data.USD.exchanges.localbitcoins.display_name + "</h3>");
    $('.localBid').append("$" + data.USD.exchanges.localbitcoins.rates.bid);
    $('.localAsk').append("$" + data.USD.exchanges.localbitcoins.rates.ask);
    $('.localPrice').append("$" + data.USD.exchanges.localbitcoins.rates.last);
    $('.localVol').append(data.USD.exchanges.localbitcoins.volume_percent + "%");
    $('.kraken').append("<h3>" + data.USD.exchanges.kraken.display_name + "</h3>")
    $('.kraBid').append("$" + data.USD.exchanges.kraken.rates.bid);
    $('.kraAsk').append("$" + data.USD.exchanges.kraken.rates.ask);
    $('.kraPrice').append("$" + data.USD.exchanges.kraken.rates.last);
    $('.kraVol').append(data.USD.exchanges.kraken.volume_percent + "%");
  });
});
