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
function showIt() {
  document.getElementById("div1").style.visibility = "visible";
}
setTimeout("showIt()", 1000); // after 1 sec

function showIt2() {
  document.getElementById("div2").style.visibility = "visible";
}
setTimeout("showIt3()", 5000); // after 5 secs
    function showIt3() {
  document.getElementById("div3").style.visibility = "visible";
}
setTimeout("showIt4()", 10000); // after 10 sec
    function showIt4() {
  document.getElementById("div4").style.visibility = "visible";
}
setTimeout("showIt5()", 20000); // after 20 sec
    function showIt5() {
  document.getElementById("div5").style.visibility = "visible";
}
setTimeout("showIt6()", 30000); // after 30 sec
    function showIt6() {
  document.getElementById("div6").style.visibility = "visible";
}
setTimeout("showIt7()", 40000); // after 40 sec
    function showIt7() {
  document.getElementById("div7").style.visibility = "visible";
}
setTimeout("showIt8()", 50000); // after 50 sec
    function showIt8() {
  document.getElementById("div8").style.visibility = "visible";
}
setTimeout("showIt9()", 60000); // after 60 sec
    function showIt9() {
  document.getElementById("div9").style.visibility = "visible";
}
setTimeout("showIt10()", 70000); // after 70 sec
    function showIt10() {
  document.getElementById("div10").style.visibility = "visible";
}
setTimeout("showIt11()", 80000); // after 80 sec
    function showIt11() {
  document.getElementById("div11").style.visibility = "visible";
}
setTimeout("showIt12()", 90000); // after 90 sec
    function showIt12() {
  document.getElementById("div12").style.visibility = "visible";
}
setTimeout("showIt13()", 100000); // after 100 sec
    function showIt13() {
  document.getElementById("div13").style.visibility = "visible";
}
setTimeout("showIt14()", 105000); // after 150 sec
    function showIt14() {
  document.getElementById("div14").style.visibility = "visible";
}
  
function showItPro() {
  document.getElementById("pro-ad").style.visibility = "visible";
}
setTimeout("showItPro()", 10000); // after 1 sec