/* Crypto-Trade and Cointrader "Bid" and "Ask" 
/* prices are showing two results. Fix 'em or
/* put new exchanges in their place 6/15/14 */
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
    $('.cointrader').append("<h3>" + data.USD.exchanges.cointrader.display_name + "</h3>");
    $('.ctBid').append("$" + data.USD.exchanges.cointrader.rates.bid);
    $('.ctAsk').append("$" + data.USD.exchanges.cointrader.rates.ask);
    $('.ctFin').append("$" + data.USD.exchanges.cointrader.rates.last);
    $('.ctVolumeFIN').append(data.USD.exchanges.cointrader.volume_percent + "%");
    $('.bitstamp').append("<h3>" + data.USD.exchanges.bitstamp.display_name + "</h3>");
    $('.itBid').append("$" + data.USD.exchanges.bitstamp.rates.bid);
    $('.itAsk').append("$" + data.USD.exchanges.bitstamp.rates.ask);
    $('.itFin').append("$" + data.USD.exchanges.bitstamp.rates.last);
    $('.itVolumeFIN').append(data.USD.exchanges.bitstamp.volume_percent + "%");
    $('.cryptotrade').append("<h3>" + data.USD.exchanges.cryptotrade.display_name + "</h3>");
    $('.ctBid').append("$" + data.USD.exchanges.cryptotrade.rates.bid);
    $('.ctAsk').append("$" + data.USD.exchanges.cryptotrade.rates.ask);
    $('.ctFin').append("$" + data.USD.exchanges.cryptotrade.rates.last);
    $('.ctVolumeFIN').append(data.USD.exchanges.cryptotrade.volume_percent + "%");
  });
});
