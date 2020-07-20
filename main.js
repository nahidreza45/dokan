var list=[];
var mot=0;
var shorboMot=0;

function start() {
    var goj=document.getElementById('gojInput').value
    if (goj==="") {
        goj=0;
    }
    else{
        goj=parseInt(goj);
    }
    var gira=document.getElementById('giraInput').value
    if (gira==="") {
        gira=0;
    }
    else{
        gira=parseInt(gira);
    }
    var totalCloth=goj+(gira*0.0625)
    
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
    
    
    var newParaDis=document.getElementById('paraShow')
    var gojPara= document.createElement("p")
    var giraPara= document.createElement("p")
    var damPara= document.createElement("p")
    var motPara= document.createElement("p")
    var shorboMotPara= document.createElement("p")
    var hr= document.createElement("hr")
    
    gojPara.innerHTML="গজ:"+goj
    giraPara.innerHTML="	&#160 গিরা:"+gira
    damPara.innerHTML="	&#160 দাম:"+price
    motPara.innerHTML="	&#160 মোট:"+totalPrice
    shorboMotPara.innerHTML="	&#160 সর্বমোট:"+finalPrice
    
  
    newParaDis.appendChild(gojPara)
    newParaDis.appendChild(giraPara)
    newParaDis.appendChild(damPara)
    newParaDis.appendChild(motPara)
    newParaDis.appendChild(shorboMotPara)
    newParaDis.appendChild(hr)
   
   
   
   
}


function reset() {
    list=[]
    document.getElementById('gojInput').value="";
    document.getElementById('giraInput').value="";
    document.getElementById('perGojRateInput').value="";
    document.getElementById('rateInput').value="";

    document.getElementById('mot').innerHTML="0";
    document.getElementById('sorboMot').innerHTML="0";
    
    var newParaDis=document.getElementById('paraShow')
    var newHishab=document.createElement("h2")
    newHishab.innerHTML="--নতুন হিসাব--নতুন হিসাব--"
    var hr= document.createElement("hr")
    
    newParaDis.appendChild(newHishab)
    newParaDis.appendChild(hr)
    
}

