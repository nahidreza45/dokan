var list=[];
var mot=0;
var shorboMot=0;

function start() {
    var goj=document.getElementById('gojInput').value
    if (goj==="") {
        goj=0;
    }
    else{
        goj=goj;
    }
    var gira=document.getElementById('giraInput').value
    if (gira==="") {
        gira=0;
    }
    else{
        gira=gira;
    }
    var totalCloth=((goj*1)+(gira*0.0625))
    
    if (totalCloth>0) {
        var price=document.getElementById('perGojRateInput').value
        var totalPrice=price*totalCloth
    }
    else{
        var price=document.getElementById('rateInput').value
        var totalPrice=parseInt(price)
        
    }
    list.push(totalPrice)
    var finalPrice= 0;
    for (var i = 0; i < list.length; i++) {
        finalPrice+=list[i]
    }
    
    totalPrice=parseInt(totalPrice)
    finalPrice=parseInt(finalPrice)
    
    
    document.getElementById('mot').innerHTML=totalPrice;
    document.getElementById('sorboMot').innerHTML=finalPrice;
    
    document.getElementById('gojInput').value="";
    document.getElementById('giraInput').value="";
    document.getElementById('perGojRateInput').value="";
    document.getElementById('rateInput').value="";
    
}


function reset() {
    list=[]
    document.getElementById('gojInput').value="";
    document.getElementById('giraInput').value="";
    document.getElementById('perGojRateInput').value="";
    document.getElementById('rateInput').value="";

    document.getElementById('mot').innerHTML="0";
    document.getElementById('sorboMot').innerHTML="0";
    
}

