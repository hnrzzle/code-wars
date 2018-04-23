function factorial (n) {
    if(n < 0) return null;
    return n <= 1 ? 1 : n * factorial(n-1);
}

// http://www.codewars.com/kata/528e95af53dcdb40b5000171/