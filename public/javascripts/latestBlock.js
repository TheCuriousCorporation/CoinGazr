$(document).ready(function () {
	var url = "http://btc.blockr.io/api/v1/block/info/last";

	$.getJSON(url, function (json) {
		var hashChain = json.data.hash;
		var hashSum  = json.data.vout_sum;
		var hashSize = json.data.size;

		$('.hashChain').text(hashChain);
		$('.hashSum').append("<h2>$"+hashSum+"</h2>");
		$('.hashSize').append("<h2>"+hashSize+"</h2>");
	});
});