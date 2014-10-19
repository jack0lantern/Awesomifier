		function total(){
			var textToAwesome = document.forms["textAwesome"]["input"].value;
			var size = document.forms["textAwesome"]["textSize"].value; 
			var textColor = document.forms["textAwesome"]["color"].value;
			var textResult= $("#textResult");
			document.getElementById("textResult").innerHTML=textToAwesome;
			textResult.css("color", textColor);
			textResult.css("font-size", size + "px");
			//"<p id='textResult' style='color:" + textColor + "; font-size: " + size + "px;' >" + 
		}