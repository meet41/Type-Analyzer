function countWords() {
    var text = document.getElementById("inputField").value;
    var numWords = 0;
    for (var i = 0; i < text.length; i++) 
    {
        var currentCharacter = text[i];
        if (currentCharacter == " ") 
        {
            numWords += 1;
        }
    }
    numWords += 1;
    document.getElementById("show").innerHTML = numWords;
}
function countcharacter()
{
    var text = document.getElementById("inputField").value;
    var numchar = 0;
    var char = 0;
    for(var i = 0;i < text.length;i++){
        var character = text[i];
        if(text[i] != " ")
        {
            char++;
        }
    }
    document.getElementById("show2").innerHTML = char;
}
function countLines()
{
    var text = document.getElementById("inputField").value;
    var lines = 0;
    for(var i = 0;i<text.length;i++)
    {
        var char = text[i];
        if(text[i]=="\n")
        {
            lines++;
        }
    }
    lines+=1;
    document.getElementById("show3").innerHTML = lines;
}