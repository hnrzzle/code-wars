var number = function(busStops){
    const peopleEnteringArray = [];
    const peopleLeavingArray = [];
    busStops.forEach(function(item) {
    console.log(item);
    const peopleEntering = item[0];
    const peopleLeaving = item[1];
    console.log(peopleEntering + ' and ' + peopleLeaving);
    peopleEnteringArray.push(peopleEntering);
    peopleLeavingArray.push(peopleLeaving);
    console.log(peopleEnteringArray);
    console.log(peopleLeavingArray);
    });
    const sum = peopleEnteringArray.reduce(function(a, b) { return a + b; }, 0);
    const subtract = peopleLeavingArray.reduce(function(a, b) { return a + b; }, 0);
    console.log('this is the sum: ' + sum);
    const answer = sum - subtract;
    return answer;
}
// when given arrays of pepole entering the bus and people leaving the bus, gives the total amount of people on the bus at the end
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099