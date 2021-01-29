var button = document.getElementById("one-button");
var screen = document.getElementById("glitter");
button.onclick = function() {
    button.innerHTML = "And it was all yellow."
    
    for(var i = 1; i < 20; i++) {
        // <span style="--i:n;"></span>
        var randomNumber = Math.floor(Math.random() * 100);
        document.getElementById("glitter").innerHTML += '<span id="dot'+ i + '" style="--i:'+ i +';"></span>'
        //console.log(randomNumber);
        
        
    }
    //button.style.visibility = "hidden";
    console.log(document.getElementById("glitter"));
        
        
};

