window.addEventListener('DOMContentLoaded',init,false);

function init() {
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', powerFocus, false)
    buttons[1].addEventListener('click', colorRed, false)
    buttons[2].addEventListener('click', colorBlue, false)
    buttons[3].addEventListener('click', colorGreen, false)
    buttons[4].addEventListener('click', widthThin, false)
    buttons[5].addEventListener('click', widthNorm, false)
    buttons[6].addEventListener('click', widthThick, false)
    buttons[7].addEventListener('click', changeOrder, false)
    buttons[8].addEventListener('click', keepOrder, false)
}
    
    function powerFocus() {
        var switches = document.getElementsByTagName( "button")
        for (var i = 0; i < switches.length; i++) {
            if (switches[i].className === "on") {
                switches[i].classList.replace("on", "off")
                }
            else {
                if (switches[i].className === "off") {
                    switches[i].classList.replace("off", "on");
            }
            }
        }
    }
    function colorRed() {
    var paintRed = document.getElementsByTagName("button")
        for (var i = 0; i < paintRed.length; i++) {
            if (paintRed[i].className !== "red"  || paintRed[i].className !== "n") {
                paintRed[i].classList.replace(paintRed[i].className, "n");
            }
            if (paintRed[i].className === "n") {
                paintRed[i].classList.replace("n", "red");
            }
            else {
                if (paintRed[i].className === "red") {
                    paintRed[i].classList.replace("red", "n");
                }
            }
        }
    }
    function colorBlue() {
    var paintBlue = document.getElementsByTagName("button")
        for (var i = 0; i < paintBlue.length; i++) {
            if (paintBlue[i].className !== "blue" || paintBlue[i].className !== "n") {
                paintBlue[i].classList.replace(paintBlue[i].className, "n");
            }
            if (paintBlue[i].className === "n") {
                paintBlue[i].classList.replace("n", "blue");
            }
            else {
                if (paintBlue[i].className === "blue") {
                    paintBlue[i].classList.replace("blue", "n");
                }
            }
        }
    }
    function colorGreen() {
    var paintGreen = document.getElementsByTagName("button")
        for (var i = 0; i < paintGreen.length; i++) {
            if (paintGreen[i].className !== "green" || paintGreen[i].className !== "n") {
                paintGreen[i].classList.replace(paintGreen[i].className, "n");
            }
            if (paintGreen[i].className === "n") {
                paintGreen[i].classList.replace("n", "green");
            }
            else {
                if (paintGreen[i].className === "green") {
                    paintGreen[i].classList.remove("green", "n");
                }
            }
        }
    }
    function widthThin() {
    var widthThin = document.getElementsByTagName("button")
        for(var i = 0; i < widthThin.length; i++) {
            if (widthThin[i].className !== "thin" || widthThin[i].className !== "n") {
                widthThin[i].classList.replace(widthThin[i].className, "n");
            }
            if (widthThin[i].className === "n") {
                widthThin[i].classList.replace("n", "thin");
            }
            else {
                if (widthThin[i].className === "thin") {
                    widthThin[i].classList.replace("thin", "n");
                }
            }
        }
    }
    function widthNorm() {
    var widthNorm = document.getElementsByTagName("button")
        for(var i = 0; i < widthNorm.length; i++) {
            if (widthNorm[i].className !== "n") {
                widthNorm[i].classList.replace(widthNorm[i].className, "n");
            }
        }
    }
    function widthThick() {
    var widthThick = document.getElementsByTagName("button")
        for(var i = 0; i < widthThick.length; i++) {
            if (widthThick[i].className !== "thick" || widthThick[i].className !== "n") {
                widthThick[i].classList.replace(widthThick[i].className, "n");
            }
            if (widthThick[i].className === "n") {
                widthThick[i].classList.replace("n", "thick");
            }
            else {
                if (widthThick[i].className === "thick") {
                    widthThick[i].classList.replace("thick", "n");
                }
            }
        }
    }
    function keepOrder() {
        const element = document.getElementById('H');
        element.tabIndex = 1;
        const element1 = document.getElementById('BF');
        element1.tabIndex = 2;
        const element2 = document.getElementById('RS');
        element2.tabIndex = 3;
        const element3 = document.getElementById('WAIM');
        element3.tabIndex = 4;
        const element4 = document.getElementById('AFI');
        element4.tabIndex = 5;
        const element5 = document.getElementById('AFT');
        element5.tabIndex = 6;
        const element6 = document.getElementById('ADR');
        element6.tabIndex = 7;
        const element7 = document.getElementById('AFO');
        element7.tabIndex = 8;
        const element8 = document.getElementById('Acon');
        element8.tabIndex = 9;
        const element9 = document.getElementById('FI');
        element9.tabIndex = 10;
        const element10 = document.getElementById('TO');
        element10.tabIndex = 11;
        const element11 = document.getElementById('RB');
        element11.tabIndex = 12;
        const element12 = document.getElementById('BB');
        element12.tabIndex = 13;
        const element13 = document.getElementById('GB');
        element13.tabIndex = 14;
        const element14 = document.getElementById('TB');
        element14.tabIndex = 15;
        const element15 = document.getElementById('RegB');
        element15.tabIndex = 16;
        const element16 = document.getElementById('ThB');
        element16.tabIndex = 17;
        const element17 = document.getElementById('WCAG');
        element17.tabIndex = 18;
        const element18 = document.getElementById('FT');
        element18.tabIndex = 19;
        const element19 = document.getElementById('DR');
        element19.tabIndex = 20;
        const element20 = document.getElementById('FO');
        element20.tabIndex = 21;
        const element21 = document.getElementById('wrong');
        element21.tabIndex = 22;
        const element22 = document.getElementById('right');
        element22.tabIndex = 23;
        const element23 = document.getElementById('con');
        element23.tabIndex = 24;
        const element24 = document.getElementById('WAIM2');
        element24.tabIndex = 25;
    }
    function changeOrder() {
    const element = document.getElementById('H');
    element.tabIndex = 12;
    const element1 = document.getElementById('BF');
    element1.tabIndex = 10;
    const element2 = document.getElementById('RS');
    element2.tabIndex = 3;
    const element3 = document.getElementById('WAIM');
    element3.tabIndex = 16;
    const element4 = document.getElementById('AFI');
    element4.tabIndex = 1;
    const element5 = document.getElementById('AFT');
    element5.tabIndex = 4;
    const element6 = document.getElementById('ADR');
    element6.tabIndex = 7;
    const element7 = document.getElementById('AFO');
    element7.tabIndex = 22;
    const element8 = document.getElementById('Acon');
    element8.tabIndex = 25;
    const element9 = document.getElementById('FI');
    element9.tabIndex = 24;
    const element10 = document.getElementById('TO');
    element10.tabIndex = 2;
    const element11 = document.getElementById('RB');
    element11.tabIndex = 21;
    const element12 = document.getElementById('BB');
    element12.tabIndex = 14;
    const element13 = document.getElementById('GB');
    element13.tabIndex = 17;
    const element14 = document.getElementById('TB');
    element14.tabIndex = 15;
    const element15 = document.getElementById('RegB');
    element15.tabIndex = 6;
    const element16 = document.getElementById('ThB');
    element16.tabIndex = 5;
    const element17 = document.getElementById('WCAG');
    element17.tabIndex = 8;
    const element18 = document.getElementById('FT');
    element18.tabIndex = 19;
    const element19 = document.getElementById('DR');
    element19.tabIndex = 20;
    const element20 = document.getElementById('FO');
    element20.tabIndex = 18;
    const element21 = document.getElementById('wrong');
    element21.tabIndex = 11;
    const element22 = document.getElementById('right');
    element22.tabIndex = 13;
    const element23 = document.getElementById('con');
    element23.tabIndex = 23;
    const element24 = document.getElementById('WAIM2');
    element24.tabIndex = 9;
    }