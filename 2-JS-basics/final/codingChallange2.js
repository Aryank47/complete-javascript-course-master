var billArray = [124, 48, 268];
var tip;
var tipArray=[];
var finalbill=[];

function tipCalculator(billArray){

        if(billArray[i] <= 50){
            tip=(0.2)*billArray;
            
        }
        else if (billArray>50 && billArray<=200){
            tip=(0.15)*billArray;
        }
        else{
            tip=(0.10)*billArray;
        }
        return tip;
    
}

for(var i =0; i<billArray.length;i++){
    var tip=tipCalculator(billArray[i]);
    tipArray.push(tip);
    finalbill.push(tip+billArray[i]);
    console.log("For bill ammount "+ billArray[i]+" the tip is "+tipArray[i]+" and the total bill is "+ finalbill[i])

}
