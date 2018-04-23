function goto(level,button){
    if(typeof button !== "string") return 0;
    const buttonNum = parseInt(button);
    
    if(buttonNum > 3 || buttonNum < 0) return 0;
    if(level > 3 || level < 0) return 0;
    if(Number.isInteger(buttonNum) && Number.isInteger(level)) {
      const levelDiff = buttonNum - level;
      return levelDiff;
    } else return 0;
}

// kata found here http://www.codewars.com/kata/simple-elevator/javascript
// comment