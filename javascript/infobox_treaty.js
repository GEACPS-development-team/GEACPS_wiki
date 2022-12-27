const url = "/GEACPS_wiki/json/treaty.json";
let result;

function formatJSON(json) {
	const id = document.getElementById('infobox_treaty');
	const treaty = json.find((v) => v.name == document.title);
	let html = '<aside><div class = "infobox"><table><tbody>';
	html += '<tr class="title"><th	colspan="2">' + treaty.name + '</th></tr>';
	html += '<tr class="table2"><td	colspan="2"><table class = "infobox2">';
	html += '<tr><th>正式名称</th><td>';
	for (let long_names of treaty.long_name) {
		html += long_names + '<br>';
	}
	html += '</td></tr>';
	html += '<tr><th>種類</th><td>' + treaty.type + '</td></tr>';
	html += '<tr><th>署名</th><td>' + treaty.date_signed + '</td></tr>';
	html += '<tr><th>署名場所</th><td>' + treaty.location_signed + '</td></tr>';
	html += '<tr><th>発効</th><td>' + treaty.date_effective + '</td></tr>';
	html += '<tr><th>締約国</th><td>';
	for (let parties of treaty.parties) {
		html += parties + '<br>';
	}
	html += '</td></tr>';
	html += '<tr><th>言語</th><td>';
	for (let parties of treaty.language) {
		html += parties + '<br>';
	}
	html += '</td></tr>';
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