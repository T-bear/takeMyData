function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 500);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } 
        else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1 + '%';
            if(width === 100) {
                window.location.replace("findWord.html");
            }

        }
    }

}

