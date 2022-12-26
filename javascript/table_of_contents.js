document.addEventListener('DOMContentLoaded', function () {
	var contentsList = document.getElementById('table-of-content'); // 目次を追加する先(table of contents)
	var div = document.createElement('div'); // 作成する目次のコンテナ要素

	// .main-content配下のh2、h3要素を全て取得する
	var matches = document.querySelectorAll('.main-content h2, .main-content h3');

	// 取得した見出しタグ要素の数だけ以下の操作を繰り返す
	matches.forEach(function (value, i) {
		// 見出しタグ要素のidを取得し空の場合は内容をidにする
		var id = value.id;
		if (id === '') {
			id = value.textContent;
			value.id = id;
		}
		
		// 要素がh2タグの場合
		if (value.tagName === 'H2') {
			var ol = document.createElement('ol');
			var li = document.createElement('li');
			var a = document.createElement('a');

			// 追加する<ol><li><a>タイトル</a></li></ol>を準備する
			a.innerHTML = value.textContent;
			a.href = '#' + value.id;
			li.appendChild(a)
			ol.appendChild(li);

			// コンテナ要素である<div>の中に要素を追加する
			div.appendChild(ol);
		}

		// 要素がh3タグの場合
		if (value.tagName === 'H3') {
			var ol = document.createElement('ol');
			var li = document.createElement('li');
			var a = document.createElement('a');

			// コンテナ要素である<div>の中から最後の<li>を取得する。
			var lastol = div.lastElementChild;
			var lastLi = lastol.lastElementChild;

			// 追加する<ol><li><a>タイトル</a></li></ol>を準備する
			a.innerHTML = value.textContent;
			a.href = '#' + value.id;
			li.appendChild(a)
			ol.appendChild(li);

			// 最後の<li>の中に要素を追加する
			lastLi.appendChild(ol);
		}
	});

	// 最後に画面にレンダリング
	contentsList.appendChild(div);
});