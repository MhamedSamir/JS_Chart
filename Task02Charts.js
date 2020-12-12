//Names
var FirstName = document.getElementById("Firstname");
var SecondName = document.getElementById("Secdname");
var ThirdName = document.getElementById("Thirdname");
var ForthName = document.getElementById("Forthname");
//colors
var FirstColor = document.getElementById("Firstcolor");
var SecondColor = document.getElementById("Secondcolor");
var ThirdColor = document.getElementById("Thirdcolor");
var ForthColor = document.getElementById("Forthcolor");
//Numbers Nforth
var FirstNum = document.getElementById("Nfirst");
var SecondNum = document.getElementById("Nsecond");
var ThirdNum = document.getElementById("Nthird");
var ForthNum = document.getElementById("Nforth");
//-----------------------------------------------------------
var canvas = document.getElementById("MyCanvas");
var ctx = canvas.getContext("2d");
var g = document.getElementById("container");
g.setAttributeNS(null, "display", "none");

document.getElementById("btnDraw").addEventListener("click", check)








function check(e)

{
    canvas.width = canvas.width;
    e.preventDefault()
    if (FirstName.value == "" || SecondName.value == "" || ThirdName.value == "" || ForthName.value == "" ||
        FirstNum.value == "" || SecondNum.value == "" || ThirdNum.value == "" || ForthNum.value == "") {

        document.getElementById("checkDiv").innerHTML = "Please Enter All Values";

    } else {

        document.getElementById("container").style.visibility = "hidden";
        ClearContainer()
        if (document.getElementById("PieChart").checked) {
            PieChart(e)

        }
        if (document.getElementById("DoughChart").checked) {
            DoughuntChart(e)

        }
        if (document.getElementById("LineChart").checked) {
            document.getElementById("container").style.visibility = "visible";
            lineChart(e)

        }
        if (document.getElementById("BarChart").checked) {
            ClearContainer()
            DrawBarChart(e)

        }
        if (document.getElementById("PieChart").checked || document.getElementById("LineChart").checked ||
            document.getElementById("DoughChart").checked || document.getElementById("BarChart").checked) {
            document.getElementById("checkDiv").innerHTML = "Ok";
            document.getElementById("checkDiv").style.backgroundColor = "green"
        }
    }



}

function CountPersentage(e) {
    e.preventDefault();
    var sum = parseInt(FirstNum.value) + parseInt(SecondNum.value) +
        parseInt(ThirdNum.value) + parseInt(ForthNum.value);

    return sum;

}


function PieChart(e) {

    e.preventDefault();
    var x = CountPersentage(e)
    var p1 = (parseInt(FirstNum.value) / x) * 2 * Math.PI;
    var per = (parseInt(FirstNum.value) / x) * 100;
    DrawArc(230, 120, 100, 0, p1, FirstColor.value, per.toFixed(1) + "%", (Math.cos((p1 + 0) / 2) * 100 * 0.5) + 230, (Math.sin((p1 + 0) / 2) * 100 * 0.5) + 120);

    var p2 = (parseInt(SecondNum.value) / x) * 2 * Math.PI;
    DrawArc(230, 120, 100, p1, (p1 + p2), SecondColor.value,
        (((parseInt(SecondNum.value) / x) * 100).toFixed(1)) + "%", (Math.cos((p1 + (p1 + p2)) / 2) * 100 * 0.5) + 210, (Math.sin((p1 + (p1 + p2)) / 2) * 100 * 0.5) + 120)

    var p3 = (parseInt(ThirdNum.value) / x) * 2 * Math.PI;
    var per3 = (parseInt(ThirdNum.value) / x) * 100;

    DrawArc(230, 120, 100, (p2 + p1), (p2 + p1 + p3), ThirdColor.value, per3.toFixed(1) + "%", (Math.cos((p2 + p1 + p2 + p1 + p3) / 2) * 100 * 0.5) + 220, (Math.sin((p2 + p1 + p2 + p1 + p3) / 2) * 100 * 0.5) + 120)
    var per4 = ((parseInt(ForthNum.value) / x) * 100).toFixed(1);
    DrawArc(230, 120, 100, (p2 + p1 + p3), 2 * Math.PI, ForthColor.value, per4 + "%", (Math.cos((2 * Math.PI + p2 + p1 + p3) / 2) * 100 * 0.5) + 220, (Math.sin((p2 + p1 + p3 + 2 * Math.PI) / 2) * 100 * 0.5) + 120)


}



