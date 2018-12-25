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
		resetSteps();
		hideUserAtts();	
}

function closeApp() {

	setTimeout('window.close();', 500);
}

function showGenes() {

	var geneAstat = document.getElementById('geneA').style.display;
	var geneBstat = document.getElementById('geneB').style.display;
	var geneCstat = document.getElementById('geneC').style.display;
	var geneTextStat = document.getElementById('geneTitle').style.display;
	var geneStepStat = document.getElementById('geneSteps').style.display;

	document.getElementById('geneA').style.zIndex = '5';
	document.getElementById('geneB').style.zIndex = '5';
	document.getElementById('geneC').style.zIndex = '5';

	if ( geneAstat = "none" ) {

		document.getElementById('geneA').style.display = "block";

	} else {

		document.getElementById('geneA').style.display = "none";
	}

	if ( geneBstat = "none" ) {

		document.getElementById('geneB').style.display = "block";

	} else {

		document.getElementById('geneB').style.display = "none";
	}

	if ( geneCstat = "none" ) {

		document.getElementById('geneC').style.display = "block";

	} else {

		document.getElementById('geneC').style.display = "none";
	}

	if ( geneTextStat = "none" ) {

		document.getElementById('geneTitle').style.display = "block";

	} else {

		document.getElementById('geneTitle').style.display = "none";
	}

	if ( geneStepStat = "none" ) {

		document.getElementById('geneSteps').style.display = "block";

	} else {

		document.getElementById('geneSteps').style.display = "none";
	}
}

function hideGenes() {

	var geneAstat = document.getElementById('geneA').style.display;
	var geneBstat = document.getElementById('geneB').style.display;
	var geneCstat = document.getElementById('geneC').style.display;
	var geneTextStat = document.getElementById('geneTitle').style.display;
	var geneStepStat = document.getElementById('geneSteps').style.display;

	if ( geneAstat = "block" ) {

		document.getElementById('geneA').style.display = "none";

	} else {

		document.getElementById('geneA').style.display = "block";
	}

	if ( geneBstat = "block" ) {

		document.getElementById('geneB').style.display = "none";

	} else {

		document.getElementById('geneB').style.display = "block";
	}

	if ( geneCstat = "block" ) {

		document.getElementById('geneC').style.display = "none";

	} else {

		document.getElementById('geneC').style.display = "block";
	}

	if ( geneTextStat = "block" ) {

		document.getElementById('geneTitle').style.display = "none";

	} else {

		document.getElementById('geneTitle').style.display = "block";
	}

	if ( geneStepStat = "block" ) {

		document.getElementById('geneSteps').style.display = "none";

	} else {

		document.getElementById('geneSteps').style.display = "block";
	}
}

function stepTwoGeneA() {

	var geneTextStat = document.getElementById('geneTitle').style.display;
	var geneStepStat = document.getElementById('geneSteps').style.display;

	document.getElementById('geneA').style.zIndex = '1';

	if ( geneTextStat = "none" ) {

		document.getElementById('geneTitle').style.display = "block";
		document.getElementById('femaleOpt').style.display = "block";
		document.getElementById('maleOpt').style.display = "block";

	} else {

		document.getElementById('geneTitle').style.display = "none";
		document.getElementById('femaleOpt').style.display = "none";
		document.getElementById('maleOpt').style.display = "none";
	}

	if ( geneStepStat = "none" ) {

		document.getElementById('geneSteps').style.display = "block";
		document.getElementById('femaleOpt').style.display = "block";
		document.getElementById('maleOpt').style.display = "block";

	} else {

		document.getElementById('geneSteps').style.display = "none";
		document.getElementById('femaleOpt').style.display = "none";
		document.getElementById('maleOpt').style.display = "none";
	}

	document.getElementById('geneTitle').innerHTML = 'The Poseidon Gene';
	document.getElementById('geneSteps').innerHTML = 'Profile Setup 2 of 3, Select a Gender..';
	document.getElementById('geneA').style.display = 'none';
	document.getElementById('geneB').style.display = 'none';
	document.getElementById('geneC').style.display = 'none';
}

