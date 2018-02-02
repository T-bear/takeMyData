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
                window.location.replace("termOfService.html");
            }

        }
    }

}

        ///localy stores the numbers of clicks on a button, should be compressed to one code.
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
                localStorage.clickcount = 1;
            }
            } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
            }
}
function clickCounter2() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount2) {
            localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
            } else {
                localStorage.clickcount2 = 1;
            }
            } else {
            document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
            }
}
function apa(div) {
var num = 1;

setInterval(function() {
  
    if (num < 15) {
      document.getElementById("div" + num).style.visibility = "visible";
      num++;
    };
}, 7000);
}

apa("div")
  
function showItPro() {
  document.getElementById("pro-ad").style.visibility = "visible";
}
setTimeout("showItPro()", 10000); // after 1 sec