function DoughuntChart(e) {

    e.preventDefault();
    var x = CountPersentage(e)
    var p1 = (parseInt(FirstNum.value) / x) * 2 * Math.PI;
    var per = (parseInt(FirstNum.value) / x) * 100;

    DrawArc2(460, 120, 100, 0, p1, FirstColor.value, per.toFixed(1) + "%", (Math.cos((p1 + 0) / 2) * 100 * 0.5) + 460, (Math.sin((p1 + 0) / 2) * 100 * 0.5) + 120);
    var p2 = (parseInt(SecondNum.value) / x) * 2 * Math.PI;
    DrawArc2(460, 120, 100, p1, (p2 + p1), SecondColor.value, (((parseInt(SecondNum.value) / x) * 100).toFixed(1)) + "%", (Math.cos((p1 + (p1 + p2)) / 2) * 100 * 0.5) + 440, (Math.sin((p1 + (p1 + p2)) / 2) * 100 * 0.5) + 120);
    var p3 = (parseInt(ThirdNum.value) / x) * 2 * Math.PI;
    var per3 = (parseInt(ThirdNum.value) / x) * 100;
    DrawArc2(460, 120, 100, (p2 + p1), (p2 + p1 + p3), ThirdColor.value, per3.toFixed(1) + "%", (Math.cos((p2 + p1 + p2 + p1 + p3) / 2) * 100 * 0.5) + 445, (Math.sin((p2 + p1 + p2 + p1 + p3) / 2) * 100 * 0.5) + 120);
    var per4 = ((parseInt(ForthNum.value) / x) * 100).toFixed(1);
    DrawArc2(460, 120, 100, (p2 + p1 + p3), 2 * Math.PI, ForthColor.value, per4 + "%", (Math.cos((2 * Math.PI + p2 + p1 + p3) / 2) * 100 * 0.5) + 460, (Math.sin((p2 + p1 + p3 + 2 * Math.PI) / 2) * 100 * 0.5) + 120);
}




function DrawArc(x, y, r, stAng, EndAng, color, txt, txtX, txtY) {

    ctx.beginPath()
    ctx.arc(x, y, r, stAng, EndAng, false)
    ctx.fillStyle = color;
    ctx.lineTo(x, y)
    ctx.fill()
    ctx.fillStyle = "white";
    ctx.font = "12px Arial";
    ctx.fillText(txt, txtX, txtY)
    ctx.closePath()



}


function DrawArc2(x, y, r, stAng, EndAng, color, txt, txtX, txtY) {


    DrawArc(x, y, r, stAng, EndAng, color, txt, txtX, txtY)
    DrawDoughnt(x, y);

}


function DrawDoughnt(x, y) {



    ctx.beginPath()
    ctx.arc(x, y, 28, 0, 2 * Math.PI, false)
    ctx.fillStyle = "white";
    ctx.fill()
    ctx.closePath()

}




/*Draw SVG--------------------------------*/
var svg = document.getElementsByTagName("svg")[0];

