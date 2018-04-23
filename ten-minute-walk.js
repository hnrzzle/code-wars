function isValidWalk(walk) {
    if (walk.length !== 10)
      return false;
    let dir = {
      n:0,
      s:0,
      w:0,
      e:0,
    }
    for (let i = 0; i < walk.length; i++) {
      dir[walk[i]]++;
    }
    
    if (dir['n'] !== dir['s'] || dir['w'] !== dir['e'])
      return false;
    else {
      return true;
    }
}