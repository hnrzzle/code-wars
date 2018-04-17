function checkThreeAndTwo(array) {
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;
    array.forEach(i => {
      if(i === 'a') aCount++;
      if(i === 'b') bCount++;
      if(i === 'c') cCount++;
    });
    
    if (aCount === 2) {
      if (bCount === 3 || cCount === 3) {
        return true;
      } else return false;
    } else if (aCount === 3) {
      if(bCount === 2 || cCount === 2) {
        return true;
      } else return false;
    }
    if (bCount === 2) {
      if (aCount === 3 || cCount === 3) {
        return true;
      } else return false;
    } else if (bCount === 3) {
      if(aCount === 2 || cCount === 2) {
        return true;
      } else return false;
    }
    if (cCount === 2) {
      if (bCount === 3 || aCount === 3) {
        return true;
      } else return false;
    } else if (cCount === 3) {
      if(bCount === 2 || aCount === 2) {
        return true;
      } else return false;
    }
    
    return false;
}
// lots of refactoring possible here, just need to check if one value = 2, one of the other values have to equal 3
// http://www.codewars.com/kata/check-three-and-two/javascript