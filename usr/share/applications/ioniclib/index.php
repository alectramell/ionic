<?php
	$xtitle = 'IONIC v1.0';
	$xopt1 = 'NEW';
	$xopt2 = 'LOAD';
	$xopt3 = 'EXIT';
	$xrandom = rand(1, 2);

	if ( $xrandom == 1 ) {

		$xorb = 'orb';

	} else {

		$xorb = 'orb2';
	}
?>
<html>
<head>
<title>
<?php echo $xtitle; ?>
</title>
<link type="image/ico" rel="icon" href="img/favicon.ico">
<link id="xbody" type="text/css" rel="stylesheet" href="css/main.css">
<script type="text/javascript" src="js/index.js"></script>
</head>
<body onload="mainTheme();reLoader();">

<!-- titleText ALT:  onmouseover="this.style.color = '#A7A7A7'; -->

<font id="titleText" onmouseover="this.style.color = '#ffffff';this.style.left = '85px';this.style.background = '#000000';" onmouseout="this.style.color = '#ffffff';this.style.left = '35px';this.style.background = '#181818';" onclick="toggleMenu();showGenes();"><?php echo $xopt1; ?></font>

<font id="opt2Text" onmouseover="this.style.color = '#ffffff';this.style.left = '85px';this.style.background = '#000000';" onmouseout="this.style.color = '#ffffff';this.style.left = '35px';this.style.background = '#181818';" onclick="toggleMenu();"><?php echo $xopt2; ?></font>

<font id="opt3Text" onmouseover="this.style.color = '#ffffff';this.style.left = '85px';this.style.background = '#270000';" onmouseout="this.style.color = '#ffffff';this.style.left = '35px';this.style.background = '#181818';" onclick="closeApp();"><?php echo $xopt3; ?></font>

<!-- in-menu title text -->

<font id="geneTitle" style="display:none;">Select Your Family Gene</font>
<font id="geneSteps" style="display:none;">Profile Setup 1 of 3</font>

<!-- in-menu icons buttons.. -->

<div id="genePool">
<img id="geneA" src="img/geneA.png" title="The Poseidon Gene" onmouseover="this.style = 'width:139px;height:139px;border:5px solid #0048ff;border-radius: 20px;background:#000000;padding:5px 7px;z-index:4;';" onmouseout="this.style = 'width:139px;height:139px;border:5px solid #4c4c4c;border-radius: 20px;background:#000000;padding:5px 7px;z-index:4;';" onclick="stepTwoGeneA();hideAllGenes();" style="display:none;">
<img id="geneB" src="img/geneB.png" title="The Gaia Gene" onmouseover="this.style = 'width:139px;height:139px;border:5px solid #7eff00;border-radius: 20px;background:#000000;padding:5px 7px;z-index:4;';" onmouseout="this.style = 'width:139px;height:139px;border:5px solid #4c4c4c;border-radius: 20px;background:#000000;padding:5px 7px;z-index:4;';" onclick="stepTwoGeneB();hideAllGenes();" style="display:none;">
<img id="geneC" src="img/geneC.png" title="The Hedes Gene" onmouseover="this.style = 'width:139px;height:139px;border:5px solid #ff0f0f;border-radius: 20px;background:#000000;padding:5px 7px;z-index:4;';" onmouseout="this.style = 'width:139px;height:139px;border:5px solid #4c4c4c;border-radius: 20px;background:#000000;padding:5px 7px;z-index:4;';" onclick="stepTwoGeneC();hideAllGenes();" style="display:none;">
</div>

<!-- gender-menu opetions -->

<div id="geneXY">
<img id="femaleOpt" src="img/female.png" style="display:none;" onmouseover="this.style = 'position:absolute;top:35%;left:50%;width:139px;height:139px;border:5px solid #ff4a80;border-radius: 20px;background:#000000;padding:5px 7px;opacity:1.0;z-index:5;';" onmouseout="this.style = 'position:absolute;top:35%;left:50%;width:139px;height:139px;border:5px solid #4c4c4c;border-radius: 20px;background:#000000;padding:5px 7px;opacity:1.0;z-index:5;';" onclick="openUserAttsFemale();">
<img id="maleOpt" src="img/male.png" style="display:none;" onmouseover="this.style = 'position:absolute;top:35%;left:30%;width:139px;height:139px;border:5px solid #30aefe;border-radius: 20px;background:#000000;padding:5px 7px;opacity:1.0;z-index:5;';" onmouseout="this.style = 'position:absolute;top:35%;left:30%;width:139px;height:139px;border:5px solid #4c4c4c;border-radius: 20px;background:#000000;padding:5px 7px;opacity:1.0;z-index:5;';" onclick="openUserAttsMale();">
</div>

<div id="userAtts" style="display:none;">
<input id="newUserName" type="text" placeholder="Gamer Tag" name="xname"></input>
<input id="newUserWorld" type="text" placeholder="World Title" name="xword"></input>
<input id="newUserPin" type="password" placeholder="4 digit pin" name="xpin"></input>
<button id="newUserSubmit" type="Submit" name="submit" onmouseover="this.style.background = '#000000';this.style.color = '#ffffff';" onmouseout="this.style.background = '#4c4c4c';this.style.color = '#ffffff';">CREATE</button>
</div>

<img id="xmenu" src="img/menuBox.png" style="display:none;" onclick="hideGenes();hideMenu();">

<img id="<?php echo $xorb; ?>" src="img/orb.png" style="display:none;">

</body>
</html>
