function twoDecimalPlaces(num) {
    num = num.toString();
    return Number(num.slice(0, (num.indexOf('.')) + 3));
  }

//  http://www.codewars.com/kata/5641c3f809bf31f008000042