const url = "/GEACPS_wiki/json/countries.json";
let result;

function formatJSON(json) {
	const id = document.getElementById('infobox_country');
	const country = json.find((v) => v.name == document.title);
	let html = '<aside><div class = "infobox"><table><tbody>';
	html += '<tr class="title"><th	colspan="2">' + country.name + '</th></tr>';
	html += '<tr><td colspan="2"><img src="' + country.flag + '" alt="' + country.infomation.abbreviation + 'の国旗" width="300"></td></tr>';
	html += '<tr><td colspan="2"><img src="' + country.emblem + '" alt="' + country.infomation.abbreviation + 'の国章" width="300"></td></tr>';
	html += '<tr><th colspan="2">基本情報</th></tr>';
	html += '<tr class="table2"><td	colspan="2"><table class = "infobox2">';
	html += '<tr><th>正式名称</th><td>' + country.infomation.official_name + '</td></tr>';
	html += '<tr><th>略称</th><td>' + country.infomation.abbreviation + '</td></tr>';
	html += '<tr><th>タグ</th><td>' + country.infomation.tag + '</td></tr>';
	html += '<tr><th>標語</th><td>' + country.infomation.motto + '</td></tr>';
	html += '<tr><th>国歌</th><td>' + country.infomation.anthem + '</td></tr>';
	html += '<tr><th>首都</th><td>' + country.infomation.capital + '</td></tr>';
	html += '<tr><th>国家元首</th><td>' + country.infomation.head_of_state + '</td></tr>';
	html += '<tr><th>政府首班</th><td>' + country.infomation.head_of_government + '</td></tr>';
	html += '<tr><th>政府形態</th><td>' + country.infomation.form_of_government + '</td></tr>';
	html += '<tr><th>政府思想</th><td>' + country.infomation.ideology + '</td></tr>';
	html += '<tr><th>通貨</th><td>' + country.infomation.currency + '</td></tr>';
	html += '<tr><th>成立</th><td>' + country.infomation.establishment + '</td></tr>';
	html += '<tr><th>工業力</th><td>' + country.infomation.factory + '</td></tr>';
	html += '<tr><th>人口</th><td>' + country.infomation.population + '</td></tr>';
	html += '</table></td></tr>';
	html += '</tbody></table></div></aside>';
	id.insertAdjacentHTML('beforebegin', html);
}
window.addEventListener("load", () => {
	result = document.getElementById("result");
	fetch(url)
		.then(response => response.json())
		.then(data => formatJSON(data));
});