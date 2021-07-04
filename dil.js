
//==================   SLİDER (SAĞA SOLA KAYDIRMA)  ==================//


var bild1 = document.getElementById("bild1");
var bild2 = document.getElementById("bild2");
var bild3 = document.getElementById("bild3");

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");

var slide = 1;

function next()
{
    slide++; // slide = slide + 1

    
    if(slide == 2) // von slide 1 zu 2 wechseln
    {
        bild2.style.opacity = "0";
        bild2.style.opacity = "100%";

        text1.style.opacity = "0";
        text2.style.opacity = "100%";
    }
    else if(slide == 3) // von slide 2 zu 3 wechseln
    {
        bild2.style.opacity = "0";
        bild3.style.opacity = "100%";

        text2.style.opacity = "0";
        text3.style.opacity = "100%";
    }
    else // von vorne anfangen, slide 3 zu 1 wechseln
    {
        bild3.style.opacity = "0";
        bild1.style.opacity = "100%";

        text3.style.opacity = "0";
        text1.style.opacity = "100%";

        slide = 1;
    }
}

function prev()
{
    slide--; // slide = slide - 1;

    if(slide == 0) // zurückspulen zum 3. Slide
    {
        bild1.style.opacity = "0";
        bild3.style.opacity = "100%";

        text1.style.opacity = "0";
        text3.style.opacity = "100%";

        slide = 3;
    }
    else if(slide == 1) // von slide 2 zu 1 wechseln
    {
        bild2.style.opacity = "0";
        bild1.style.opacity = "100%";

        text2.style.opacity = "0";
        text1.style.opacity = "100%";
    }
    else if(slide == 2) // von slide 3 zu 2 wechseln
    {
        bild3.style.opacity = "0";
        bild2.style.opacity = "100%";

        text3.style.opacity = "0";
        text2.style.opacity = "100%";
    }

}


        //==================   SÄTZE   ==================//


function col(button)
{
    let inhalt  = button.parentElement.getElementsByClassName("inhalt")[0];
    

    if(inhalt.style.maxHeight) // wenn es nicht NULL (undefined) ist (siehe Inline-Style)
    {
        inhalt.style.maxHeight = null; 
    }
    else //wenn maxHeight NULL ist (keine Inline-Style oder maxHeight = null gesetzt)
    {
        inhalt.style.maxHeight = inhalt.scrollHeight + "px";
    }
}







//=====================  COLLAPSE ( GENİŞLEME DARALMA)  =====================//




var aktuell = 0;
var forms = document.getElementsByClassName("form");


function nav(n)
{
    if(schrittCheck(n))
        return;

    forms[aktuell].style.display = "none";
    aktuell += n;
    forms[aktuell].style.display = "flex";
    

    buttonUpdate(n);
}



function buttonUpdate(n)
{
    if(aktuell == 0) // WENN WIR IN ERSTEM SCHRITT SIND
    {
        document.getElementById("zurueck").style.opacity = "0";
    }
    else
    {
        document.getElementById("zurueck").style.opacity = "1";
    }

    if(aktuell == forms.length-1) // WENN WIR IN LETZTEM SCHRITT SIND
    {
        document.getElementById("weiter").innerHTML = "Senden";
    }
    else
    {
        document.getElementById("weiter").innerHTML = "Weiter";
    }
}




function schrittCheck(x)
{
    if(aktuell == forms.length-1 && x == 1) // WENN LETZTER SCHRITT und WENN WEITER GEHEN WILL
    {
        senden();
        return true;
    }
    if(aktuell == 0 && x == -1) // WENN ERSTER SCHRITT und WENN ZURÜCK GEHEN WILL
    {
        return true;
    }

    return false; // alles OKAY

}

function buttonUpdate()
{
    if(aktuell == 0) // WENN WIR IN ERSTEM SCHRITT SIND
    {
        document.getElementById("zurueck").style.opacity = "0";
    }
    else
    {
        document.getElementById("zurueck").style.opacity = "1";
    }

    if(aktuell == forms.length-1) // WENN WIR IN LETZTEM SCHRITT SIND
    {
        document.getElementById("weiter").innerHTML = "Ende";
    }
    else
    {
        document.getElementById("weiter").innerHTML = "Weiter";
    }
}