const url = "/json/battle.json";
let result;

function formatJSON(json) {
	const id = document.getElementById('infobox_battle');
	const battle = json.find((v) => v.name == document.title);
	let html = '<aside><div class = "infobox"><table><tbody>';
	html += '<tr class="title"><th	colspan="2">' + battle.name + '</th></tr>';
	html += '<tr class="table2"><td	colspan="2"><table class = "infobox2">';
	html += '<tr><th>戦争</th><td>' + battle.conflict + '</td></tr>';
	html += '<tr><th>日付</th><td>' + battle.date + '</td></tr>';
	html += '<tr><th>場所</th><td>' + battle.place + '</td></tr>';
	html += '<tr><th>結果</th><td>' + battle.result + '</td></tr>';
	html += '</table></td></tr>';
	html += '<tr><th	colspan="2">交戦戦力</th></tr>';
	for (let combatants of battle.combatant) {
		html += '<td>';
		for (let combatant of combatants) {
			html += combatant + '<br>';
		}
		html += '</td>';
	}
	html += '<tr><th	colspan="2">指導者・指揮者</th></tr>';
	for (let commanders of battle.commander) {
		html += '<td>';
		for (let commander of commanders) {
			html += commander + '<br>';
		}
		html += '</td>';
	}
	html += '<tr><th	colspan="2">戦力</th></tr>';
	for (let strengths of battle.strength) {
		html += '<td>';
		for (let strength of strengths) {
			html += strength + '<br>';
		}
		html += '</td>';
	}
	html += '<tr><th	colspan="2">損害</th></tr>';
	for (let casualties of battle.casualty) {
		html += '<td>';
		for (let casualty of casualties) {
			if (Object.prototype.hasOwnProperty.call(casualty, 'sunk')) {
				html += '轟沈・大破着底<br>';
				for (let sunk of casualty.sunk) {
					html += '・' + sunk + '<br>';
				}
			}
			if (Object.prototype.hasOwnProperty.call(casualty, 'damaged')) {
				html += '大破・中破・小破<br>';
				for (let damaged of casualty.damaged) {
					html += '・' + damaged + '<br>';
				}
			}
		}
		html += '</td>';
	}
	html += '</tbody></table></div></aside>';
	id.insertAdjacentHTML('beforebegin', html);
}
window.addEventListener("load", () => {
	result = document.getElementById("result");
	fetch(url)
		.then(response => response.json())
		.then(data => formatJSON(data));
});