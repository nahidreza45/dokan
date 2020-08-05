//Variables for storing data

var list=[];
var mot=0;
var shorboMot=0;

//Function for "Hishab korun" button

function start() {
    
    //Store and modify data from Input tag
    
    var goj=document.getElementById('gojInput').value;
    
    if (goj==="") {
        goj=0;
    }
    else{
        goj=parseFloat(goj);
    }
    
    var gira=document.getElementById('giraInput').value;
    
    if (gira==="") {
        gira=0;
    }
    else{
        gira=parseFloat(gira);
    }
    
    //Making math to get all cloth size and bracket for perfect calculation
    
    var totalCloth=goj+(gira*0.0625);
   
    var price=null;
    var totalPrice=null;
    
    
    if (totalCloth>0) {
        price=document.getElementById('perGojRateInput').value;
        totalPrice=price*totalCloth;
    }
    else{
        price=document.getElementById('rateInput').value;
        
        if (price==="") {
            totalPrice=0;
        } else {
            totalPrice=parseFloat(price);
        }
    }
    
    list.push(totalPrice);
    
    var finalPrice= 0;
    
    //Loop to get sum of the list
    
    for (var i = 0; i < list.length; i++) {
        finalPrice+=list[i];
    }
    
    totalPrice=parseInt(totalPrice);
    finalPrice=parseInt(finalPrice);
    
    //Showing result
    
    document.getElementById('mot').innerHTML=totalPrice;
    document.getElementById('sorboMot').innerHTML=finalPrice;
    
    //Clear all present input value
    
    document.getElementById('gojInput').value="";
    document.getElementById('giraInput').value="";
    document.getElementById('perGojRateInput').value="";
    document.getElementById('rateInput').value="";
    
    //Showing all statements on down if it's value positive or negative
    
    if (totalPrice!==0) {
       
       //Creating and getting access
       
        var newParaDis=document.getElementById('paraShow');
        var gojPara= document.createElement("p");
        var giraPara= document.createElement("p");
        var damPara= document.createElement("p");
        var motPara= document.createElement("p");
        var shorboMotPara= document.createElement("p");
        var hr= document.createElement("hr");
        
        gojPara.innerHTML="গজ:"+goj;
        giraPara.innerHTML="	&#160 গিরা:"+gira;
        damPara.innerHTML="	&#160 দাম:"+price;
        motPara.innerHTML="	&#160 মোট:"+totalPrice;
        shorboMotPara.innerHTML="	&#160 সর্বমোট:"+finalPrice;
        
      
        newParaDis.appendChild(gojPara);
        newParaDis.appendChild(giraPara);
        newParaDis.appendChild(damPara);
        newParaDis.appendChild(motPara);
        newParaDis.appendChild(shorboMotPara);
        newParaDis.appendChild(hr);
    }
   
   
   
}

//Function for "Notun Hishab" button

function reset() {
    
    //Make the list empty for new calculation
    
    list=[];
    
    //Clear all existing value and creat some new elements
    
    document.getElementById('gojInput').value="";
    document.getElementById('giraInput').value="";
    document.getElementById('perGojRateInput').value="";
    document.getElementById('rateInput').value="";

    document.getElementById('mot').innerHTML="0";
    document.getElementById('sorboMot').innerHTML="0";
    
    var newParaDis=document.getElementById('paraShow');
    var newHishab=document.createElement("p");
    newHishab.innerHTML="| | | নতুন হিসাব - নতুন হিসাব | | |";
    var hr= document.createElement("hr");
    
    newHishab.style.fontSize="40px";
 
    newParaDis.appendChild(newHishab);
    newParaDis.appendChild(hr);
}