function lineChart(e) {
    e.preventDefault()
    g.setAttributeNS(null, "display", "true");
    var sum = CountPersentage(e);
    let per1 = (FirstNum.value / sum * 100).toFixed(1) * 2;
    let per2 = (SecondNum.value / sum * 100).toFixed(1) * 2;
    let per3 = (ThirdNum.value / sum * 100).toFixed(1) * 2;
    let per4 = (ForthNum.value / sum * 100).toFixed(1) * 2;
    setTrackText()
    RemoveCircle()
    RemoveCircle()
    RemoveCircle()
    DrawCircle(120, (-per1 + 200) + 100, 2, FirstColor.value, document.getElementById("container"))
    DrawCircle(170, (-per2 + 200) + 100, 2, SecondColor.value, document.getElementById("container"))
    DrawCircle(230, (-per3 + 200) + 100, 2, ThirdColor.value, document.getElementById("container"))
    DrawCircle(280, (-per4 + 200) + 100, 2, ForthColor.value, document.getElementById("container"))

    DrawPolyLine(120, (-per1 + 200) + 100, 170, (-per2 + 200) + 100, 230, (-per3 + 200) + 100, 280, (-per4 + 200) + 100)
    //----------------------------------------RectBar


}

function DrawCircle(cx, cy, r, color, parent) {


    var element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    element.setAttributeNS(null, 'cx', cx);
    element.setAttributeNS(null, 'cy', cy);
    element.setAttributeNS(null, 'r', r);
    element.setAttributeNS(null, 'fill', color);
    // svg.appendChild(element);
    parent.appendChild(element);
}


function DrawPolyLine(x1, y1, x2, y2, x3, y3, x4, y4) {

    var poly = document.getElementById("MyPoly");

    poly.setAttributeNS(null, "points", "" + x1 + "," + y1 + "" + " " + x2 + "," + y2 + " " + "" + x3 + "," + y3 + " " + "" + x4 + "," + y4 + "");

}

function RemoveCircle() {
    var allCircles = document.getElementsByTagName('circle');
    for (let i = 0; i < allCircles.length; i++) {
        let parent = allCircles[i].parentNode;
        parent.removeChild(allCircles[i]);
    }


}


function setTrackText() {
    document.getElementById("txtTrack1").innerHTML = FirstName.value;
    document.getElementById("txtTrack2").innerHTML = SecondName.value;
    document.getElementById("txtTrack3").innerHTML = ThirdName.value;
    document.getElementById("txtTrack4").innerHTML = ForthName.value;


}





function DrawBarChart(e) {

    e.preventDefault()
    var element = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    var element2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    element2.setAttributeNS(null, "x", 560)
    element2.setAttributeNS(null, "y", 80)
    element2.setAttributeNS(null, "width", 280)
    element2.setAttributeNS(null, "height", 250)
    element2.setAttributeNS(null, "fill", "none")
    element2.setAttributeNS(null, "stroke", "#000000")
    element2.setAttributeNS(null, "stroke-width", "3")
    document.getElementById("container2").appendChild(element2);
    //svg.appendChild(element2)
    //rect
    element.setAttributeNS(null, "points", "" + 600 + "," + 100 + "" + " " + 600 + "," + 300 + " " + "" + 800 + "," + 300 + " " + "");
    element.setAttributeNS(null, "fill", "none")
    element.setAttributeNS(null, "stroke", "black")
    element.setAttributeNS(null, "stroke-width", 1.5)
    // svg.appendChild(element)
    document.getElementById("container2").appendChild(element);
    //Numbers
    AddNumbers(570, 105, "100")
    AddNumbers(570, 125, "90")
    AddNumbers(570, 145, "80")
    AddNumbers(570, 165, "70")
    AddNumbers(570, 185, "60")
    AddNumbers(570, 205, "50")
    AddNumbers(570, 225, "40")
    AddNumbers(570, 245, "30")
    AddNumbers(570, 265, "20")
    AddNumbers(570, 285, "10")
    AddNumbers(570, 303, "0")
    //Text of tracks
    AddNumbers(610, 320, FirstName.value)
    AddNumbers(670, 320, SecondName.value)
    AddNumbers(710, 320, ThirdName.value)
    AddNumbers(770, 320, ForthName.value)

    AddSmallArc(600, 100, 2)
    AddSmallArc(600, 120, 2)
    AddSmallArc(600, 140, 2)
    AddSmallArc(600, 160, 2)
    AddSmallArc(600, 180, 2)
    AddSmallArc(600, 200, 2)
    AddSmallArc(600, 220, 2)
    AddSmallArc(600, 240, 2)
    AddSmallArc(600, 260, 2)
    AddSmallArc(600, 280, 2)
    AddSmallArc(600, 300, 2)
    AddSmallArc(620, 300, 2)
    AddSmallArc(670, 300, 2)
    AddSmallArc(730, 300, 2)
    AddSmallArc(780, 300, 2)

    AddRectsTOChart();

}


