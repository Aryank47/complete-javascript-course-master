/*
console.log('Hello World!!!');
var x = 'Chomu';
console.log(x);
var y = true;
console.log(y);
var z;
console.log(z);

var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

*/

/*
alert("bdsjncsj");
var johnHeight = prompt('What is john\'s height in metre?');
var johnWeight = prompt('What is john\'s weight?');
var markHeight = prompt('What is marks\'s height in metre?');
var markWeight = prompt('What is marks\'s weight?');

var johnBMI = johnWeight / (johnHeight*johnHeight);
var markBMI = markWeight / (markHeight * markHeight);
alert(johnBMI+' '+markBMI);

var result = johnBMI > markBMI;
alert(`Is john's BMI greater than mark's?  ${result}`);
*/

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