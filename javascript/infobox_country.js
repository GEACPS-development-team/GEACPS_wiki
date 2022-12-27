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
	html += '<tr><th>正式名称</th><td>';
	for (let official_name of country.infomation.official_name) {
		html += official_name + '<br>';
	}
	html += '</td></tr>';
	html += '<tr><th>略称</th><td>';
	for (let abbreviation of country.infomation.abbreviation) {
		html += abbreviation + '<br>';
	}
	html += '</td></tr>';
	html += '<tr><th>タグ</th><td>';
	for (let tag of country.infomation.tag) {
		html += tag + '<br>';
	}
	html += '</td></tr>';
	html += '<tr><th>標語</th><td>';
	for (let motto of country.infomation.motto) {
		html += motto + '<br>';
	}
	html += '</td></tr>';
	html += '<tr><th>国歌</th><td>';
	for (let anthem of country.infomation.anthem) {
		html += anthem + '<br>';
	}
	html += '</td></tr>';
	html += '<tr><th>首都</th><td>';
	for (let anthem of country.infomation.capital) {
		html += anthem + '<br>';
	}
	html += '</td></tr>';
	html += '<tr><th>国家元首</th><td>';
	for (let head_of_state of country.infomation.head_of_state) {
		html += head_of_state + '<br>';
	}
	html += '</td></tr>';
	html += '<tr><th>政府首班</th><td>';
	for (let head_of_government of country.infomation.head_of_government) {
		html += head_of_government + '<br>';
	}
	html += '</td></tr>';
	html += '<tr><th>政府形態</th><td>';
	for (let form_of_government of country.infomation.form_of_government) {
		html += form_of_government + '<br>';
	}
	html += '<tr><th>政府思想</th><td><a href="/GEACPS_wik/ja/イデオロギー/' + country.infomation.ideology + '.html">' + country.infomation.ideology + '</a></td></tr>';
	html += '<tr><th>通貨</th><td>';
	for (let currency of country.infomation.currency) {
		html += currency + '<br>';
	}
	html += '</td></tr>';
	html += '<tr><th>成立</th><td>';
	for (let establishment of country.infomation.establishment) {
		html += establishment + '<br>';
	}
	html += '</td></tr>';
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