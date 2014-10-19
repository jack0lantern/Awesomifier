var textResult= $("#textResult");

function setText(){
    var textToAwesome = document.forms["textAwesome"]["input"].value;
    document.getElementById("textResult").innerHTML = textToAwesome;
}

function setSize(){
    var size = document.forms["textAwesome"]["textSize"].value; 
    textResult.css("font-size", size + "px");
    document.getElementById("textResult").innerHTML = textToAwesome;
}

function setColor(){
    var textColor = document.forms["textAwesome"]["color"].value;
    textResult.css("color", textColor);
    document.getElementById("textResult").innerHTML = textToAwesome;
}

function setFont(){
    var font = document.forms["textAwesome"]["font"].value;
    textResult.css("font-family", font);
    document.getElementById("textResult").innerHTML = textToAwesome;
}

function setCapitalization(){
	var capitalization = do.forms["textAwesome"]["capitalization"].value;
	var newText = "";
	if(capitalization.equals("uppercase")){
		newText += capitalization.toUpperCase();
	}else if(capitalization.equals("lowercase")){
		newText += capitalization.toLowerCase();
	}else{
		var textLength = capitalization.length();
		for(int index = 0; index < capitalization.length; index++) {
			var capitalize = Math.random() < .5;
			if(capitalize)
				newText += capitalization.charAt(index).toUpperCase();
			else
				newText += capitalization.charAt(index).toLowerCase();
		}
	}
	
	
}
	

function total(){
    var textToAwesome = document.forms["textAwesome"]["input"].value;
    var size = document.forms["textAwesome"]["textSize"].value; 
    var textColor = document.forms["textAwesome"]["color"].value;
    var font = document.forms["textAwesome"]["font"].value;
    
    textResult.css("color", textColor);
    textResult.css("font-size", size + "px");
    textResult.css("font-family", font);
    document.getElementById("textResult").innerHTML = textToAwesome;
        //"<p id='textResult' style='color:" + textColor + "; font-size: " + size + "px;' >" + 
}