function AddNumbers(x, y, text) {
    var elementText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    elementText.setAttributeNS(null, "x", x)
    elementText.setAttributeNS(null, "y", y)
    // font: bold 30px sans-serif
    elementText.setAttributeNS(null, "class", "text")
    elementText.innerHTML = text;
    document.getElementById("container2").appendChild(elementText);
    //svg.appendChild(elementText)
    //----------





}

function AddSmallArc(x, y, r) {
    var element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    element.setAttributeNS(null, "cx", x)
    element.setAttributeNS(null, "cy", y)
    element.setAttributeNS(null, "r", r)
    document.getElementById("container2").appendChild(element);


}


function DrawRectBar(x, y, w, h, color) {

    var element2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    element2.setAttributeNS(null, "x", x)
    element2.setAttributeNS(null, "y", y)
    element2.setAttributeNS(null, "width", w)
    element2.setAttributeNS(null, "height", h)
    element2.setAttributeNS(null, "fill", color)
    element2.setAttributeNS(null, "stroke", "black")
    element2.setAttributeNS(null, "stroke-width", "1")
    document.getElementById("container2").appendChild(element2);

}




function AddRectsTOChart() {

    var sum = parseInt(FirstNum.value) + parseInt(SecondNum.value) +
        parseInt(ThirdNum.value) + parseInt(ForthNum.value);
    var per1 = (FirstNum.value / sum * 100).toFixed(1) * 2;
    var per2 = (SecondNum.value / sum * 100).toFixed(1) * 2;
    var per3 = (ThirdNum.value / sum * 100).toFixed(1) * 2;
    var per4 = (ForthNum.value / sum * 100).toFixed(1) * 2;
    //Bars
    DrawRectBar(620, (-per1 + 200) + 100, 20, per1, FirstColor.value)
    DrawRectBar(670, (-per2 + 200) + 100, 20, per2, SecondColor.value)
    DrawRectBar(720, (-per3 + 200) + 100, 20, per3, ThirdColor.value)
    DrawRectBar(770, (-per4 + 200) + 100, 20, per4, ForthColor.value)

    //small circls aside
    DrawCircle(870, 200, 5, FirstColor.value, document.getElementById("container2"))
    DrawCircle(870, 220, 5, SecondColor.value, document.getElementById("container2"))
    DrawCircle(870, 240, 5, ThirdColor.value, document.getElementById("container2"))
    DrawCircle(870, 260, 5, ForthColor.value, document.getElementById("container2"))
    //text aside + %
    AddNumbers(880, 200, FirstName.value + " " + (per1 / 2) + "%")
    AddNumbers(880, 225, SecondName.value + " " + (per2 / 2) + "%")
    AddNumbers(880, 245, ThirdName.value + " " + (per3 / 2) + "%")
    AddNumbers(880, 265, ForthName.value + " " + (per4 / 2) + "%")


}
AddContainer2ToSvg()

function AddContainer2ToSvg() {

    var container = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    container.setAttributeNS(null, "id", "container2")
    svg.appendChild(container)
}

function ClearContainer() {

    while (document.getElementById("container2").firstChild) {
        document.getElementById("container2").removeChild(document.getElementById("container2").firstChild);

    }



}
