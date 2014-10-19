var originalText = "";
function storeOriginal() {
	originalText = document.forms["textAwesome"]["input"].value;
}
function getFonts(){
    var fonts = ['Arial', 'Monospace', 'Times New Roman', 'Verdana'];
    var begin = '<option value=\"';
    var middle = '\">';
    var end = '</option>';
    var options = "";
    for(var i = 0; i < fonts.length; i++){
        options += begin + fonts[i] + middle + fonts[i] + end;
    }
    document.getElementById("font").innerHTML = options;
}

function setTransparent(){
    var textResult= $("#textResult");
    var trans = document.forms["textAwesome"]["transparent"].value; 
    textResult.css("opacity", trans/100);
}

function wordWrap(){
    var textResult= $("#textResult");
    var transform = document.forms["textAwesome"]["wrap"].value;
    textResult.css("word-wrap", document.forms["textAwesome"]["wrap"].checked? transform: "initial");
}

function setText(){
    var textToAwesome = document.forms["textAwesome"]["input"].value;
    document.getElementById("textResult").innerHTML = textToAwesome;
}

function setSize(){
    var textResult= $("#textResult");
    var size = document.forms["textAwesome"]["textSize"].value; 
    textResult.css("font-size", size + "px");
}

function setColor(){
    var textResult= $("#textResult");
    var textColor = document.forms["textAwesome"]["color"].value;
    textResult.css("color", textColor);
}

function randomColor(){
    var textResult= $("#textResult");
    var textColor = "" + 0xFFFFFF*Math.random();
    document.forms["textAwesome"]["color"].value = textColor;
    textResult.css("color", textColor);
}

function setFont(){
    var textResult= $("#textResult");
    var font = document.forms["textAwesome"]["font"].value;
    textResult.css("font-family", font);
}

function setCapitalization(){
	var textToAwesome = document.forms["textAwesome"]["input"].value;
	var capitalization = document.forms["textAwesome"]["capitalization"].value;
	var newText = "";
	if(capitalization === "uppercase"){
		newText = textToAwesome.toUpperCase();
	}else if(capitalization === "lowercase"){
		newText = textToAwesome.toLowerCase();
	}else if(capitalization === "RaNDom"){
		for (var index = 0; index < textToAwesome.length; index++) {
			var capitalize = Math.random() < .5;
			if(capitalize)
				newText += textToAwesome.charAt(index).toUpperCase();
			else
				newText += textToAwesome.charAt(index).toLowerCase();
		}
	}else{
		newText = originalText;
	}
	$("input").val(newText);
	setText();
}

function setShadow(){
    var textResult= $("#textResult");
    var shadow = document.forms["textAwesome"]["shadow"].value + "px ";
    textResult.css("text-shadow", shadow + shadow + "#000");
}

function setTextDeco(textType, id){
	var textResult= $("#textResult");
	var transform = document.forms["textAwesome"][id].value;
	textResult.css(textType, document.forms["textAwesome"][id].checked? transform: "initial");
	

}

function setLineThrough(){
	var textResult= $("#textResult");
	var textToAwesome = document.forms["textAwesome"]["input"].value;
	var strike = document.forms["textAwesome"]["line-through"].value;
	var open = document.forms["textAwesome"]["line-through"].checked? "<strike>": "";
	var close = document.forms["textAwesome"]["line-through"].checked? "</strike>": "";
	document.getElementById("textResult").innerHTML =  open + textToAwesome + close;
}