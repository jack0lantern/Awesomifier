function getFonts(){
    var fonts = ['Arial', 'Monospace', '"Times New Roman"', 'Verdana'];
    var begin = '<option value=\"';
    var middle = '\">';
    var end = '</option>';
    var options = "";
    for(var i = 0; i < fonts.length; i++){
        options += begin + fonts[i] + middle + fonts[i] + end;
    }
    document.getElementById("font").innerHTML = options;
}
getFonts();

function setText(){
    var textToAwesome = document.forms["textAwesome"]["input"].value;
    document.getElementById("textResult").innerHTML = textToAwesome;
}

function setSize(){
    var textResult= $("#textResult");
    var size = document.forms["textAwesome"]["textSize"].value; 
    textResult.css("font-size", size + "px");
    document.getElementById("textResult").innerHTML = textToAwesome;
}

function setColor(){
    var textResult= $("#textResult");
    var textColor = document.forms["textAwesome"]["color"].value;
    textResult.css("color", textColor);
    document.getElementById("textResult").innerHTML = textToAwesome;
}

function setFont(){
    var textResult= $("#textResult");
    var font = document.forms["textAwesome"]["font"].value;
    textResult.css("font-family", font);
    document.getElementById("textResult").innerHTML = textToAwesome;
}

function total(){
    var textResult= $("#textResult");
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