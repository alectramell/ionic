<?php
	$xtitle = 'IONIC v1.0';
	$xopt1 = 'BUILD';
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

<!-- in-menu icons buttons.. -->

<img id="geneA" src="img/geneA.png" title="The Poseidon Gene" style="display:none;">
<img id="geneB" src="img/geneB.png" title="The Gaia Gene" style="display:none;">
<img id="geneC" src="img/geneC.png" title="The Hedes Gene" style="display:none;">

<img id="xmenu" src="img/menuBox.png" style="display:none;" onclick="hideGenes();hideMenu();">

<img id="<?php echo $xorb; ?>" src="img/orb.png" style="display:none;">

</body>
</html>
