
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;
    const yearArray = [humanYears];
  
    if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
    yearArray.push(catYears, dogYears);
    }
    else if (humanYears === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
    yearArray.push(catYears, dogYears);
    }
    else if (humanYears > 2) {
    catYears = 24 + ((humanYears - 2) * 4);
    dogYears = 24 + ((humanYears - 2) * 5);
    yearArray.push(catYears, dogYears);
    }
    return yearArray;
  }

// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b