function mainTheme() {

	document.getElementById('xbody').href = 'css/main.css';
}

function helpMe() {

	alert("Click/Touch the Code Snippet to Copy it to your Clipboard..");
}

function reLoader() {

	setTimeout("location.reload();", 120000);
}

function copyAPI() {

	/* get the text field.. */
	var copyText = document.getElementById("apiCODE");

	/* select the text field.. */
	copyText.select();

	/* copy the text inside the text field.. */
	document.execCommand("copy");

	/* alert the copied text.. */
	alert("Snippet Copied!");

	copyText.value;
}

function logoFadeOut() {

	document.getElementById('titleText').style.opacity = '0.1';
}

function logoFadeStart() {

	setTimeout(logoFadeOut, 120000);
}

function logoFadeIn() {

	document.getElementById('titleText').style.opacity = '0.1';
}

function logoFadeInFull() {

	document.getElementById('titleText').style.opacity = '1.0';
}

function logoFade() {

	logoFadeIn();
	setTimeout(logoFadeOut, 500);
}

function toggleMenu() {

	var menuStat = document.getElementById('xmenu').style.display;

	if ( menuStat = 'none' ) {

		document.getElementById('xmenu').style.display = 'block';
		document.getElementById('titleText').style.opacity = '0.0';

	} else if ( menuStat = 'block' ) {

		document.getElementById('xmenu').style.display = 'none';
		document.getElementById('titleText').style.opacity = '1.0';
	}
}

function toggleMenu() {

	var menuStat = document.getElementById('xmenu').style.display;

	if ( menuStat = 'none' ) {

		document.getElementById('xmenu').style.display = 'block';
		document.getElementById('titleText').style.opacity = '0.0';
		document.getElementById('opt2Text').style.opacity = '0.0';
		document.getElementById('opt3Text').style.opacity = '0.0';

	} else if ( menuStat = 'block' ) {

		document.getElementById('xmenu').style.display = 'none';
		document.getElementById('titleText').style.opacity = '1.0';
		document.getElementById('opt2Text').style.opacity = '1.0';
		document.getElementById('opt3Text').style.opacity = '1.0';
	}
}

function hideMenu() {

		document.getElementById('xmenu').style.display = 'none';
		document.getElementById('titleText').style.opacity = '1.0';
		document.getElementById('opt2Text').style.opacity = '1.0';
		document.getElementById('opt3Text').style.opacity = '1.0';	
}

function closeApp() {

	setTimeout('window.close();', 500);
}
