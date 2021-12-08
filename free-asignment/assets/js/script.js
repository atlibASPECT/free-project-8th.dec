let DarkLight = true
let nav = document.getElementById("nav");
let ball = document.getElementById("ball");

let fr1 = document.getElementById("fr3-1");
let fr2 = document.getElementById("fr3-2");
let fr3 = document.getElementById("fr3-3");
let sr1 = document.getElementById("sr3-1");
let sr2 = document.getElementById("sr3-2");
let sr3 = document.getElementById("sr3-3");

let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");

let foot = document.getElementById("foot");

console.log("hey")

function Darkmode(){
    console.log(DarkLight)
    if (DarkLight = !DarkLight){
        document.body.style.backgroundColor = "white";
        nav.style.backgroundColor = "#342e3750";
        ball.style.left = "24px";
        fr1.style.backgroundColor = "#4f5d75";
        fr2.style.backgroundColor = "#4f5d75";
        fr3.style.backgroundColor = "#4f5d75";
        sr1.style.backgroundColor = "#4f5d75";
        sr2.style.backgroundColor = "#4f5d75";
        sr3.style.backgroundColor = "#4f5d75";
        a1.style.backgroundColor = "#4f5d75";
        a2.style.backgroundColor = "#4f5d75";
        a3.style.backgroundColor = "#4f5d75";
        foot.style.backgroundColor = "#bfc0c0";
    }
    else{
        document.body.style.backgroundColor = "#342e37"
        nav.style.backgroundColor = "#342e3750";
        ball.style.left = "2px";
        fr1.style.backgroundColor = "#b7d7f8d3";
        fr2.style.backgroundColor = "#b7d7f8d3";
        fr3.style.backgroundColor = "#b7d7f8d3";
        sr1.style.backgroundColor = "#b7d7f8d3";
        sr2.style.backgroundColor = "#b7d7f8d3";
        sr3.style.backgroundColor = "#b7d7f8d3";
        a1.style.backgroundColor = "#b7d7f8d3";
        a2.style.backgroundColor = "#b7d7f8d3";
        a3.style.backgroundColor = "#b7d7f8d3";
        foot.style.backgroundColor = "#fafffd";
}
}



