var basketballScore = [
    ['John',108,90,200],
    ['Mike',109,87,190,170,200],
    ['Jaya',200,200,150],
];
var avgArray=[];
var numberOfRows = basketballScore.length;
for (let i = 0; i < numberOfRows; i++) {
    var eachRowLength = basketballScore[i].length;
    //console.log(eachRowLength);
    var temp=0;
    for (let j = 1; j < eachRowLength; j++) {
        temp +=basketballScore[i][j];    
    }
    //console.log(temp);
    avgArray.push(temp/(eachRowLength-1));
}
//console.log(avgArray);
//console.log(numberOfRows);
var max=avgArray[0];
var maxIndex=0;
for(let i=1;i<=avgArray.length;i++){
        if(max<avgArray[i]){
            max=avgArray[i];
            maxIndex=i;
        }
}

console.log('The highest avg is of '+ basketballScore[maxIndex][0]+ ' with avg = '+ max);