function stepTwoGeneB() {

	var geneTextStat = document.getElementById('geneTitle').style.display;
	var geneStepStat = document.getElementById('geneSteps').style.display;

	if ( geneTextStat = "none" ) {

		document.getElementById('geneTitle').style.display = "block";
		document.getElementById('femaleOpt').style.display = "block";
		document.getElementById('maleOpt').style.display = "block";

	} else {

		document.getElementById('geneTitle').style.display = "none";
		document.getElementById('femaleOpt').style.display = "none";
		document.getElementById('maleOpt').style.display = "none";
	}

	if ( geneStepStat = "none" ) {

		document.getElementById('geneSteps').style.display = "block";
		document.getElementById('femaleOpt').style.display = "block";
		document.getElementById('maleOpt').style.display = "block";

	} else {

		document.getElementById('geneSteps').style.display = "none";
		document.getElementById('femaleOpt').style.display = "none";
		document.getElementById('maleOpt').style.display = "none";
	}

	document.getElementById('geneTitle').innerHTML = 'The Gaia Gene';
	document.getElementById('geneSteps').innerHTML = 'Profile Setup 2 of 3, Select a Gender..';
	document.getElementById('geneA').style.display = 'none';
	document.getElementById('geneB').style.display = 'none';
	document.getElementById('geneC').style.display = 'none';
}

function stepTwoGeneC() {

	var geneTextStat = document.getElementById('geneTitle').style.display;
	var geneStepStat = document.getElementById('geneSteps').style.display;

	if ( geneTextStat = "none" ) {

		document.getElementById('geneTitle').style.display = "block";
		document.getElementById('femaleOpt').style.display = "block";
		document.getElementById('maleOpt').style.display = "block";

	} else {

		document.getElementById('geneTitle').style.display = "none";
		document.getElementById('femaleOpt').style.display = "none";
		document.getElementById('maleOpt').style.display = "none";
	}

	if ( geneStepStat = "none" ) {

		document.getElementById('geneSteps').style.display = "block";
		document.getElementById('femaleOpt').style.display = "block";
		document.getElementById('maleOpt').style.display = "block";

	} else {

		document.getElementById('geneSteps').style.display = "none";
		document.getElementById('femaleOpt').style.display = "none";
		document.getElementById('maleOpt').style.display = "none";
	}

	document.getElementById('geneTitle').innerHTML = 'The Hedes Gene';
	document.getElementById('geneSteps').innerHTML = 'Profile Setup 2 of 3, Select a Gender..';
	document.getElementById('geneA').style.display = 'none';
	document.getElementById('geneB').style.display = 'none';
	document.getElementById('geneC').style.display = 'none';
}

function resetSteps() {

	document.getElementById('geneTitle').innerHTML = 'Select Your Family Gene';
	document.getElementById('geneSteps').innerHTML = 'Profile Setup 1 of 3';
	document.getElementById('femaleOpt').style.display = "none";
	document.getElementById('maleOpt').style.display = "none";
	showAllGenes();
}

function HideGeneA () {
	
	var aStat = document.getElementById('geneA').style.display;

	if ( aStat = "none" ) {

		document.getElementById('geneA').style.display = 'block';

	} else {

		document.getElementById('geneA').style.display = 'none';
	}
}

function HideGeneB () {
	
	var bStat = document.getElementById('geneB').style.display;

	if ( bStat = "none" ) {

		document.getElementById('geneB').style.display = 'block';

	} else {

		document.getElementById('geneB').style.display = 'none';

	}
}

function HideGeneC () {
	
	var cStat = document.getElementById('geneC').style.display;

	if ( cStat = "none" ) {

		document.getElementById('geneC').style.display = 'block';

	} else {

		document.getElementById('geneC').style.display = 'none';

	}
}

function icoGeneA () {
	
	document.getElementById('geneA').style = 'display:none';

}

function icoGeneB () {
	
	document.getElementById('geneB').style = 'display:none';
}

function icoGeneC () {
	
	document.getElementById('geneC').style = 'display:none';
}

function hideAllGenes() {

	document.getElementById('genePool').style.display = 'none';
	document.getElementById('geneXY').style.display = 'block';
}

function showAllGenes() {

	document.getElementById('genePool').style.display = 'block';
}

function openUserAttsMale() {

	document.getElementById('geneSteps').innerHTML = 'Profile Setup 3 of 3, Player Details..';
	document.getElementById('geneXY').style.display = "none";
	document.getElementById('userAtts').style.display = 'block';
}

function openUserAttsFemale() {

	document.getElementById('geneSteps').innerHTML = 'Profile Setup 3 of 3, Player Details..';
	document.getElementById('geneXY').style.display = "none";
	document.getElementById('userAtts').style.display = 'block';
}

function hideUserAtts() {

	document.getElementById('userAtts').style.display = 'none';
}



