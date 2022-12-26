//title
if (document.title != "GEACPS Wiki"){
	const mainHeader = document.getElementById('main_header');
	mainHeader.insertAdjacentHTML('beforebegin', '<h1>' + document.title + '</h1>');
}

//header
let headerImgHref = document.createElement('a');
headerImgHref.href = '/GEACPS_wiki/ja/index.html';

let headerImg = document.createElement('img');
headerImg.src = '/GEACPS_wiki/images/icon/wiki_icon.png';
headerImg.alt = 'Wikiアイコン'

let headerParent = document.getElementById("header");
headerImgHref.appendChild(headerImg);
headerParent.appendChild(headerImgHref);